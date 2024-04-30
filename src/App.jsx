import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
import Toggle from "./components/toggle/Toggle";
import Counter from "./components/counter/Counter";
import Game from "./components/tictactoe/Game";

function App() {
  return (
    <div>
      <Game />
    </div>
  );
}

export default App;
