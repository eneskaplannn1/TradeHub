import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";

import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </Provider>
);
