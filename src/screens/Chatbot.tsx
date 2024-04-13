import { useOutletContext } from "react-router-dom";
import { ChatContainer } from "../components/ChatContainer";

export const Chatbot = () => {
  const { previousChats, isLoading } = useOutletContext<any>();

  return <ChatContainer previousChats={previousChats} isLoading={isLoading} />;
};
