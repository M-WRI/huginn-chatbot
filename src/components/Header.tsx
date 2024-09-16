import { useLocation } from "react-router-dom";
import { configDefaultStyles } from "../config";
import { useChatBotState, useChatContext } from "../context";
import { Button } from "./Button";
import { ArrowDownIcon, CancelIcon, ExpandIcon, HuginnIcon } from "./Icons";

export const Header = () => {
  const { setChatIsOpen, fullScreen, setFullScreen, isFullScreen, isMobile } =
    useChatBotState();
  const { handleFinishChat } = useChatContext();
  const location = useLocation();

  const isNotStartPage = location.pathname !== "/";

  const headerStyles = {
    container: isFullScreen
      ? "flex flex-col gap-4 items-center justify-center"
      : "flex gap-4 items-center justify-between px-4 py-4 border-b",
    logo: isFullScreen
      ? "flex flex-col-reverse items-center gap-4"
      : "flex gap-4 items-center",
    title: "font-sans text-2xl font-bold pointer-events-none",
    navigation: "flex gap-4 items-center",
    icon: isFullScreen ? "w-[66px] h-[66px]" : "w-[40px] h-[40px]",
  };

  const handleMinimizeChatBot = () => {
    setChatIsOpen(false);
  };

  const handleExpandChatBot = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <div
      className={headerStyles.container}
      style={
        fullScreen
          ? { borderRight: `1px solid ${configDefaultStyles.header.border}` }
          : { borderBottom: `1px solid ${configDefaultStyles.header.border}` }
      }
    >
      <div className={headerStyles.logo}>
        <HuginnIcon
          fill={configDefaultStyles.header.iconColor}
          stroke={configDefaultStyles.header.iconColor}
          className={headerStyles.icon}
        />
        <p
          className={headerStyles.title}
          style={{
            color: configDefaultStyles.header.titleColor,
          }}
        >
          {configDefaultStyles.header.title}
        </p>
      </div>
      <div className={headerStyles.navigation}>
        {isFullScreen ? (
          <div className="flex flex-col gap-4">
            <Button onClick={handleExpandChatBot}>Chat minimieren</Button>
            <Button type="primary" onClick={handleFinishChat}>
              Chat beenden
            </Button>
          </div>
        ) : (
          <>
            {isNotStartPage && (
              <CancelIcon
                onClick={handleFinishChat}
                fill={configDefaultStyles.header.iconColor}
              />
            )}
            {isNotStartPage && !isMobile && (
              <ExpandIcon
                action={handleExpandChatBot}
                fill={configDefaultStyles.header.iconColor}
              />
            )}
            <ArrowDownIcon
              action={handleMinimizeChatBot}
              fill={configDefaultStyles.header.iconColor}
            />
          </>
        )}
      </div>
    </div>
  );
};
