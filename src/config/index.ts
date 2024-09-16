interface IConfigDefaultStyles {
  appContainer: {
    bg: string;
  };
  header: {
    iconColor: string;
    title: string;
    titleColor: string;
    border: string;
  };
  input: {
    iconColor: string;
    bg: string;
    color: string;
  };
  chat: {
    user: {
      bg: string;
      color: string;
    };
    assistant: {
      bg: string;
      color: string;
    };
  };
  button: {
    outline: {
      color: string;
    };
    primary: {
      color: string;
      bg: string;
    };
  };
}

export const configDefaultStyles: IConfigDefaultStyles = {
  appContainer: {
    bg: "#0a182e",
  },
  header: {
    iconColor: "#fceb6c",
    title: "Huginn",
    titleColor: "#fceb6c",
    border: "#fceb6c",
  },
  input: {
    iconColor: "#fceb6c",
    bg: "#0f223e",
    color: "#fff",
  },
  chat: {
    user: {
      bg: "#fbea6a",
      color: "#0f223e",
    },
    assistant: {
      bg: "#5b1c16",
      color: "#fff",
    },
  },
  button: {
    outline: {
      color: "#fbea6a",
    },
    primary: {
      color: "#0f223e",
      bg: "#fbea6a",
    },
  },
};
