import React, { useState } from "react";
import axios from "axios";

function MemberRegister() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8081/api/users", {
        name,
        email,
      });
      setMessage(`✅ 등록 성공! ID: ${res.data.id}`);
      setName("");
      setEmail("");
    } catch (err) {
      console.error(err);
      setMessage("❌ 등록 실패! 콘솔 확인");
    }
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>👤 회원 등록</h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "300px",
          gap: "10px",
        }}
      >
        <label>이름</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>이메일</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button
          type="submit"
          style={{
            background: "#4CAF50",
            color: "#fff",
            border: "none",
            padding: "10px",
            cursor: "pointer",
          }}
        >
          등록하기
        </button>
      </form>

      {message && (
        <p
          style={{
            marginTop: "20px",
            color: message.startsWith("✅") ? "green" : "red",
          }}
        >
          {message}
        </p>
      )}
    </div>
  );
}

export default MemberRegister;
