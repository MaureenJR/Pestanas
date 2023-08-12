import './App.css';
import { useState } from 'react';
import Tabs from './componente/Tabs';


function App() {
  const [tabs, setTabs] = useState([
    {
      etiqueta: "Pestaña 1",
      contenido: "Contenido pestaña 1",
      seleccionada: true
    },
    {
      etiqueta: "Pestaña 2",
      contenido: "Contenido pestaña 2",
      seleccionada: false
    }
  ]);


  return (
    <div className="App">
      <Tabs tabs={tabs} setTabs={setTabs}/>
    </div>
  );
}

export default App;
