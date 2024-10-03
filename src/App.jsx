import Player from "./components/Player.jsx";
import { TimerChallenge } from "./components/timerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="easy" targetTime={5} />
        <TimerChallenge title="not easy" targetTime={10} />
        <TimerChallenge title="getting tough" targetTime={15} />
        <TimerChallenge title="tough" targetTime={20} />
      </div>
    </>
  );
}
export default App;
