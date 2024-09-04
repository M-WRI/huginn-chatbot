import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import {
  ChatProvider,
  AuthProvider,
  ChatbotConfigProvider,
  ChatBotStateProvider,
} from "./context";
import { queryClient } from "./queryCliet";
import { router } from "./routes";
import "./index.css";

ReactDOM.createRoot(document.getElementById("huginn_root_container")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChatbotConfigProvider>
        <ChatBotStateProvider>
          <AuthProvider>
            <ChatProvider>
              <RouterProvider router={router} />
            </ChatProvider>
          </AuthProvider>
        </ChatBotStateProvider>
      </ChatbotConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
