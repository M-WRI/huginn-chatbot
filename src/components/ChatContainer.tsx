import { useEffect, useRef } from "react";
import { IMessage } from "../entities";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const CustomLink = ({ href, children }: any) => (
  <Link to={href} target="_blank" rel="noopener noreferrer">
    {children}
  </Link>
);

export const ChatContainer = ({
  previousChats,
}: {
  previousChats: IMessage[];
}) => {
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [previousChats]);

  return (
    <main className="main-container">
      {previousChats.map((chat: IMessage, index: number) => (
        <div
          key={index}
          className={`chat-container ${
            chat.role === "user" ? "user-chat" : "bot-chat"
          }`}
        >
          <ReactMarkdown
            components={{
              a: CustomLink,
            }}
            className="chat-content"
          >
            {chat.content}
          </ReactMarkdown>
        </div>
      ))}
      <div ref={endOfMessagesRef} />
    </main>
  );
};
