import React from "react";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router } from "react-router-dom"
import { Route, Routes } from "react-router";
import Layout from "Pages/Layout/Layout";

function App() {
    return (
        <>
          <Home />
        </>
    );
}

export default App;
