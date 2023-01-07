import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import LoadingContextProvider from "./Context/LoadingContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <LoadingContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LoadingContextProvider>
    </React.StrictMode>
);
