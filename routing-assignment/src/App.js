import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Mounting from './component/Mounting';
import Unmounting from './component/Unmounting';
import Updating from './component/Updating';
import Layout from './component/Layout';
import Header from './component/Header';
function App() {
  return (
  <>
  <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Header/>}>
          <Route index element={<Mounting/>}/>
             <Route path="unmounting" element={<Unmounting/>}/> 
             <Route path="updating" element={<Updating/>}/>
          </Route>
        </Routes>
        </BrowserRouter>
    
  </>
        
  )
}

export default App;
