
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Header from './components/Header';
function App() {
  return (
  <>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='*' element={<Error/>}/>
  </Routes>
  </>
  );
}

export default App;
