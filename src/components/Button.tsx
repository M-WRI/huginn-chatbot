export const Button = ({
  type = "outline",
  children,
  onClick,
}: {
  type?: "outline" | "primary";
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button onClick={onClick} className={`button ${type}`}>
      {children}
    </button>
  );
};
