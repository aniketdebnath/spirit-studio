import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer position="top-center" autoClose={2000}></ToastContainer>
    <App />
  </>
);
