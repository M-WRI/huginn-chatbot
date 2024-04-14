import { Outlet, useLocation } from "react-router-dom";
import { ReactComponent as HuginnIcon } from "../../assets/huginn_logo_icon.svg";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useApiAuth, useMessageService } from "../../hooks";
import { Input } from "../../components/Input";

export const Layout = () => {
  const { pathname } = useLocation();
  const { checkIsAuth, authState } = useApiAuth();
  const { previousChats, isLoading, value, setValue, getMessages } =
    useMessageService();

  const [chatIsOpen, setChatIsOpen] = useState<boolean>(false);

  const path = pathname.split("/")[1];
  const shouldShowOutlet = chatIsOpen || path === "full-screen";

  function handleOpenChat() {
    setChatIsOpen(true);
  }

  const handleOpenFullWindowChat = () => {
    const chatUrl = window.location.origin + "/full-screen";
    window.open(chatUrl, "_blank");
  };

  useEffect(() => {
    chatIsOpen && !authState.authHasBeenTriggered && checkIsAuth("");
  }, [chatIsOpen]);

  return (
    <div className={`app-container ${path}`}>
      {shouldShowOutlet && (
        <div className={`chatbot-container ${path}`}>
          {authState.isError && <ErrorModal {...authState.state} />}
          <Header
            handleOpenChat={() =>
              setChatIsOpen((prevChatIsOpen: boolean) => !prevChatIsOpen)
            }
            handleOpenFullWindowChat={handleOpenFullWindowChat}
          />
          <Outlet context={{ previousChats, isLoading }} />
          <Input config={{ value, setValue, getMessages }} />
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

const ErrorModal = ({ ...props }) => {
  const { title, message } = ERROR_CODES[props.error_code];

  return (
    <div className="test-modal">
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};

const ERROR_CODES: any = {
  token_empty: {
    title: "Kein Token",
    message: "Sie haben keinen token gesendet",
  },
  token_not_found: {
    title: "Ungültiger Token",
    message: "Der von ihnen gesendete Token existiert nicht",
  },
  token_expired: {
    title: "Zeit limit überschritten",
    message:
      "Das Zeitlimit würde überschritten, Sie können einen neuen Chat anfanen",
  },
};
