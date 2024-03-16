import { useEffect, useState } from "react";
import { IMessage } from "../entities";
import { Header } from "../components/Header";
import { ChatContainer } from "../components/ChatContainer";
import { Input } from "../components/Input";

import { ReactComponent as HuginnIcon } from "../assets/huginn_logo_icon.svg";
import { useChatContext } from "../context";

export const Chatbot = ({ fullScreen }: { fullScreen?: boolean }) => {
  const { previousChats, setPreviousChats } = useChatContext();

  const [value, setValue] = useState<string>("");
  const [message, setMessage] = useState<IMessage | null>(null);
  const [chatIsOpen, setChatIsOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getMessages = async () => {
    setPreviousChats((prevChats: IMessage[]) => [
      ...prevChats,
      { role: "user", content: value },
    ]);
    setValue("");

    const options = {
      method: "POST",
      body: JSON.stringify({
        messages: [{ role: "user", content: value }],
      }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      setIsLoading(true);
      const response = await fetch(
        "https://test-server-buycehv3va-ew.a.run.app/completions",
        options
      );
      const data = await response.json();
      setMessage(data.choices[0].message);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenChat = () => {
    setChatIsOpen((prevChatIsOpen: boolean) => !prevChatIsOpen);
  };

  const handleOpenFullWindowChat = () => {
    const chatUrl = window.location.origin + "/full-screen";
    window.open(chatUrl, "_blank");
  };

  useEffect(() => {
    if (message) {
      setPreviousChats((prevChats: IMessage[]) => [
        ...prevChats,
        { role: message.role, content: message.content },
      ]);
    }
  }, [message]);

  useEffect(() => {
    if (fullScreen) {
      const savedChats = localStorage.getItem("previousChats");
      if (savedChats) {
        setPreviousChats(JSON.parse(savedChats));
      }
    }
  }, [fullScreen]);

  useEffect(() => {
    localStorage.setItem("previousChats", JSON.stringify(previousChats));
  }, [previousChats]);

  return (
    <div className="app-container">
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
