import React from "react";
import "./App.css";
import Search from "./Search";
import Today from "./Today";
import Forecast from "./Forecast";
import Footer from "./Footer";

function App() {
  return (
    <div className="Weather">
      <div className="today-info">
        <Search />
        <Today />
      </div>
      <br />
      <div className="Forecast">
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}

export default App;
