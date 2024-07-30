import { useNavigate } from "react-router-dom";
import { useChatContext } from "../context";
// import { v4 as uuidv4 } from "uuid"; <----- to be used in the moment the backend can do that
import { ReactComponent as HuginnIcon } from "../assets/huginn_logo_xl.svg";
import { Button } from "../components/Button";

export const Start = () => {
  const { setChatId, setPreviousChats } = useChatContext();
  const navigate = useNavigate();

  const startNewChat = () => {
    localStorage.removeItem("chatId");
    localStorage.removeItem("previousChats");

    const newChatId = Math.floor(100000000 + Math.random() * 90000);

    setChatId(newChatId.toString());
    setPreviousChats([]);

    navigate("/chat-bot");
  };

  return (
    <main className="start-container">
      <h2 className="start-headline">Huginn</h2>
      <HuginnIcon className="start-logo icon" />
      <Button type="outline" onClick={startNewChat} title="Chat Start">
        Neuen chat beginnen
      </Button>
    </main>
  );
};
