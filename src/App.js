import React from "react";
import "./App.css";
import Search from "./Search";
import Today from "./Today";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Weather">
        <div className="today-info">
          <Search />
          <Today />
        </div>
        <br />
        <div className="Forecast">
          <Forecast />
        </div>
      </div>
      <Footer />
    </div>
  );
}
