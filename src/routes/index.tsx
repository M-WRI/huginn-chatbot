import { createMemoryRouter } from "react-router-dom";
import { Chatbot, ChatBotLayout, Start } from "../screens";

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
        element: <Chatbot />,
      },
    ],
  },
]);
