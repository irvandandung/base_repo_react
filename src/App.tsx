import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import { Home } from './pages/Home/home';
import { Register } from './pages/Register/register';
import { Login } from './pages/Login/login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
