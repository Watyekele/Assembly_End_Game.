import { useState } from "react";
import Header from "./assets/Header";
import "./App.css";

function App() {
  return (
    <div
      className="  w-full h-screen flex flex-col 
    items-center "
    >
      <div className="border border-white max-w-[500px] h-[829px] m-2 rounded-md">
        <Header />
      </div>
    </div>
  );
}

export default App;
