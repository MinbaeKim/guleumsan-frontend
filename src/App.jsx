import './App.css'

import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HeaderPage from './home/headerPage';
import FooterPage from './home/footerPage';
import SideMenu from './home/sideMenu';
import MainPage from './home/mainPage';
import MemberRegister from './member/memberRegister';


import Board from './board/board';
import EmployeeGrid from './employee/employeeGrid';

function App() {

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

  return (
    <>
        <BrowserRouter>
            <div className='layout'>
                <HeaderPage toggleSidebar={toggleSidebar} />
                <div className='body-content'>
                    <SideMenu isOpen={isSidebarOpen} />
                    <div className='main'>
                        <div className='mainInner'>
                            <Routes>
                                <Route path="/" element={<MainPage />} />
                                <Route path="/board" element={<Board />} />
                                <Route path="/employee" element={<EmployeeGrid />} />
                                <Route path="/member" element={<MemberRegister />} />
                            </Routes>
                        </div>
                        
                    </div>
                </div>
                {/* 화면전환 영역 */}
                <FooterPage/>
            </div>
        </BrowserRouter>
        
    </>
  )
}

export default App;