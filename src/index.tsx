import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import { ChatProvider, AuthProvider, ChatbotConfigProvider } from "./context";
import { queryClient } from "./queryCliet";
import "./index.css";
import { router } from "./routes";

ReactDOM.createRoot(document.getElementById("huginn_root_container")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChatbotConfigProvider>
        <AuthProvider>
          <ChatProvider>
            <RouterProvider router={router} />
          </ChatProvider>
        </AuthProvider>
      </ChatbotConfigProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
