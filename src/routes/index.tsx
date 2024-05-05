import { createBrowserRouter } from "react-router-dom";
import { Chatbot, Layout, Start } from "../screens";

export const router = createBrowserRouter([
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
