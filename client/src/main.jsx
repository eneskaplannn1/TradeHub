import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";

import { store } from "./store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorFallback from "./UI/Fallback.jsx";

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => window.location.replace("/")}
  >
    <Provider store={store}>
      <QueryClientProvider client={client}>
        <App />
      </QueryClientProvider>
    </Provider>
  </ErrorBoundary>
);
