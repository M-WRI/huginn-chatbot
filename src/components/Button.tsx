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
  // CONFIG - BUTTON STYLES
  const baseClasses =
    "text-sm font-bold p-4 cursor-pointer transition-all w-full rounded-full hover:scale-95";
  const typeClasses = {
    outline: "text-[#fbea6a] bg-transparent border border-[#fbea6a]",
    primary: "text-[#0f223e] bg-[#fbea6a]",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${typeClasses[type]}`}
      title={title}
    >
      {children}
    </button>
  );
};
