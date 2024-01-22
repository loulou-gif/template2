import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from "./Pages/Home"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
