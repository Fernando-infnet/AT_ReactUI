import './App.css';

import { BrowserRouter as Router, Route, Routes, Navigate , Link } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Form from './pages/Form';
import List from './pages/List';

const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px"
}

function App() {
  return <>
    <Router>
      <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/home"  element={<Home/>} />
          <Route path="/form"  element={<Form/>} />
          <Route path="/list"  element={<List/>} />
      </Routes>
    </Router>
  </>
}

export default App;
