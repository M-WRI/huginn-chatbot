import { ReactComponent as SendMessage } from "../assets/send_message_icon.svg";

export const Input = ({
  config,
}: {
  config: {
    value: string;
    setValue: (value: string) => void;
    getMessages: () => void;
  };
}) => {
  const { value, setValue, getMessages } = config;
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getMessages();
    }
  };
  return (
    <footer className="input-container">
      <input
        type="text"
        placeholder="Schreibe eine Nachricht…"
        className="text-input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <SendMessage
        className="input-send-message"
        onClick={() => getMessages()}
      />
    </footer>
  );
};
