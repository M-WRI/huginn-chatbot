import { useEffect, useRef } from "react";
import { IMessage } from "../entities";
import { ReactComponent as LoadingIcon } from "../assets/loading_spinner_icon.svg";

export const ChatContainer = ({
  previousChats,
  isLoading,
}: {
  previousChats: IMessage[];
  isLoading: boolean;
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
      {isLoading && (
        <div className="loading-spinner">
          <LoadingIcon className="loading-icon" />
        </div>
      )}
    </main>
  );
};
