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
import Contactus from './components/contact';
import AResource from './pages/resource.';
import Risk from './pages/Arisk';
import FeedBack from './pages/feedback';
import ProGet from './components/Eproject';
import Profile from './pages/Aprofile';
import Atask from './pages/Atask';
import EmpTask from './pages/Etask';
import Aresource from './pages/Aresource';
import Eresource from './pages/Eresource';
import Arisk from './pages/Arisk';
import RiskGet from './pages/Erisk';
import Privacy from './components/privacy';
import Frontpage from './components/frontPage';
import Eprofile from './pages/Eprofile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Frontpage/>} />
          <Route path="/Firstpage" exact element={<Firstpage/>} />
          <Route path='/Asidebar' exact element={<Asidebar/>}/>
          <Route path='/Esidebar' exact element={<Esidebar/>}/>
          <Route path='/mregister' exact element={<MRegister/>}/>
          <Route path='/mlogin' exact element={<Mlogin/>}/>
          <Route path='/elogin' exact element={<Elogin/>}/>
          <Route path='/eregister' exact element={<ERegister/>}/>
          <Route path='/Aboutus' exact element={<Aboutus/>}/>
          <Route path='/Aresource' exact element={<Resources/>}/>
          <Route path='/Aproject' exact element={<Employees/>}/>
          <Route path='/contact' exact element={<Contactus/>}/>
          <Route path='/Arisk' exact element={<Risk/>}/>
          <Route path='/feedback' exact element={<FeedBack/>}/>
          <Route path='/Eproject' exact element={<ProGet/>}/>
          <Route path='/Aprofile' exact element={<Profile/>}/>
          <Route path='/Atask' exact element={<Atask/>}/>
          <Route path='/Etask' exact element={<EmpTask/>}/>
          <Route path='/Aresource' exact element={<Aresource/>}/>
          <Route path='/Eresource' exact element={<Eresource/>}/>
          <Route path='/Arisk' exact element={<Arisk/>}/>
          <Route path='/Erisk' exact element={<RiskGet/>}/>
          <Route path='/privacy' exact element={<Privacy/>}/>
          <Route path='/Eprofile' exact element={<Eprofile/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
