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
  previousChats: IMessage[];
  setPreviousChats: Dispatch<SetStateAction<IMessage[]>>;
}

interface ChatProviderProps {
  children: ReactNode;
}

const ChatContext = createContext<IChatContext | undefined>(undefined);

export const ChatProvider: React.FC<ChatProviderProps> = ({ children }) => {
  const [previousChats, setPreviousChats] = useState<IMessage[]>(() => {
    const storedChats = localStorage.getItem("previousChats");
    return storedChats ? JSON.parse(storedChats) : [];
  });

  useEffect(() => {
    localStorage.setItem("previousChats", JSON.stringify(previousChats));
  }, [previousChats]);

  useEffect(() => {
    const handleStorageChange = (event: StorageEvent) => {
      if (event.key === "previousChats") {
        const newChats = event.newValue ? JSON.parse(event.newValue) : [];
        setPreviousChats(newChats);
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return (
    <ChatContext.Provider value={{ previousChats, setPreviousChats }}>
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
