import { ReactComponent as HuginnIcon } from "../assets/huginn_logo_icon.svg";
import { ReactComponent as ExpandIcon } from "../assets/expand_icon.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/arrow_down_icon.svg";
import { ReactComponent as CancelIcon } from "../assets/cancel_icon.svg";
import { Button } from "./Button";
import { useLocation } from "react-router-dom";
import { useScreenWidth } from "../hooks/useScreenWitdth";
import { useChatbotConfig } from "../context";

export const Header = ({
  customClass,
  handleOpenChat,
  handleOpenFullWindowChat,
  handleCancelChat,
}: {
  customClass?: string;
  handleOpenChat?: () => void;
  handleOpenFullWindowChat: () => void;
  handleCancelChat: () => void;
}) => {
  const { config } = useChatbotConfig();
  const { pathname } = useLocation();
  const path = pathname.split("/")[1];
  const width = useScreenWidth();

  const isMobile = width < 645;

  console.log();

  return (
    <header
      className={`chatbot-header ${customClass}`}
      style={{
        borderBottom: `1px solid ${config?.borderBottomColor}`,
      }}
    >
      <div className={`chatbot-header-logo ${customClass}`}>
        <HuginnIcon
          className={`chatbot-header-logo-icon ${customClass} icon`}
        />
        <p className={`chatbot-header-logo-text ${customClass}`}>
          {config?.title}
        </p>
      </div>
      <div className={`chatbot-header-button ${customClass}`}>
        {isMobile || (path.length && customClass !== "full-screen") ? (
          <div title="Chat Beenden">
            <CancelIcon className="icon" onClick={handleCancelChat} />
          </div>
        ) : null}
        {path.length ? (
          <>
            {!isMobile && (
              <>
                {customClass === "full-screen" && !isMobile ? (
                  <Button
                    onClick={handleOpenFullWindowChat}
                    type="outline"
                    title="Chat Beenden"
                  >
                    Chat beenden
                  </Button>
                ) : (
                  <div title="Vollbild">
                    <ExpandIcon
                      className="icon"
                      onClick={handleOpenFullWindowChat}
                    />
                  </div>
                )}
              </>
            )}
          </>
        ) : null}

        {customClass === "full-screen" && !isMobile ? (
          <Button
            onClick={handleOpenChat}
            type="primary"
            title="Chat Minimieren"
          >
            Chat Fenster minimieren
          </Button>
        ) : (
          <div title="Chat Minimieren">
            <ArrowDownIcon className="icon" onClick={handleOpenChat} />
          </div>
        )}
      </div>
    </header>
  );
};
