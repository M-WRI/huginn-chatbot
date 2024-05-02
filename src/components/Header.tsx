import { ReactComponent as HuginnIcon } from "../assets/huginn_logo_icon.svg";
import { ReactComponent as ExpandIcon } from "../assets/expand_icon.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/arrow_down_icon.svg";
import { Button } from "./Button";
import { useLocation } from "react-router-dom";

export const Header = ({
  handleOpenChat,
  customClass,
  handleOpenFullWindowChat,
}: {
  handleOpenChat?: () => void;
  customClass?: string;
  handleOpenFullWindowChat: () => void;
}) => {
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];

  return (
    <header className={`chatbot-header ${customClass}`}>
      <div className={`chatbot-header-logo ${customClass}`}>
        <HuginnIcon className={`chatbot-header-logo-icon ${customClass}`} />
        <p className={`chatbot-header-logo-text ${customClass}`}>Huginn</p>
      </div>
      <div className={`chatbot-header-button ${customClass}`}>
        {path.length && (
          <>
            {customClass === "full-screen" ? (
              <Button onClick={handleOpenFullWindowChat} type="outline">
                Chat beenden
              </Button>
            ) : (
              <ExpandIcon className="icon" onClick={handleOpenFullWindowChat} />
            )}
          </>
        )}

        {customClass === "full-screen" ? (
          <Button onClick={handleOpenChat} type="primary">
            Chat Fenster minimieren
          </Button>
        ) : (
          <ArrowDownIcon className="icon" onClick={handleOpenChat} />
        )}
      </div>
    </header>
  );
};
