import React from "react";
import "./Weather.css";
import Search from "./Search";
import Today from "./Today";
import Forecast from "./Forecast";
import Footer from "./Footer";

export default function Weather() {
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
