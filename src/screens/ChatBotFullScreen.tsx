import { Header } from "../components/Header";
import { ChatContainer } from "../components/ChatContainer";
import { Input } from "../components/Input";
import { useMessageService } from "../hooks";

export const ChatBotFullScreen = () => {
  const { previousChats, isLoading, value, setValue, getMessages } =
    useMessageService();

  const handleOpenFullWindowChat = () => {
    const chatUrl = window.location.origin + "/full-screen";
    window.open(chatUrl, "_blank");
  };

  return (
    <div className="chatbot-container full-screen">
      <Header handleOpenFullWindowChat={handleOpenFullWindowChat} />
      <ChatContainer previousChats={previousChats} isLoading={isLoading} />
      <Input config={{ value, setValue, getMessages }} />
    </div>
  );
};
