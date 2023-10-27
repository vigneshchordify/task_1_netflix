
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import SingleView from './components/SingleView';


function App() {
  return (
    <>


<Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path="movie/:id" element={<SingleView/>}></Route>
</Routes>
    
    </>
  );
}

export default App;
