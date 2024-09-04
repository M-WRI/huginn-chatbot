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
    "relative overflow-auto flex flex-1 flex-col justify-between w-[350px] h-[550px] rounded-lg shadow-lg";
  return (
    <div
      className={chatContainerClasses}
      style={{ backgroundColor: configDefaultStyles.appContainer.bg }}
    >
      <Header setChatIsOpen={setChatIsOpen} />
      <Messages />
      <Input />
    </div>
  );
};
