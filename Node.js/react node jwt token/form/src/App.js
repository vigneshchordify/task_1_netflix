

import { Route, Routes } from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';





function App() {


  return (

    <div>
      <Routes>
        <Route path='/' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>


    </div>
  );
}

export default App;
