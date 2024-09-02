import React, { createContext, useContext, useEffect, useState } from "react";

interface ChatbotConfigContextType {
  config: ChatbotConfig | null;
}

const ChatbotConfigContext = createContext<ChatbotConfigContextType>({
  config: null,
});

export const ChatbotConfigProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [config, setConfig] = useState<ChatbotConfig | null>(null);

  useEffect(() => {
    console.log("Setting up event listener for chatbotConfigLoaded");
    const handleConfigLoaded = (event: Event) => {
      const customEvent = event as CustomEvent<ChatbotConfig>;
      setConfig(customEvent.detail);
    };

    window.addEventListener("chatbotConfigLoaded", handleConfigLoaded);

    return () => {
      window.removeEventListener("chatbotConfigLoaded", handleConfigLoaded);
    };
  }, []);

  return (
    <ChatbotConfigContext.Provider value={{ config }}>
      {children}
    </ChatbotConfigContext.Provider>
  );
};

export const useChatbotConfig = () => {
  return useContext(ChatbotConfigContext);
};

export interface ChatbotConfig {
  id: number;
  title: string;
  titleColor: string;
  containerColor: string;
  borderBottomColor: string;
  assistantBgColor: string;
  assistantTextColor: string;
  userBgColor: string;
  userTextColor: string;
  inputBgColor: string;
  inputTextColor: string;
  inputBoxShadow: string;
  huginnLogoColor: string;
  cancelIconColor: string;
  expandIconColor: string;
  arrowDownIconColor: string;
  sendMessageIconColor: string;
  userId: number;
  createdAt: string;
  updatedAt: string;
}
