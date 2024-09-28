import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useChatBotState, useChatContext } from "../../context";
import { useApiAuth } from "../../hooks";
import { configDefaultStyles } from "../../config";
import { HuginnIcon } from "../../components/Icons";

export const ChatBotLayout = () => {
  const { chatIsOpen, setChatIsOpen } = useChatBotState();
  const { checkIsAuth, authState } = useApiAuth();
  const { chatId } = useChatContext();

  const handleMouseEnter = () => {
    (document.body as HTMLBodyElement).style.overflow = "hidden";
    (document.documentElement as HTMLElement).style.overflow = "hidden";
    const offCanvasWrapper = document.querySelector(
      ".off-canvas-wrapper"
    ) as HTMLElement;
    if (offCanvasWrapper) {
      offCanvasWrapper.style.overflow = "hidden";
      offCanvasWrapper.style.touchAction = "none";
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
      offCanvasWrapper.style.touchAction = "";
    }
  };

  const shouldShowOutlet = chatIsOpen;

  const handleOpenChat = () => {
    setChatIsOpen(true);
  };

  useEffect(() => {
    injectDynamicStyles(configDefaultStyles);
  }, []);

  useEffect(() => {
    chatIsOpen && !authState.authHasBeenTriggered && checkIsAuth(chatId);
  }, [chatIsOpen, authState]);

  return (
    <div
      id="my-widget-id"
      className={`widget-container fixed bottom-[32px] right-[32px] z-[9999999999999999]`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      {shouldShowOutlet && <Outlet />}
      <div className="fixed right-[35px] bottom-[35px] z-50">
        {!chatIsOpen && (
          <div
            className={`absolute bottom-0 right-0 z-10 flex justify-center items-center w-20 h-20 hover:scale-95 transition-all cursor-pointer rounded-full shadow-lg dynamic-widget-button`}
            onClick={handleOpenChat}
          >
            <HuginnIcon className="w-11 h-11 cursor-pointer dynamic-widget-icon" />
          </div>
        )}
      </div>
    </div>
  );
};

export const injectDynamicStyles = (styles: any) => {
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";

  const styleString = `
    #my-widget-id .dynamic-widget-button {
      background-color: ${styles.appContainer.bg} !important;
    }
    
    #my-widget-id .dynamic-widget-icon {
      fill: ${styles.header.iconColor} !important;
    }

    #my-widget-id .dynamic-header-border-bottom {
      border-bottom: 1px solid ${styles.header.border} !important;
    }

    #my-widget-id .dynamic-header-border-right {
      border-right: 1px solid ${styles.header.border} !important;
    }

    #my-widget-id .dynamic-header {
      color: ${styles.header.titleColor} !important;
    }

    #my-widget-id .dynamic-header-title {
      color: ${styles.header.titleColor} !important;
    }

    #my-widget-id .dynamic-header-icon {
      fill: ${styles.header.iconColor} !important;
      stroke: ${styles.header.iconColor} !important;
    }

    #my-widget-id .dynamic-button-outline {
      color: ${styles.button.outline.color} !important;
      background-color: transparent !important;
      border: 1px solid ${styles.button.outline.color} !important;
    }

    #my-widget-id .dynamic-button-primary {
      color: ${styles.button.primary.color} !important;
      background-color: ${styles.button.primary.bg} !important;
    }

    #my-widget-id .dynamic-input-field {
      background-color: ${styles.input.bg} !important;
      color: ${styles.input.color} !important;
    }

    #my-widget-id .dynamic-input-icon {
      fill: ${styles.input.iconColor} !important;
    }

    #my-widget-id .dynamic-user-message {
      background-color: ${styles.chat.user.bg} !important;
    }

    #my-widget-id .dynamic-user-message p {
      color: ${styles.chat.user.color} !important;
    }
    #my-widget-id .dynamic-user-message li {
      color: ${styles.chat.user.color} !important;
    }

    #my-widget-id .dynamic-assistant-message {
      background-color: ${styles.chat.assistant.bg} !important;
    }

    #my-widget-id .dynamic-assistant-message p {
      color: ${styles.chat.assistant.color} !important;
    }
    
    #my-widget-id .dynamic-assistant-message li {
      color: ${styles.chat.assistant.color} !important;
    }
  `;

  styleSheet.innerText = styleString;
  document.head.appendChild(styleSheet);
};
