import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as HuginnIcon } from "../../assets/huginn_logo_icon.svg";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useApiAuth, useMessageService } from "../../hooks";
import { Input } from "../../components/Input";
import { useChatContext } from "../../context";

export const Layout = () => {
  const { chatId } = useChatContext();
  const { pathname } = useLocation();
  const { checkIsAuth, authState } = useApiAuth();
  const { previousChats, isLoading, value, setValue, getMessages } =
    useMessageService();
  const navigate = useNavigate();

  const [chatIsOpen, setChatIsOpen] = useState<boolean>(false);

  const path = pathname.split("/")[1];
  const shouldShowOutlet = chatIsOpen || path === "full-screen";

  function handleOpenChat() {
    setChatIsOpen(true);
  }

  const handleOpenFullWindowChat = () => {
    navigate("/full-screen");
  };

  const handleFinishChat = () => {
    setChatIsOpen(false);
    localStorage.removeItem("chatId");
    localStorage.removeItem("previousChats");
    navigate("/");
  };

  const handleToggleScreenState = () => {
    setChatIsOpen((prevChatIsOpen: boolean) => !prevChatIsOpen);
  };

  const handleMinimizeFullScreen = () => {
    navigate("/chat-bot");
  };

  useEffect(() => {
    chatIsOpen && !authState.authHasBeenTriggered && checkIsAuth(chatId);
    authState.isError && navigate("/");
  }, [chatIsOpen, authState]);

  return (
    <div className={`app-container ${path}`}>
      {shouldShowOutlet && (
        <div className={`chatbot-container ${path}`}>
          <Header
            handleCancelChat={() => handleFinishChat()}
            handleOpenChat={
              path === "full-screen"
                ? () => handleMinimizeFullScreen()
                : () => handleToggleScreenState()
            }
            handleOpenFullWindowChat={
              path === "full-screen"
                ? () => handleFinishChat()
                : () => handleOpenFullWindowChat()
            }
            customClass={path}
          />
          <div className="test">
            <Outlet context={{ previousChats, isLoading }} />
            {path.length && (
              <Input config={{ value, setValue, getMessages, isLoading }} />
            )}
          </div>
        </div>
      )}

      {!chatIsOpen && path !== "full-screen" && (
        <div className="chatbot-button" onClick={handleOpenChat}>
          <HuginnIcon className="chatbot-button-icon" />
        </div>
      )}
    </div>
  );
};

export default Layout;
