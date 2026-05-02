"use client";

import { useState } from "react";

export default function Home() {
  const [lit, setLit] = useState(false);

  const pet = {
    name: "小白",
    birthday: "2018 / 06 / 12",
    message: "謝謝你陪伴的每一天 🕯",
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400",
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background: lit
          ? "radial-gradient(circle at center, #3a2a10, #000)"
          : "linear-gradient(to bottom, #1a1a1a, #2b1b0f)",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
        transition: "0.6s",
        textAlign: "center",
      }}
    >
      {/* 標題 */}
      <h1 style={{ fontSize: 28, marginBottom: 20 }}>
        🕯 寵物數位紀念卡
      </h1>

      {/* 卡片 */}
      <div
        style={{
          width: 300,
          background: "#111",
          borderRadius: 16,
          padding: 20,
          boxShadow: lit
            ? "0 0 30px rgba(245,197,66,0.4)"
            : "0 0 10px rgba(0,0,0,0.5)",
        }}
      >
        {/* 圖片 */}
        <img
          src={pet.image}
          style={{
            width: "100%",
            borderRadius: 12,
            marginBottom: 12,
          }}
        />

        {/* 名字 */}
        <h2 style={{ fontSize: 22 }}>{pet.name}</h2>

        {/* 生日 */}
        <p style={{ opacity: 0.7, fontSize: 14 }}>
          生日：{pet.birthday}
        </p>

        {/* 訊息 */}
        <p style={{ marginTop: 10, fontSize: 14 }}>
          {pet.message}
        </p>
      </div>

      {/* 燈 */}
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          marginTop: 30,
          background: lit ? "#f5c542" : "#444",
          boxShadow: lit
            ? "0 0 40px rgba(245,197,66,0.8)"
            : "none",
          transition: "0.6s",
        }}
      />

      {/* 按鈕 */}
      <button
        onClick={() => setLit(true)}
        disabled={lit}
        style={{
          marginTop: 20,
          padding: "12px 24px",
          borderRadius: 12,
          border: "none",
          background: lit ? "#999" : "#f5c542",
          cursor: lit ? "default" : "pointer",
          fontSize: 14,
        }}
      >
        {lit ? "已點燈 🕯" : "為小白點燈"}
      </button>
    </main>
  );
}