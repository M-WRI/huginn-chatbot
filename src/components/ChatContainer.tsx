import { useEffect, useRef } from "react";
import { IMessage } from "../entities";

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
          <p>{chat.content}</p>
        </div>
      ))}
      <div ref={endOfMessagesRef} />
    </main>
  );
};
