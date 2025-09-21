import { useState } from "react";
import Header from "./assets/Header";
import "./App.css";
import Languages from "./assets/Languages";
import Input from "./assets/Input";
import Keyboard from "./assets/Keyboard";
function App() {
  return (
    <div
      className="  w-full  h-[80vh] flex flex-col 
    items-center "
    >
      <div className="border border-white max-w-[450px] h-[829px] m-2 rounded-md">
        <Header />
        <Languages />
        <Input />
        <Keyboard />
      </div>
    </div>
  );
}

export default App;
