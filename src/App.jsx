import useSwitch from './useSwitch'
import useDate from './useDate';
import './App.css'

function App() {
  const [isOn, toggle] = useSwitch();
  const date = useDate()

  return (
    <>
      <h2>Snack 1</h2>
      <div>
        <h3>Il valore è: {isOn ? "ON" : "OFF"}</h3>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
      <br />
      <h2>Snack 2</h2>
      <div>
        <h3>Data e ora attuali:</h3>
        <p>{date.toLocaleString()}</p>
      </div>
    </>
  );
}

export default App
