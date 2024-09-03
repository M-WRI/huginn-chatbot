import { createMemoryRouter } from "react-router-dom";
// import { Chatbot, Layout, Start } from "../screens";
import { NewChatBot } from "../components/v2";

export const router = createMemoryRouter([
  {
    path: "/",
    element: <NewChatBot />,
    // children: [
    //   {
    //     index: true,
    //     element: <Start />,
    //   },
    //   {
    //     path: "chat-bot",
    //     element: <Chatbot />,
    //   },
    //   {
    //     path: "full-screen",
    //     element: <Chatbot />,
    //   },
    // ],
  },
]);
