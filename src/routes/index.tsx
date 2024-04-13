import { createBrowserRouter } from "react-router-dom";
import { Chatbot } from "../screens/Chatbot";
import { Layout } from "../screens/layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Chatbot />,
      },
      {
        path: "full-screen",
        element: <Chatbot />,
      },
    ],
  },
]);
