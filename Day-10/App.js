import logo from './logo.svg';
import './App.css';
import MRegister from './components/mregister';
import Mlogin from './components/mlogin';
import Elogin from './components/elogin';
import ERegister from './components/eregister';
import Firstpage from './components/Firstpage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Asidebar from './components/Asidebar';
import Esidebar from './components/Esidebar';
import Aboutus from './components/Aboutus';
import Resources from './pages/Aresource';
import Employees from './pages/Aproject';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Firstpage/>} />
          <Route path="/Firstpage" exact element={<Firstpage/>} />
          <Route path='/Asidebar' exact element={<Asidebar/>}/>
          <Route path='/Esidebar' exact element={<Esidebar/>}/>
          <Route path='/mregister' exact element={<MRegister/>}/>
          <Route path='/mlogin' exact element={<Mlogin/>}/>
          <Route path='/elogin' exact element={<Elogin/>}/>
          <Route path='/eregister' exact element={<ERegister/>}/>
          <Route path='/Asidebar' exact element={<Esidebar/>}/>
          <Route path='/Esidebar' exact element={<Asidebar/>}/>
          <Route path='/Aboutus' exact element={<Aboutus/>}/>
          <Route path='/Aresource' exact element={<Resources/>}/>
          <Route path='/Aproject' exact element={<Employees/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
