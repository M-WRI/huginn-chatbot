import { useOutletContext } from "react-router-dom";
import { ChatContainer } from "../components/ChatContainer";
import { IMessage } from "../entities";

export const Chatbot = () => {
  const { previousChats, isLoading } = useOutletContext<{
    previousChats: IMessage[];
    isLoading: boolean;
  }>();

  return <ChatContainer previousChats={previousChats} isLoading={isLoading} />;
};
