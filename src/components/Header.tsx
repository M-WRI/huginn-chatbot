import { useLocation } from "react-router-dom";
import { configDefaultStyles } from "../config";
import { useChatBotState, useChatContext } from "../context";
import { Button } from "./Button";
import { ArrowDownIcon, CancelIcon, ExpandIcon, HuginnIcon } from "./Icons";
import { useEffect } from "react";
import { injectDynamicStyles } from "../screens";

export const Header = () => {
  const { setChatIsOpen, fullScreen, setFullScreen, isFullScreen, isMobile } =
    useChatBotState();
  const { handleFinishChat } = useChatContext();
  const location = useLocation();

  const isNotStartPage = location.pathname !== "/";

  useEffect(() => {
    injectDynamicStyles(configDefaultStyles);
  }, []);

  const headerStyles = {
    container: isFullScreen
      ? "dynamic-header-border-right !flex !flex-col !gap-4 !items-center !justify-center"
      : "dynamic-header-border-bottom !flex !gap-4 !items-center !justify-between !px-4 !py-4",
    logo: isFullScreen
      ? "!flex !flex-col-reverse !items-center !gap-4"
      : "!flex !gap-4 !items-center",
    title:
      "dynamic-header-title !font-sans !text-2xl !font-bold !pointer-events-none !mb-0",
    navigation: "!flex !gap-4 !items-center",
    icon: isFullScreen
      ? "dynamic-header-icon !w-[66px] !h-[66px]"
      : "dynamic-header-icon !w-[40px] !h-[40px]",
  };

  const handleMinimizeChatBot = () => {
    setChatIsOpen(false);
  };

  const handleExpandChatBot = () => {
    setFullScreen(!fullScreen);
  };

  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.logo}>
        <HuginnIcon className={headerStyles.icon} />
        <p className={headerStyles.title}>{configDefaultStyles.header.title}</p>
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
                customClass="dynamic-header-icon"
              />
            )}
            {isNotStartPage && !isMobile && (
              <ExpandIcon
                action={handleExpandChatBot}
                customClass="dynamic-header-icon"
              />
            )}
            <ArrowDownIcon
              action={handleMinimizeChatBot}
              customClass="dynamic-header-icon"
            />
          </>
        )}
      </div>
    </div>
  );
};
