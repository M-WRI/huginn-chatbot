import { configDefaultStyles } from "../../../config";
import { Header } from "./Header";
import { Input } from "./Input";
import { Messages } from "./Messages";

export const ChatBot = ({
  setChatIsOpen,
  setFullScreen,
  fullScreen,
}: {
  setChatIsOpen: (state: boolean) => void;
  setFullScreen: (state: boolean) => void;
  fullScreen: boolean;
}) => {
  const chatContainerClasses =
    "sm:relative overflow-auto flex flex-1 flex-col justify-between sm:rounded-lg shadow-lg sm:w-[350px] sm:h-[550px]";

  const mobileContainerClasses =
    "fixed top-0 left-0 right-0 bottom-0 w-screen h-screen";

  return (
    <>
      {fullScreen ? (
        <div
          className={`fixed top-0 left-0 right-0 bottom-0 w-screen h-screen`}
          style={{ backgroundColor: configDefaultStyles.appContainer.bg }}
        >
          <div className="grid grid-cols-[350px_1fr] h-full">
            <Header
              fullScreen={fullScreen}
              setChatIsOpen={setChatIsOpen}
              setFullScreen={setFullScreen}
            />

            <div className="flex flex-col overflow-y-auto">
              <Messages fullScreen={fullScreen} />
              <Input />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`${chatContainerClasses} ${mobileContainerClasses}`}
          style={{ backgroundColor: configDefaultStyles.appContainer.bg }}
        >
          <Header setChatIsOpen={setChatIsOpen} setFullScreen={setFullScreen} />
          <Messages />
          <Input />
        </div>
      )}
    </>
  );
};
