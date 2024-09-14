import { Link } from "react-router-dom";
import { IMessage } from "../../../entities";
import { configDefaultStyles } from "../../../config";
import ReactMarkdown from "react-markdown";
import { useChatBotState } from "../../../context";
import { useEffect, useRef } from "react";

const CustomLink = ({ href, children }: any) => (
  <Link to={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

export const Messages = ({ previousChats }: { previousChats: IMessage[] }) => {
  const { isFullScreen } = useChatBotState();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const messageStyles = {
    container: "flex-1 overflow-auto flex flex-col items-start px-4 mt-2",
    message: isFullScreen
      ? "text-sm mb-2 p-2 rounded-lg max-w-[430px] shadow-md"
      : "text-sm mb-2 p-2 rounded-lg max-w-[230px] shadow-md",
    userMessage: "self-end",
    assistantMessage: "self-start",
    content: "font-sans text-sm leading-6 align-start",
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [previousChats]);

  return (
    <div className={messageStyles.container}>
      {previousChats.map((chat: IMessage, i: number) => (
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
      <div ref={messagesEndRef} />
    </div>
  );
};
