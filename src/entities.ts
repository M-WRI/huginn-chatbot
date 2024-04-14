export interface IMessage {
  role: "assistant" | "user";
  content: string;
}

export interface ChatContextType {
  chatIsOpen: boolean;
  setChatIsOpen: (
    value: boolean | ((prevChatIsOpen: boolean) => boolean)
  ) => void;
}
