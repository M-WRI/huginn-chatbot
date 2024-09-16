import { createMemoryRouter } from "react-router-dom";
import { ChatBotLayout, Start, ChatBot } from "../screens";

export const router = createMemoryRouter([
  {
    path: "/",
    element: <ChatBotLayout />,
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
