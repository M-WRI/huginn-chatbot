import { configDefaultStyles } from "../../../config";
import { Button } from "../../Button";
import { ArrowDownIcon, CancelIcon, ExpandIcon, HuginnIcon } from "../../Icons";

export const Header = ({
  setChatIsOpen,
  setFullScreen,
  fullScreen,
}: {
  setChatIsOpen: (state: boolean) => void;
  setFullScreen: (state: boolean) => void;
  fullScreen?: boolean;
}) => {
  const headerStyles = {
    container: fullScreen
      ? "flex flex-col gap-4 items-center justify-center"
      : "flex gap-4 items-center justify-between px-4 py-4 border-b",
    logo: fullScreen
      ? "flex flex-col-reverse items-center gap-4"
      : "flex gap-4 items-center",
    title: "font-sans text-2xl font-bold pointer-events-none",
    navigation: "flex gap-4 items-center",
    icon: fullScreen ? "w-[66px] h-[66px]" : "w-[40px] h-[40px]",
  };

  const handleMinimizeChatBot = () => {
    setChatIsOpen(false);
  };

  const handleExpandChatBot = () => {
    setFullScreen(true);
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
        {fullScreen ? (
          <div className="flex flex-col gap-4">
            <Button>Chat minimieren</Button>
            <Button type="primary">Chat beenden</Button>
          </div>
        ) : (
          <>
            <CancelIcon fill={configDefaultStyles.header.iconColor} />
            <ExpandIcon
              action={handleExpandChatBot}
              fill={configDefaultStyles.header.iconColor}
            />
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
