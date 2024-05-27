import logo from './logo.svg';
import './App.css';
import Hero_section from './components/Hero_section';
import Navbar from './components/Navbar';
import Features from './components/Features';
import Videos from './components/Videos';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>

      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
         <Route path='/auth' element={<Auth></Auth>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
