import { useState } from "react";
import { configDefaultStyles } from "../../../config";
import { LoadingIcon, SendMessageIcon } from "../../Icons";

export const Input = () => {
  const [state, setState] = useState();

  const isLoading = false;

  const inputStyles = {
    container: "relative flex items-center flex-shrink-0 p-4 shadow-lg",
    input:
      "w-full pt-4 pr-[40px] pl-4 pb-4 ffont-sans text-sm text-white rounded-lg",
    icon: "absolute right-6 cursor-pointer",
  };

  return (
    <div className={inputStyles.container}>
      <input
        type="text"
        placeholder="Schreibe eine Nachricht…"
        className={inputStyles.input}
        value={state}
        onChange={(e: any) => setState(e.target.value)}
        style={{
          backgroundColor: configDefaultStyles.input.bg,
          color: configDefaultStyles.input.color,
        }}
      />
      {isLoading ? (
        <LoadingIcon
          className={inputStyles.icon}
          fill={configDefaultStyles.input.iconColor}
        />
      ) : (
        <SendMessageIcon
          className={inputStyles.icon}
          fill={configDefaultStyles.input.iconColor}
          onClick={() => console.log("getMessages")}
        />
      )}
    </div>
  );
};
