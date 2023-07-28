import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Register } from './Components/Register';
import { Login } from './Components/login1';
import './App.css';
import '../src/Components/Style/side.css';
import Sidebar from './Components/Sidebar';
import { Overview } from './pages/Overview';
import { Reports, ReportsOne, ReportsThree, ReportsTwo } from './pages/Reports';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/login1" exact component={Login} />
          <Route path="/Overview" exact component={Overview} />
          <Route path="/Reports" exact component={Reports} />
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;

  // <Router>
  //   <ul class="nav-nav-tabs">
  //       <li class="nav-item">
  //         <Link to="/login1" class="nav-link-active">Log In</Link>
  //       </li>
  //       <li class="nav-item">
  //         <Link to="/Register" class="nav-link-active">Register</Link>
  //       </li>
  //   </ul>
  //   <Routes>
  //     <Route path="/login1" element={<Login/>}/>
  //     <Route path="/Register" element={<Register/>}/>
  //   </Routes>
  // </Router>