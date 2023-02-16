import { Route, Routes } from 'react-router-dom'
import './index-sass/index.css';
import StartGame from "./components/StartGame"
import ColorGenerator from "./components/ColorGenerator"

function App() {
  return (
    <>
      <Routes>
        <Route path="/color-generator/" exact element={<StartGame/>}/>
        <Route path="/game" element={<ColorGenerator/>}/>
      </Routes>
    </>

  );
}

export default App;
