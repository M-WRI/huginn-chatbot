import { useEffect } from "react";
import { configDefaultStyles } from "../config";
import { injectDynamicStyles } from "../screens";

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
  useEffect(() => {
    injectDynamicStyles(configDefaultStyles);
  }, []);

  const baseClasses =
    "!text-sm !font-bold !p-4 !cursor-pointer !transition-all !w-full !rounded-full !hover:scale-95";
  const typeClasses = {
    outline: "dynamic-button-outline",
    primary: "dynamic-button-primary",
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
