import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "./reset.css";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ChakraProvider } from "@chakra-ui/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    <ReactQueryDevtools initialIs Open={false} />
  </QueryClientProvider>
);
