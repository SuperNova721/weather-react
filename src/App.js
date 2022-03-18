import React from "react";
import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="content">
      <div className="App">
        <h1>Weather App</h1>
        <Search />
        <footer>
          This project was coded by Holly Hadley and is open-source on
          <a
            href="https://github.com/SuperNova721/weather-react.git"
            target="_blank"
            rel="noreferrer"
            alt="GitHub"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
