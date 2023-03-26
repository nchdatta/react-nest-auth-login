import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/dashboard';
import Home from './pages/Home';
import Login from './pages/login';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
