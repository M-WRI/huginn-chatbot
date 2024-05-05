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
  return (
    <button onClick={onClick} className={`button ${type}`} title={title}>
      {children}
    </button>
  );
};
