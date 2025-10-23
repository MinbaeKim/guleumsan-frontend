import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

import 'primereact/resources/themes/saga-blue/theme.css';  // 테마 CSS
import 'primereact/resources/primereact.min.css';         // PrimeReact 기본 스타일
import 'primeicons/primeicons.css';                      // 아이콘

import TestPopup from './popup/testPopup';

function Board() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts([
            { rn: '1', title: '강민 고발합니다', regNm: '김민배', regDt: '2025-09-04' },
            { rn: '2', title: '하길싫노', regNm: '황병하', regDt: '2025-09-04' },
            { rn: '3', title: '낼 불금', regNm: '황병하', regDt: '2025-09-04' }
        ]);
    }, []);

    return (
    <>
        <div className='title-area'>
            <h2>문의사항</h2>
        </div>
        
        <div className='filter-area'>
            <div className='filt-grp'>
                <span className='filt-tit'>제목</span>
                <input
                    type="text"
                    className="input-m"
                />    
            </div>
            <div className='filt-grp'>
                <span className='filt-tit'>등록자</span>
                <input
                    type="text"
                    className="input-m"
                />    
            </div>
            <div className='filt-grp'>
                <span className='filt-tit'>드랍박스샘플</span>
                <select className="select-m"
                >
                    <option value="">카테고리 선택</option>
                    <option value="tech">기술</option>
                    <option value="design">디자인</option>
                    <option value="business">비즈니스</option>
                </select>
            </div>
            
            

            {/* className="border border-gray-300 rounded px-4 py-2 w-full md:w-1/3" */}
            
            <button className='btn-m'>검색</button>
        </div>

        <div style={{paddingTop: '10px', position:'relative'}}>
            <button onClick={openModal}>팝업 열기</button>
        </div>
        
        <div className='grid_area'>
            <DataTable value={products} rows={5} rowsPerPageOptions={[5, 10, 25, 50]} tableStyle={{ minHeight: '10rem' }} >
                <Column field="rn" header="순번" sortable style={{ width: '5%' }}></Column>
                <Column field="title" header="제목" sortable style={{ width: '45%' }}></Column>
                <Column field="regNm" header="등록자" sortable style={{ width: '25%' }}></Column>
                <Column field="regDt" header="등록일자" sortable style={{ width: '25%' }}></Column>
            </DataTable>
        </div>
        
        
        {isOpen && <TestPopup onClose={closeModal} />}
    </>
    );
};

export default Board;
