"use client";

import { useState } from "react";

export default function Home() {
  const [lit, setLit] = useState(false);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: lit
          ? "radial-gradient(circle at center, #2b1b0f, #000)"
          : "#0b0b0f",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: 24,
      }}
    >
      {/* Title */}
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>
        🕯 寵物祈福紀念平台
      </h1>

      <p style={{ opacity: 0.7, marginBottom: 40 }}>
        讓愛，不只停留在回憶
      </p>

      {/* Candle */}
      <div
        style={{
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: lit ? "#f5c542" : "#2a2a2a",
          boxShadow: lit
            ? "0 0 60px rgba(245,197,66,0.8)"
            : "0 0 10px rgba(0,0,0,0.6)",
          transition: "0.8s",
        }}
      />

      {/* Button */}
      <button
        onClick={() => setLit(true)}
        disabled={lit}
        style={{
          marginTop: 30,
          padding: "14px 28px",
          borderRadius: 14,
          border: "none",
          background: lit ? "#666" : "#f5c542",
          color: "#000",
          fontWeight: "bold",
          cursor: lit ? "default" : "pointer",
          transition: "0.3s",
        }}
      >
        {lit ? "已為牠點燈 🕯" : "點亮祈福"}
      </button>

      {/* Ritual message */}
      {lit && (
        <p style={{ marginTop: 30, opacity: 0.9 }}>
          ✨ 願牠被溫柔記得，安息於光之中
        </p>
      )}
    </main>
  );
}