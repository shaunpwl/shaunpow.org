import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Shaun Pow </h1>
        <p>
          Full Stack Developer <br />
          currently focusing on React, NodeJS, MongoDB <br />& DevOps on AWS
        </p>

        <a
          className="App-link"
          href="https://drive.google.com/open?id=1PXXzzku9bx04qJYIVJ47d3JOAHokRH9d"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download my Resume{" "}
        </a>
      </header>
      <body>
        <div>
          <a href=" https://d1.awsstatic.com/whitepapers/AWS_Cloud_Best_Practices.pdf">
            Shaun pls read AWS_Cloud_Best_Practices
          </a>
        </div>
        <div>
          <a href="http://d1.awsstatic.com/whitepapers/aws_pricing_overview.pdf">
            and aws_pricing_overview
          </a>
        </div>
      </body>
    </div>
  );
}

export default App;
