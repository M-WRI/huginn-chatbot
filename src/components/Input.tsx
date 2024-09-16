import { configDefaultStyles } from "../config";
import { LoadingIcon, SendMessageIcon } from "./Icons";


export const Input = ({
  value,
  isLoading,
  setValue,
  getMessages,
}: {
  value: string;
  isLoading: boolean;
  setValue: (value: string) => void;
  getMessages: () => void;
}) => {
  const inputStyles = {
    container: "relative flex items-center flex-shrink-0 p-4 shadow-lg",
    input:
      "w-full pt-4 pr-[40px] pl-4 pb-4 ffont-sans text-sm text-white rounded-lg",
    icon: "absolute right-6 cursor-pointer",
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !isLoading) {
      getMessages();
    }
  };

  return (
    <div className={inputStyles.container}>
      <input
        type="text"
        placeholder="Schreibe eine Nachricht…"
        className={inputStyles.input}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
        onKeyDown={handleKeyDown}
        style={{
          backgroundColor: configDefaultStyles.input.bg,
          color: configDefaultStyles.input.color,
        }}
      />
      {isLoading ? (
        <LoadingIcon
          className={`${inputStyles.icon} animate-spin`}
          fill={configDefaultStyles.input.iconColor}
        />
      ) : (
        <SendMessageIcon
          className={inputStyles.icon}
          fill={configDefaultStyles.input.iconColor}
          onClick={() => getMessages()}
        />
      )}
    </div>
  );
};
