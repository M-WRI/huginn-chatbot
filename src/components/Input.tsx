import { useEffect } from "react";
import { configDefaultStyles } from "../config";
import { LoadingIcon, SendMessageIcon } from "./Icons";
import { injectDynamicStyles } from "../screens";

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
  useEffect(() => {
    injectDynamicStyles(configDefaultStyles);
  }, []);

  const inputStyles = {
    container: "!relative !flex !items-center !flex-shrink-0 !p-4 !shadow-lg",
    input:
      "dynamic-input-field !w-full !pt-4 !pr-[40px] !m-0 !h-[52px] !pl-4 !pb-4 !font-sans !text-sm !rounded-lg",
    icon: "dynamic-input-icon !absolute !right-6 !cursor-pointer",
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
      />
      {isLoading ? (
        <LoadingIcon className={`${inputStyles.icon} animate-spin`} />
      ) : (
        <SendMessageIcon className={inputStyles.icon} onClick={getMessages} />
      )}
    </div>
  );
};
