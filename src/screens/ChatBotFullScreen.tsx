import { ChatContainer } from "../components/ChatContainer";
import { Input } from "../components/Input";
import { useMessageService } from "../hooks";

export const ChatBotFullScreen = () => {
  const { previousChats, isLoading, value, setValue, getMessages } =
    useMessageService();

  return (
    <>
      <ChatContainer previousChats={previousChats} isLoading={isLoading} />
      <Input config={{ value, setValue, getMessages }} />
    </>
  );
};
