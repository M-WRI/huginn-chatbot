import { useNavigate } from "react-router-dom";
import { useAuthContext, useChatContext } from "../context";
// import { v4 as uuidv4 } from "uuid"; <----- to be used in the moment the backend can do that
import { Button } from "../components/Button";
import { HuginnIcon } from "../components/Icons";
import { configDefaultStyles } from "../config";
import { Header } from "../components/Header";
import { useEffect } from "react";

export const Start = () => {
  const { setChatId, setPreviousChats } = useChatContext();
  const { authState } = useAuthContext();
  const navigate = useNavigate();

  const chatContainerClasses =
    "sm:relative overflow-auto flex flex-col sm:rounded-lg shadow-lg sm:w-[350px] sm:h-[550px]";

  const mobileContainerClasses =
    "fixed top-0 left-0 right-0 bottom-0 w-screen h-screen";

  const startNewChat = () => {
    localStorage.removeItem("chatId");
    localStorage.removeItem("previousChats");
    const newChatId = Math.floor(100000000 + Math.random() * 90000);
    setChatId(newChatId.toString());
    setPreviousChats([]);
    navigate("/chat-bot");
  };

  console.log(authState, "<------- authState");

  useEffect(() => {
    !authState.isError &&
      authState.authHasBeenTriggered &&
      navigate("/chat-bot");
  }, [authState]);

  return (
    <main
      className={`${chatContainerClasses} ${mobileContainerClasses}`}
      style={{ backgroundColor: configDefaultStyles.appContainer.bg }}
    >
      <Header />
      <div className="m-auto flex flex-col items-center gap-4">
        <p
          className="font-sans text-2xl font-bold pointer-events-none"
          style={{
            color: configDefaultStyles.header.titleColor,
          }}
        >
          {configDefaultStyles.header.title}
        </p>
        <HuginnIcon fill="#FBEA6A" stroke="#FBEA6A" className="w-16 h-16" />
        <Button type="outline" onClick={startNewChat} title="Chat Start">
          Neuen chat beginnen
        </Button>
      </div>
    </main>
  );
};
