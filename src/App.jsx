import useSwitch from './useSwitch'
import './App.css'

function App() {
  const [isOn, toggle] = useSwitch();


  return (
    <>
      <h2>Snack 1</h2>
      <div>
        <h3>Il valore è: {isOn ? "ON" : "OFF"}</h3>
        <button onClick={toggle}>Cambia Stato</button>
      </div>
    </>
  );
}

export default App
