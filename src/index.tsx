import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { ChatProvider } from "./context";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./queryCliet";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ChatProvider>
        <RouterProvider router={router} />
      </ChatProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
