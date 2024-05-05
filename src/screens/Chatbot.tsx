import { useOutletContext } from "react-router-dom";
import { ChatContainer } from "../components/ChatContainer";
import { IMessage } from "../entities";

export const Chatbot = () => {
  const { previousChats } = useOutletContext<{
    previousChats: IMessage[];
  }>();

  return <ChatContainer previousChats={previousChats} />;
};
