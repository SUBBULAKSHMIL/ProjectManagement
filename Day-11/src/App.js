import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Elogin from './component/elogin';
import About from './component/about';
import Mhome from './component/mhome';
import Privacy from './component/privacy';
import { UpdatePro } from './component/update';
import Contact from './component/contact';
import Achieve from './component/acheive';
import Main from './component/main';
import Mlogin from './component/mlogin';
import Terms from './component/terms';
import Task from './component/task';
import EmployeeTasks from './component/status';
import Ehome from './component/ehome';
import Employees from './component/project';
import Resources from './component/Resources';
import ERegister from './component/eregister';
import MRegister from './component/mregister';

function App() {
  return (

    <Routes>
      <Route path='/' element={<Main />} />
      <Route path="/eregister" element={<ERegister/>} />
      <Route path="/mregister" element={<MRegister/>} />
      <Route path="/mlogin" element={<Mlogin />} />
      <Route path="/elogin" element={<Elogin />} />
      <Route path='/mhome' element={<Mhome />} />
      <Route path='/ehome' element={<Ehome />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/update' element={<UpdatePro />} />
      <Route path='/Resource' element={<Resources />} />
      <Route path='/achieve' element={<Achieve />} />
      <Route path='/project' element={<Employees />} />
      <Route path='/terms' element={<Terms />} />
      <Route path='/task' element={<Task />} />
      <Route path='/status' element={<EmployeeTasks />} />
    </Routes>

  );
}

export default App;