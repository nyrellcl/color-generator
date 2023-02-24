import { Route, Routes } from 'react-router-dom'
import './index-sass/index.css';
import StartGame from "./components/StartGame"
import ColorGenerator from "./components/ColorGenerator"
import MainPage from './components/MainPage';
import ColorGame from "./components/ColorGame"

function App() {
  return (
    <>
      <Routes>
        <Route path="/color-generator/" exact element={<MainPage/>}/>
        <Route path="/color-generator-start/" element={<StartGame/>}/>
        <Route path="/game" element={<ColorGenerator/>}/>
        <Route path="/color-game" element={<ColorGame/>}/>
      </Routes>
    </>

  );
}

export default App;
