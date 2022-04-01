import React from "react";
import "./Today.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Today() {
  return (
    <div className="Today">
      <h1> City</h1>
      <Row>
        <Col sm={3}>
          <img
            src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/028/896/original/StockWeatherImage.png?1646862957"
            alt="Stock weather icon"
            className="weather-icon"
          />
        </Col>
        <Col sm={5}>
          <div className="today-temperature-units">
            <span className="today-temperature">0 </span>
            <span className="units"> °C </span>
          </div>
        </Col>
        <Col sm={4}>
          <ul className="extra-info">
            <li>
              <span>Description: </span>
            </li>
            <li>
              Humidity: <span>0</span>%
            </li>
            <li>
              Wind: <span>0</span> km/h
            </li>
          </ul>
        </Col>
      </Row>
      <span className="last-updated-time">
        Last Updated: <span> Todays Time</span>
      </span>
    </div>
  );
}
