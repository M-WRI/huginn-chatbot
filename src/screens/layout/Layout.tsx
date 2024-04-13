import { Outlet, useLocation } from "react-router-dom";
import { ReactComponent as HuginnIcon } from "../../assets/huginn_logo_icon.svg";
import { useState } from "react";

export const Layout = () => {
  const { pathname } = useLocation();
  const [chatIsOpen, setChatIsOpen] = useState<boolean>(false);

  const path = pathname.split("/")[1];
  const shouldShowOutlet = chatIsOpen || path === "full-screen";

  function handleOpenChat() {
    setChatIsOpen(true);
  }

  return (
    <div className={`app-container ${path}`}>
      {shouldShowOutlet && (
        <div className={`chatbot-container ${path}`}>
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
