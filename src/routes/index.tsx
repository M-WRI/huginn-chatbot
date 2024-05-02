import { createBrowserRouter } from "react-router-dom";
import { Chatbot } from "../screens/Chatbot";
import { Layout } from "../screens/layout";
import { Start } from "../screens/Start";

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
