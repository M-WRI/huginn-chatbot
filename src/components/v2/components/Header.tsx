import { configDefaultStyles } from "../../../config";
import { ArrowDownIcon, CancelIcon, ExpandIcon, HuginnIcon } from "../../Icons";

export const Header = ({
  setChatIsOpen,
}: {
  setChatIsOpen: (state: boolean) => void;
}) => {
  const headerStyles = {
    container: "flex gap-4 items-center justify-between px-4 py-4 border-b",
    title: "font-sans text-2xl font-bold pointer-events-none",
    logo: "flex gap-4 items-center",
    navigation: "flex gap-4 items-center",
    icon: "w-[40px] h-[40px]",
  };

  const handleMinimizeChatBot = () => {
    setChatIsOpen(false);
  };

  return (
    <div
      className={headerStyles.container}
      style={{
        borderBottom: `1px solid ${configDefaultStyles.header.border}`,
      }}
    >
      <div className={headerStyles.logo}>
        <HuginnIcon
          fill={configDefaultStyles.header.iconColor}
          stroke={configDefaultStyles.header.iconColor}
          className={headerStyles.icon}
        />
        <p
          className={headerStyles.title}
          style={{
            color: configDefaultStyles.header.titleColor,
          }}
        >
          {configDefaultStyles.header.title}
        </p>
      </div>
      <div className={headerStyles.navigation}>
        <CancelIcon fill={configDefaultStyles.header.iconColor} />
        <ExpandIcon fill={configDefaultStyles.header.iconColor} />
        <ArrowDownIcon
          action={handleMinimizeChatBot}
          fill={configDefaultStyles.header.iconColor}
        />
      </div>
    </div>
  );
};
