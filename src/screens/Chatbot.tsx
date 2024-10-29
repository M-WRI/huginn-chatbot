import { useEffect } from "react";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { Messages } from "../components/Messages";
import { useAuthContext, useChatBotState, useChatContext } from "../context";
import { useMessageService } from "../hooks";
import { configDefaultStyles } from "../config";
import { useNavigate } from "react-router-dom";
import { injectDynamicStyles } from "./layout";

export const Chatbot = () => {
  const { isFullScreen, setFullScreen } = useChatBotState();
  const { chatId } = useChatContext();
  const { authState } = useAuthContext();
  const { previousChats, isLoading, value, setValue, getMessages } =
    useMessageService();
  const navigate = useNavigate();

  const chatContainerClasses =
    "sm:relative overflow-auto flex flex-1 flex-col justify-between sm:rounded-lg shadow-lg sm:w-[350px] sm:h-[550px]";
  const mobileContainerClasses =
    "fixed top-0 left-0 right-0 bottom-0 w-screen h-screen";

  useEffect(() => {
    authState.isError && !authState.authHasBeenTriggered && navigate("/");
  }, [authState, navigate]);

  useEffect(() => {
    if (!chatId) {
      setFullScreen(false);
      navigate("/");
    }
  }, [chatId, navigate, setFullScreen]);

  useEffect(() => {
    injectDynamicStyles(configDefaultStyles);
  }, []);

  return (
    <>
      {isFullScreen ? (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen"
          style={{ backgroundColor: configDefaultStyles.appContainer.bg }}
        >
          <div className="grid grid-cols-[350px_1fr] h-full">
            <Header />
            <div className="flex flex-col overflow-y-auto">
              <Messages previousChats={previousChats} />
              <Input
                value={value}
                setValue={setValue}
                getMessages={getMessages}
                isLoading={isLoading}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${chatContainerClasses} ${mobileContainerClasses}`}
          style={{ backgroundColor: configDefaultStyles.appContainer.bg }}
        >
          <Header />
          <Messages previousChats={previousChats} />
          <Input
            value={value}
            setValue={setValue}
            getMessages={getMessages}
            isLoading={isLoading}
          />
        </div>
      )}
    </>
  );
};
