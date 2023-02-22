import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./pages/Login/Login";
// import Signup from "./pages/Signup/Signup";
import Main from "./pages/Main/Main";
import Router from "./Router";
import Kimjunyoung from "./Kimjunyoung";

const root = ReactDOM.createRoot(document.getElementById("root"));
//const container = document.getElementById("root");
//const root = createRoot(container); line8,9는 line7 과 동일

root.render(<Router />);
