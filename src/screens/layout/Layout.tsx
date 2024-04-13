import { Outlet, useLocation } from "react-router-dom";
import { ReactComponent as HuginnIcon } from "../../assets/huginn_logo_icon.svg";
import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { useApiAuth } from "../../hooks";

export const Layout = () => {
  const { pathname } = useLocation();
  const { checkIsAuth, isAuthenticated } = useApiAuth();

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
    chatIsOpen && checkIsAuth("1000");
  }, [chatIsOpen]);

  return (
    <div className={`app-container ${path}`}>
      {shouldShowOutlet && (
        <div className={`chatbot-container ${path}`}>
          <Header
            handleOpenChat={() =>
              setChatIsOpen((prevChatIsOpen: boolean) => !prevChatIsOpen)
            }
            handleOpenFullWindowChat={handleOpenFullWindowChat}
          />
          <Outlet context={{ chatIsOpen, setChatIsOpen }} />
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
