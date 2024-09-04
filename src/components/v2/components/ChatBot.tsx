import { configDefaultStyles } from "../../../config";
import { Header } from "./Header";
import { Input } from "./Input";
import { Messages } from "./Messages";

export const ChatBot = ({
  setChatIsOpen,
}: {
  setChatIsOpen: (state: boolean) => void;
}) => {
  const chatContainerClasses =
    "sm:relative overflow-auto flex flex-1 flex-col justify-between sm:rounded-lg shadow-lg sm:w-[350px] sm:h-[550px]";

  const mobileContainerClasses =
    "fixed top-0 left-0 right-0 bottom-0 w-screen h-screen";

  return (
    <div
      className={`${chatContainerClasses} ${mobileContainerClasses}`}
      style={{ backgroundColor: configDefaultStyles.appContainer.bg }}
    >
      <Header setChatIsOpen={setChatIsOpen} />
      <Messages />
      <Input />
    </div>
  );
};
