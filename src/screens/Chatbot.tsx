import { Header } from "../components/Header";
import { ChatContainer } from "../components/ChatContainer";
import { Input } from "../components/Input";
import { useMessageService } from "../hooks";
import { useOutletContext } from "react-router-dom";
import { ChatContextType } from "../entities";

export const Chatbot = () => {
  const { previousChats, isLoading, value, setValue, getMessages } =
    useMessageService();
  const { chatIsOpen, setChatIsOpen } = useOutletContext<ChatContextType>();

  const handleOpenFullWindowChat = () => {
    const chatUrl = window.location.origin + "/full-screen";
    window.open(chatUrl, "_blank");
  };

  return (
    <>
      <Header
        handleOpenChat={() =>
          setChatIsOpen((prevChatIsOpen: boolean) => !prevChatIsOpen)
        }
        handleOpenFullWindowChat={handleOpenFullWindowChat}
      />
      <ChatContainer previousChats={previousChats} isLoading={isLoading} />
      <Input config={{ value, setValue, getMessages }} />
    </>
  );
};
