import React, { createContext, useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface IChatBotStateContextType {
  chatIsOpen: boolean;
  setChatIsOpen: (state: boolean) => void;
  fullScreen: boolean;
  setFullScreen: (state: boolean) => void;
  isMobile: boolean;
  isFullScreen: boolean;
}

const ChatBotStateContext = createContext<IChatBotStateContextType | undefined>(
  undefined
);

export const useChatBotState = () => {
  const context = useContext(ChatBotStateContext);
  if (!context) {
    throw new Error(
      "useChatBotState must be used within a ChatBotStateProvider"
    );
  }
  return context;
};

export const ChatBotStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [chatIsOpen, setChatIsOpen] = useState<boolean>(false);
  const [fullScreen, setFullScreen] = useState<boolean>(false);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isFullScreen = fullScreen && !isMobile;

  return (
    <ChatBotStateContext.Provider
      value={{
        chatIsOpen,
        setChatIsOpen,
        fullScreen,
        setFullScreen,
        isMobile,
        isFullScreen,
      }}
    >
      {children}
    </ChatBotStateContext.Provider>
  );
};
