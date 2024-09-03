import { ArrowDownIcon, CancelIcon, ExpandIcon, HuginnIcon } from "../Icons";

export const NewChatBot = () => {
  const chatContainerClasses =
    "relative overflow-auto flex flex-1 flex-col justify-between w-[350px] h-[550px] rounded-lg";

  return (
    <div
      className={chatContainerClasses}
      style={{ backgroundColor: configDefaultStyles.appContainer.bg }}
    >
      <Header />
      <div>
        <h1 className="text-white">hi</h1>
      </div>
      <div>
        <h1 className="text-white">hi</h1>
      </div>
    </div>
  );
};

export const Header = () => {
  const headerStyles = {
    container: "flex gap-4 items-center justify-between px-4 py-4 border-b",
    title: "font-sans text-2xl font-bold pointer-events-none",
    logo: "flex gap-4 items-center",
    navigation: "flex gap-4 items-center",
    icon: "w-[40px] h-[40px]",
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
        <ArrowDownIcon fill={configDefaultStyles.header.iconColor} />
      </div>
    </div>
  );
};

const configDefaultStyles = {
  appContainer: {
    bg: "#0a182e",
  },
  header: {
    iconColor: "#fceb6c",
    title: "Huginn",
    titleColor: "#fceb6c",
    border: "#fceb6c",
  },
};
