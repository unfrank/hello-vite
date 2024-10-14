import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="page">
      <Header />
      <Main />
    </div>
  );
}

export default App;
