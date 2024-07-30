import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as HuginnIcon } from "../../assets/huginn_logo_icon.svg";
import { useEffect, useRef, useState } from "react";
import { Header } from "../../components/Header";
import { useApiAuth, useMessageService } from "../../hooks";
import { Input } from "../../components/Input";
import { useChatContext } from "../../context";
import { useScreenWidth } from "../../hooks/useScreenWitdth";

export const Layout = () => {
  const { chatId } = useChatContext();
  const { pathname } = useLocation();
  const { checkIsAuth, authState } = useApiAuth();
  const { previousChats, isLoading, value, setValue, getMessages } =
    useMessageService();
  const navigate = useNavigate();
  const width = useScreenWidth();

  const isMobile = width < 645;

  const [chatIsOpen, setChatIsOpen] = useState<boolean>(false);

  const path = pathname.split("/")[1];
  const shouldShowOutlet = chatIsOpen || path === "full-screen";

  const handleMouseEnter = () => {
    (document.body as HTMLBodyElement).style.overflow = "hidden";
    (document.documentElement as HTMLElement).style.overflow = "hidden";
    const offCanvasWrapper = document.querySelector(
      ".off-canvas-wrapper"
    ) as HTMLElement;
    if (offCanvasWrapper) {
      offCanvasWrapper.style.overflow = "hidden";
    }
  };

  const handleMouseLeave = () => {
    (document.body as HTMLBodyElement).style.overflow = "";
    (document.documentElement as HTMLElement).style.overflow = "";
    const offCanvasWrapper = document.querySelector(
      ".off-canvas-wrapper"
    ) as HTMLElement;
    if (offCanvasWrapper) {
      offCanvasWrapper.style.overflow = "";
    }
  };

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
    !chatIsOpen && handleMouseLeave();
  }, [chatIsOpen, authState]);

  return (
    <>
      <div
        className={`app-container ${path}`}
        onMouseEnter={() => handleMouseEnter()}
        onMouseLeave={() => handleMouseLeave()}
        onTouchStart={() => handleMouseEnter()}
        onTouchEnd={() => handleMouseLeave()}
      >
        {shouldShowOutlet && (
          <div className={`chatbot-container ${path}`}>
            <Header
              handleCancelChat={() => handleFinishChat()}
              handleOpenChat={
                path === "full-screen" && !isMobile
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
              {path.length ? (
                <Input config={{ value, setValue, getMessages, isLoading }} />
              ) : null}
            </div>
          </div>
        )}
      </div>
      <div className="huggin-logo-icon">
        {!chatIsOpen && path !== "full-screen" && (
          <div className="chatbot-button" onClick={handleOpenChat}>
            <HuginnIcon className="chatbot-button-icon icon" />
          </div>
        )}
      </div>
    </>
  );
};

export default Layout;
