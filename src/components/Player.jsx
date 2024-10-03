import { useState, useRef } from "react";
export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();
  function handleOnClick() {
    setEnteredPlayerName(playerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "Unknown entry"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleOnClick}>Set Name</button>
      </p>
    </section>
  );
}
