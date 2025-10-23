import { Route, Routes, Link } from 'react-router-dom';
import React, { useState } from 'react';
import classNames from 'classnames';

function SideMenu({isOpen}){

    const [openMenu, setOpenMenu] = useState(null); // 열려 있는 메뉴의 index 저장

    // 메뉴를 클릭할 때마다 openMenu 상태를 업데이트
    const toggleMenu = (menuIndex) => {
        setOpenMenu(openMenu === menuIndex ? null : menuIndex); // 동일한 메뉴 클릭 시 닫기
    };

    return (
    <>
    {/*
        ##메뉴 등록 가이드##
        
        <li>공지사항</li>
    
        ->
    
        <li><Link to="/board">공지사항</Link></li>

        path 등록은 app.jsx에 routers에 route를 추가해주면 된다.
    */}


        <aside className={classNames('sidebar', { sideOpen: isOpen })}>
                <nav className={classNames({ showSide: isOpen })}>
                    <ul className="menu">
                        {/* 메뉴 1 */}
                        <li className="menu-item">
                            <span className="menu-title" onClick={() => toggleMenu(1)}>
                                회사관리
                            </span>
                            <ul className={`submenu ${openMenu === 1 ? 'show' : ''}`}>                                
                                <li>사업장 기초정보 입력</li>
                                <li>조직설정</li>
                            </ul>
                        </li>

                        {/* 메뉴 2 */}
                        <li className="menu-item">
                            <span className="menu-title" onClick={() => toggleMenu(2)}>
                                인사관리
                            </span>
                            <ul className={`submenu ${openMenu === 2 ? 'show' : ''}`}>
                                <li><Link to="/employee">직원 관리</Link></li>
                                <li><Link to="/member">직원 등록</Link></li>
                                <li>급여 기초정보 입력</li>
                                <li>급여자료 입력</li>
                                <li>급여대장</li>
                                <li>인센티브 관리</li>
                            </ul>
                        </li>

                        {/* 메뉴 3 */}
                        <li className="menu-item">
                            <span className="menu-title" onClick={() => toggleMenu(3)}>
                                회계관리
                            </span>
                            <ul className={`submenu ${openMenu === 3 ? 'show' : ''}`}>
                                <li>일매출 마감</li>
                                <li>월매출 마감</li>
                                <li>매출 현황</li>
                            </ul>
                        </li>

                        {/* 메뉴 4 */}
                        <li className="menu-item">
                            <span className="menu-title">
                                공지사항
                            </span>
                        </li>

                        {/* 메뉴 5 */}
                        <li className="menu-item">
                            <span className="menu-title">
                                <Link to="/board">문의사항</Link>
                            </span>
                        </li>
                    </ul>
                </nav>
                
            </aside>
    </>
  )

};

export default SideMenu;