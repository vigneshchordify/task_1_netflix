
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Ordersummary from './Components/Ordersummary';
import Nopage from './Components/Nopage';




function App() {
  return (
    <div>

     <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}></Route>
      <Route path='order' element={<Ordersummary/>}></Route>
      <Route path='*' element={<Nopage/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
