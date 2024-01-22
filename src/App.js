import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Pages/Home.js'
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
