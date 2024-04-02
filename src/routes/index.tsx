import { createBrowserRouter } from "react-router-dom";
import { ChatBotFullScreen } from "../screens/ChatBotFullScreen";
import { Chatbot } from "../screens/Chatbot";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Chatbot />,
  },
  {
    path: "/full-screen",
    element: <ChatBotFullScreen />,
  },
]);
