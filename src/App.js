import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add.jsx";
import Home from "./pages/Home.jsx";
import Edit from "./pages/Edit.jsx";
import Header from "./components/header.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:index" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
};

root.render(<App />);

export default App;
