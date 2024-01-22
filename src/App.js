import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from "./Components/Header"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route to="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
