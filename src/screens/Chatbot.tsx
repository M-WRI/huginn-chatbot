import { useState } from "react";
import { Header } from "../components/Header";
import { ChatContainer } from "../components/ChatContainer";
import { Input } from "../components/Input";
import { ReactComponent as HuginnIcon } from "../assets/huginn_logo_icon.svg";
import { useMessageService } from "../hooks";

export const Chatbot = () => {
  const { previousChats, isLoading, value, setValue, getMessages } =
    useMessageService();

  const [chatIsOpen, setChatIsOpen] = useState<boolean>(false);

  const handleOpenChat = () => {
    setChatIsOpen((prevChatIsOpen: boolean) => !prevChatIsOpen);
  };

  const handleOpenFullWindowChat = () => {
    const chatUrl = window.location.origin + "/full-screen";
    window.open(chatUrl, "_blank");
  };

  return (
    <div className={`app-container`}>
      {chatIsOpen && (
        <div className="chatbot-container">
          <Header
            handleOpenChat={handleOpenChat}
            handleOpenFullWindowChat={handleOpenFullWindowChat}
          />
          <ChatContainer previousChats={previousChats} isLoading={isLoading} />
          <Input config={{ value, setValue, getMessages }} />
        </div>
      )}
      {!chatIsOpen && (
        <div className="chatbot-button" onClick={() => handleOpenChat()}>
          <HuginnIcon className="chatbot-button-icon" />
        </div>
      )}
    </div>
  );
};
