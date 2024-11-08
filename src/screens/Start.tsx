import { useNavigate } from "react-router-dom";
import { useAuthContext, useChatContext } from "../context";
import { v4 as uuidv4 } from "uuid";
import { Button } from "../components/Button";
import { HuginnIcon } from "../components/Icons";
import { configDefaultStyles } from "../config";
import { Header } from "../components/Header";
import { useEffect } from "react";
import { injectDynamicStyles } from "./layout";

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
    const newChatId = uuidv4(); // using uuid to generate a unique ID
    setChatId(newChatId);
    setPreviousChats([]);
    navigate("/chat-bot");
  };

  useEffect(() => {
    injectDynamicStyles(configDefaultStyles);
  }, []);

  useEffect(() => {
    !authState.isError &&
      authState.authHasBeenTriggered &&
      navigate("/chat-bot");
  }, [authState, navigate]);

  return (
    <main
      className={`${chatContainerClasses} ${mobileContainerClasses}`}
      style={{ backgroundColor: configDefaultStyles.appContainer.bg }}
    >
      <Header />
      <div className="!m-auto !flex !flex-col !items-center !gap-4">
        <p
          className="!font-sans !text-2xl !font-bold !pointer-events-none dynamic-header-title"
          style={{
            color: configDefaultStyles.header.titleColor,
          }}
        >
          {configDefaultStyles.header.title}
        </p>
        <HuginnIcon
          fill={configDefaultStyles.header.iconColor}
          stroke={configDefaultStyles.header.iconColor}
          className="!w-16 !h-16 dynamic-header-icon"
        />
        <Button type="outline" onClick={startNewChat} title="Chat Start">
          Neuen chat beginnen
        </Button>
      </div>
    </main>
  );
};
