import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {Routes , Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Video from './pages/Video/Video';
import { useState } from 'react';

function App() {
  const [sidebar,setSidebar] =useState(true)
  return (
    <div className="App">
      <Navbar setSidebar={setSidebar}></Navbar>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}></Route>
        <Route path='/video/:categoryId/:videoId' element={<Video/>}></Route>
      </Routes>
      
   
    </div>
  );
}

export default App;
