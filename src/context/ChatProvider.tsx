import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
  Dispatch,
  SetStateAction,
} from "react";
import { IMessage } from "../entities";

interface IChatContext {
  chatId: string | null;
  setChatId: Dispatch<SetStateAction<string | null>>;
  previousChats: IMessage[];
  setPreviousChats: Dispatch<SetStateAction<IMessage[]>>;
  handleFinishChat: () => void;
}

interface ChatProviderProps {
  children: ReactNode;
}

const ChatContext = createContext<IChatContext | undefined>(undefined);

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [chatId, setChatId] = useState<string | null>(() => {
    const storedChatId = localStorage.getItem("chatId");
    return storedChatId ? storedChatId : null;
  });
  const [previousChats, setPreviousChats] = useState<IMessage[]>(() => {
    const storedChats = localStorage.getItem("previousChats");
    return storedChats ? JSON.parse(storedChats) : [];
  });

  const handleFinishChat = () => {
    localStorage.removeItem("chatId");
    localStorage.removeItem("previousChats");
    setChatId(null);
    setPreviousChats([]);
  };

  useEffect(() => {
    localStorage.setItem("chatId", chatId ?? "");
  }, [chatId]);

  useEffect(() => {
    localStorage.setItem("previousChats", JSON.stringify(previousChats));
  }, [previousChats]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "chatId" && event.newValue !== null) {
        setChatId(event.newValue);
      } else if (event.key === "previousChats") {
        const newChats = event.newValue ? JSON.parse(event.newValue) : [];
        setPreviousChats(newChats);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <ChatContext.Provider
      value={{
        chatId,
        setChatId,
        previousChats,
        setPreviousChats,
        handleFinishChat,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
