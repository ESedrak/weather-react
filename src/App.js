import React from "react";
import "./App.css";
import Weather from "./Weather";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="Weather">
        <div className="today-info">
          <Weather defaultCity="Sydney" />
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
