import { ReactComponent as HuginnIcon } from "../assets/huginn_logo_icon.svg";
import { ReactComponent as ExpandIcon } from "../assets/expand_icon.svg";
import { ReactComponent as ArrowDownIcon } from "../assets/arrow_down_icon.svg";

export const Header = ({
  handleOpenChat,
  handleOpenFullWindowChat,
}: {
  handleOpenChat: () => void;
  handleOpenFullWindowChat: () => void;
}) => {
  return (
    <header className="chatbot-header">
      <div className="chatbot-header-logo">
        <HuginnIcon />
        <p className="chatbot-header-logo-text">Huginn</p>
      </div>
      <div className="chatbot-header-button">
        <ExpandIcon className="icon" onClick={handleOpenFullWindowChat} />
        <ArrowDownIcon className="icon" onClick={handleOpenChat} />
      </div>
    </header>
  );
};
