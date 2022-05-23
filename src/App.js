import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="App">
      <Weather defaultCity="Sydney" />
      <br />
      <Footer />
    </div>
  );
};

export default App;
