import React, { useState } from 'react';
import http from '../../lib/http'; // 경로는 프로젝트 구조에 맞게

function TestPopup({ onClose }) {
  const [data, setData] = useState('');

  const getSearch = async () => {
    try {
      const res = await http.get('/api/data'); // baseURL + /api/data
      setData(res.data);
      alert(`백엔드 응답: ${JSON.stringify(res.data)}`);
    } catch (err) {
      console.error(err);

      // 응답이 HTML이면 아직 라우팅/프록시 문제
      const isHtml = err?.response?.headers?.['content-type']?.includes('text/html');
      alert(isHtml ? 'HTML이 응답됨: 배포 라우팅/프록시 점검 필요' : '백엔드 요청 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>팝업 내용</h2>
        <p>이곳은 모달 팝업입니다.</p>
        <button onClick={getSearch}>back 통신</button>
        <button onClick={onClose}>닫기</button>
        <pre>{data ? JSON.stringify(data, null, 2) : null}</pre>
      </div>
    </div>
  );
}

export default TestPopup;
