import { createMemoryRouter } from "react-router-dom";
import { Chatbot, Layout, Start } from "../screens";

export const router = createMemoryRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Start />,
      },
      {
        path: "chat-bot",
        element: <Chatbot />,
      },
      {
        path: "full-screen",
        element: <Chatbot />,
      },
    ],
  },
]);
