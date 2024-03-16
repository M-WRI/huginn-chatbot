import { createBrowserRouter } from "react-router-dom";
import { Chatbot } from "../screens/Chatbot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Chatbot />,
  },
  {
    path: "/full-screen",
    element: <Chatbot fullScreen />,
  },
]);
