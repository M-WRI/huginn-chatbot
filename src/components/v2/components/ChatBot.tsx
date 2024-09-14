import { useEffect } from "react";
import { configDefaultStyles } from "../../../config";
import {
  useAuthContext,
  useChatBotState,
  useChatContext,
} from "../../../context";
import { useApiAuth, useMessageService } from "../../../hooks";
import { Header } from "./Header";
import { Input } from "./Input";
import { Messages } from "./Messages";

export const ChatBot = () => {
  const { chatId } = useChatContext();
  const { isFullScreen } = useChatBotState();
  const { checkIsAuth } = useApiAuth();
  const { authState } = useAuthContext();
  const { previousChats, isLoading, value, setValue, getMessages } =
    useMessageService();

  const chatContainerClasses =
    "sm:relative overflow-auto flex flex-1 flex-col justify-between sm:rounded-lg shadow-lg sm:w-[350px] sm:h-[550px]";

  const mobileContainerClasses =
    "fixed top-0 left-0 right-0 bottom-0 w-screen h-screen";

  useEffect(() => {
    !authState && checkIsAuth(chatId);
  }, [chatId, checkIsAuth]);

  return (
    <>
      {isFullScreen ? (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 w-screen h-screen`}
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