import { useNavigate } from "react-router-dom";
import { useChatContext } from "../context";
// import { v4 as uuidv4 } from "uuid"; <----- to be used in the moment the backend can do that
import { Button } from "../components/Button";
import { HuginnIcon } from "../components/Icons";

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
    // start-container
    <main className="h-full w-full flex justify-center items-center flex-col gap-4">
      {/* start-headline */}
      <h2
        className="start-headline font-sans font-bold text-2xl"
        style={{
          // CONFIG - START COLOR
          color: "#fbea6a",
        }}
      >
        {/* CONFIG - TITLE */}
        Huginn
      </h2>
      {/* CONFIG - ICON COLOR */}
      {/* start-logo */}
      <HuginnIcon fill="#FBEA6A" stroke="#FBEA6A" className="w-16 h-16" />
      <Button type="outline" onClick={startNewChat} title="Chat Start">
        Neuen chat beginnen
      </Button>
    </main>
  );
};
