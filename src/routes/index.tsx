import { createMemoryRouter } from "react-router-dom";
import { NewChatBot } from "../components/v2";
import { ChatBot } from "../components/v2/components";
import { Start } from "../screens";

export const router = createMemoryRouter([
  {
    path: "/",
    element: <NewChatBot />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "chat-bot",
        element: <ChatBot />,
      },
    ],
  },
]);
