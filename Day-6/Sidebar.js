import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import { SubMenu } from './SubMenu';
import { IconContext } from 'react-icons/lib';
import '../Style/side.css';
import CloseIcon from '@mui/icons-material/Close';
import DehazeIcon from '@mui/icons-material/Dehaze';

const Nav = styled.div`
    background: #15171c;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const NavIcon = styled(Link)`
    margin-left: 2rem;
    font-size: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;
const SidebarNav = styled.nav`
    background: #15171c;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: ${({ sidebar }) => (sidebar ? '0' : '-100%' )};
    transition: 350ms;
    z-index: 10;
`;
const SidebarWrap = styled.div `
    width: 100%;
`;

const Sidebar = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
        <div className='entire'>
        <Nav>
            <NavIcon to='#'>
                <DehazeIcon onClick={showSidebar}/>
                
                <div className='nav'>
                    <div className='nav1'>
                        {/* <p>PROJECT </p> */}
                    </div>
                    <div className='nav2'>
                        <ul class="nav-tabs">
                            <li>
                            <Link to="/contact" class="link-active">Contact us</Link>
                            </li>
                            <li>
                            <Link to="/About" class="link-active">About us</Link>
                            </li>
                            <li>
                            <Link to='/login1' class="link-active">Log out</Link>
                            </li>
                    </ul>
                </div>
                </div>
            </NavIcon>
        </Nav>
        </div>
        <SidebarNav sidebar={sidebar}>
            <SidebarWrap>
            <NavIcon to='#'>
                <CloseIcon onClick={showSidebar}/>
            </NavIcon>
             {SidebarData.map((items, index)=>{
                return <SubMenu item={items} key={index} />
            })}
            </SidebarWrap>
        </SidebarNav>
        </IconContext.Provider>
        <div className='b'>
          <h1 id='neon' style={{textAlign:'center',fontFamily:'cursive',fontSize:'30px'}}>
            BUSINESS &nbsp;ANALYSIS
          </h1>
          <div className='content'>
            <div className='home-content'>
            <h4>
                Project Management System is the process of planning, building, and monitoring the resilience and success of a newly created landing page, or site feature.
            </h4>
            <div className='list'>
            <h4>
                i)Like other client work, project management system requires thoughtful resource allocation. <br></br>
                ii)A good project manager will balance the work-flow in various aspects like 
                <ul>
                  <li>
                    SEO audits 
                  </li>
                  <li>
                      QA processes
                  </li>
                  <li>
                    Bug checks—across each team members.
                  </li>
                  </ul> 
            </h4>
            </div>
            <h4>
                Web design project management also requires project managers to stretch the project budget across tasks and leave room for contingency expenses.lopment 
                  
            </h4>
          </div>
          <div className='footer'>
            <p style={{paddingBottom:'90px'}}>Please read our &nbsp;
              <Link to='/privacy' style={{color:'powderblue'}}>privacy policy </Link> 
            </p>
          </div>
          </div>
        </div>
        </>
    );
};

export default Sidebar;
