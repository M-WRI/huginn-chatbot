import { Link } from "react-router-dom";
import { chatMock } from "../../../mocks";
import { IMessage } from "../../../entities";
import { configDefaultStyles } from "../../../config";
import ReactMarkdown from "react-markdown";

const CustomLink = ({ href, children }: any) => (
  <Link to={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

export const Messages = ({ fullScreen }: { fullScreen?: boolean }) => {
  const messageStyles = {
    container: "flex-1 overflow-auto flex flex-col items-start px-4 mt-2",
    message: fullScreen
      ? "text-sm mb-2 p-2 rounded-lg max-w-[430px] shadow-md"
      : "text-sm mb-2 p-2 rounded-lg max-w-[230px] shadow-md",
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
