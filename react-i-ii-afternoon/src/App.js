import React from "react";
import Content from "./Components/Content";
import "./App.css";

function App() {
  return (
    <div>
      <header>
        <div className="home">Home</div>
      </header>
      <section className="middleRow">
        <div className="textBox">
          <Content />
        </div>
      </section>
      <footer></footer>
    </div>
  );
}

export default App;
