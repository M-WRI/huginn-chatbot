import { configDefaultStyles } from "../config";

export const Button = ({
  type = "outline",
  children,
  title = "Button",
  onClick,
}: {
  type?: "outline" | "primary";
  children: React.ReactNode;
  title?: string;
  onClick?: () => void;
}) => {
  const baseClasses =
    "text-sm font-bold p-4 cursor-pointer transition-all w-full rounded-full hover:scale-95";
  const typeClasses = {
    outline: "bg-transparent border border-[#fbea6a]",
    primary: "",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${typeClasses[type]}`}
      title={title}
      style={{
        color:
          type === "outline"
            ? configDefaultStyles.button.outline.color
            : configDefaultStyles.button.primary.color,
        backgroundColor:
          type === "outline" ? "" : configDefaultStyles.button.primary.bg,
      }}
    >
      {children}
    </button>
  );
};
