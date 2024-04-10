import logo from './logo.svg';
import './App.css';
import Interest from './components/interest';
import Describe from './components/describe';
import Rightplace from './components/rightplace';
import Mathcomfort from './components/mathcomfort';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Learningpath from './components/learningpath';
import Path from './components/path';
import Ownway from './components/onway';
import Index from './components';

function App() {
  return (
    <>
    <BrowserRouter>
    <Index/>
    <Routes>
      <Route element={<Describe/>} path='/'></Route>
      <Route element={<Interest/>} path='/interest'></Route>
      <Route element={<Learningpath/>} path='/learningpath'></Route>
      <Route element={<Mathcomfort/>} path='/mathcomfort'></Route>
      <Route element={<Ownway/>} path='/ownway'></Route>
      <Route element={<Path/>} path='/path'></Route>
      <Route element={<Rightplace/>} path='/rightplace'></Route>
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
