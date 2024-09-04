import { useState } from "react";
import {
  ArrowDownIcon,
  CancelIcon,
  ExpandIcon,
  HuginnIcon,
  LoadingIcon,
  SendMessageIcon,
} from "../Icons";
import ReactMarkdown from "react-markdown";
import { IMessage } from "../../entities";
import { Link } from "react-router-dom";
import { chatMock } from "../../mocks";
import { configDefaultStyles } from "../../config";

export const NewChatBot = () => {
  const chatContainerClasses =
    "relative overflow-auto flex flex-1 flex-col justify-between w-[350px] h-[550px] rounded-lg";

  return (
    <div
      className={chatContainerClasses}
      style={{ backgroundColor: configDefaultStyles.appContainer.bg }}
    >
      <Header />
      <Messages />
      <Input />
    </div>
  );
};

export const Header = () => {
  const headerStyles = {
    container: "flex gap-4 items-center justify-between px-4 py-4 border-b",
    title: "font-sans text-2xl font-bold pointer-events-none",
    logo: "flex gap-4 items-center",
    navigation: "flex gap-4 items-center",
    icon: "w-[40px] h-[40px]",
  };

  return (
    <div
      className={headerStyles.container}
      style={{
        borderBottom: `1px solid ${configDefaultStyles.header.border}`,
      }}
    >
      <div className={headerStyles.logo}>
        <HuginnIcon
          fill={configDefaultStyles.header.iconColor}
          stroke={configDefaultStyles.header.iconColor}
          className={headerStyles.icon}
        />
        <p
          className={headerStyles.title}
          style={{
            color: configDefaultStyles.header.titleColor,
          }}
        >
          {configDefaultStyles.header.title}
        </p>
      </div>
      <div className={headerStyles.navigation}>
        <CancelIcon fill={configDefaultStyles.header.iconColor} />
        <ExpandIcon fill={configDefaultStyles.header.iconColor} />
        <ArrowDownIcon fill={configDefaultStyles.header.iconColor} />
      </div>
    </div>
  );
};

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

const CustomLink = ({ href, children }: any) => (
  <Link to={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

export const Messages = () => {
  const messageStyles = {
    container: "flex-1 overflow-auto flex flex-col items-start px-4 mt-2",
    message: "text-sm mb-2 p-2 rounded-lg max-w-[230px] shadow-md",
    userMessage: "self-end",
    assistantMessage: "self-start",
    content: "font-sans text-sm leading-6 align-start",
  };

  return (
    <div className={messageStyles.container}>
      {chatMock.map((chat: IMessage, i: number) => (
        <div
          key={i}
          className={`${messageStyles.message} ${
            chat.role === "user"
              ? messageStyles.userMessage
              : messageStyles.assistantMessage
          }`}
          style={{
            backgroundColor: configDefaultStyles.chat[chat.role].bg,
            color: configDefaultStyles.chat[chat.role].color,
          }}
        >
          <ReactMarkdown
            components={{
              a: CustomLink,
            }}
            className={messageStyles.content}
          >
            {chat.content}
          </ReactMarkdown>
        </div>
      ))}
    </div>
  );
};
