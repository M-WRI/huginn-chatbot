import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { useEffect, useRef } from "react";
import { IMessage } from "../entities";
import { useChatBotState } from "../context";
import { configDefaultStyles } from "../config";
import { injectDynamicStyles } from "../screens";

const CustomLink = ({ href, children }: any) => (
  <Link to={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

export const Messages = ({ previousChats }: { previousChats: IMessage[] }) => {
  const { isFullScreen } = useChatBotState();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    injectDynamicStyles(configDefaultStyles);
  }, []);

  const messageStyles = {
    container:
      "!flex-1 !overflow-auto !flex !flex-col !items-start !px-4 !mt-2",
    message: isFullScreen
      ? "!text-sm !mb-2 !p-2 !rounded-lg !max-w-[430px] !shadow-md"
      : "!text-sm !mb-2 !p-2 !rounded-lg !max-w-[230px] !shadow-md",
    userMessage: "dynamic-user-message !self-end",
    assistantMessage: "dynamic-assistant-message !self-start",
    content: "!font-sans !text-sm !leading-6 !align-start",
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
        >
          <div className="markdown-wrapper">
            <ReactMarkdown
              components={{
                a: CustomLink,
              }}
              className={messageStyles.content}
            >
              {chat.content}
            </ReactMarkdown>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};
