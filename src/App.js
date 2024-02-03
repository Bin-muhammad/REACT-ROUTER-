 
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Abbaut from './component/Abbaut';
 import Home from './Home';
 import Chekh from './Chekh';
 import Docs from './Docs';
 import Wepp from './Wepp';
 import ERRER from './ERRER';
 
function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Abbaut' element={<Abbaut/>}/>
        <Route path='/Chekh' element={<Chekh/>} />
        <Route path='/Docs' element={<Docs/>} />
        <Route path='/Wepp' element={<Wepp/>} />
        <Route path="*" element={<ERRER/>}/>
        </Routes>    
    </BrowserRouter>
     </>
  )
}

export default App;
