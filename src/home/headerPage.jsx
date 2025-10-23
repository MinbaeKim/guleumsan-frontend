import { useNavigate, Link } from 'react-router-dom';
import React, { useState } from 'react';

function HeaderPage({toggleSidebar}){

    const navigate = useNavigate();

    return (
    <>
        <header className='header'>
            <button className="menu-btn" onClick={toggleSidebar}>
                ☰
            </button>
            <div style={{left:'30px', display: 'inline-block', position: 'relative'}}>
                <Link to="/">home</Link> / 
                로그인
            </div>
            
        </header>
    </>
  )

};

export default HeaderPage;