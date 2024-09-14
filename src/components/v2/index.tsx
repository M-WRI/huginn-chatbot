import { HuginnIcon } from "../Icons";
import { configDefaultStyles } from "../../config";
import { useAuthContext, useChatBotState, useChatContext } from "../../context";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useApiAuth } from "../../hooks";

export const NewChatBot = () => {
  const { chatIsOpen, setChatIsOpen } = useChatBotState();
  const { authState } = useAuthContext();
  const { checkIsAuth } = useApiAuth();
  const { chatId } = useChatContext();



  console.log(authState, "<-------------");
  const navigate = useNavigate();

  const shouldShowOutlet = chatIsOpen;

  const handleOpenChat = () => {
    setChatIsOpen(true);
  };

  useEffect(() => {
    if (!chatIsOpen) {
      navigate("/");
    }
  }, [chatIsOpen, navigate]);

  useEffect(() => {
    checkIsAuth(chatId);
  }, [chatId, checkIsAuth]);

  return (
    <div className={`fixed bottom-[32px] right-[32px] z-50`}>
      {shouldShowOutlet && <Outlet />}
      <div className="fixed right-[35px] bottom-[35px] z-50">
        {!chatIsOpen && (
          <div
            className="absolute bottom-0 right-0 z-10 flex justify-center items-center w-20 h-20 hover:scale-95 transition-all cursor-pointer rounded-full shadow-lg"
            onClick={handleOpenChat}
            style={{
              backgroundColor: configDefaultStyles.appContainer.bg,
            }}
          >
            <HuginnIcon
              className="w-11 h-11 cursor-pointer"
              fill={configDefaultStyles.header.iconColor}
            />
          </div>
        )}
      </div>
    </div>
  );
};
