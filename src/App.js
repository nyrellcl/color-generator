import { Route, Routes } from 'react-router-dom'
import './index-sass/index.css';
import StartGame from "./components/StartGame"
import ColorGame from "./components/ColorGame"

function App() {
  return (
    <>
      <Routes>
        <Route path="/start" exact element={<StartGame/>}/>
        <Route path="/game" element={<ColorGame/>}/>
      </Routes>
    </>

  );
}

export default App;
