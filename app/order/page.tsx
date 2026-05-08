'use client'

import { useState } from 'react'

export default function OrderPage() {
  const [name, setName] = useState('')
  const [pet, setPet] = useState('')

  return (
    <div style={{
      maxWidth: 520,
      margin: '0 auto',
      padding: 20
    }}>
      
      <h1>🐾 點燈祈福</h1>

      <div style={{ marginTop: 20 }}>
        <input
          placeholder="飼主姓名"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 10
          }}
        />

        <input
          placeholder="寵物名字"
          value={pet}
          onChange={(e) => setPet(e.target.value)}
          style={{
            width: '100%',
            padding: 10,
            marginBottom: 20
          }}
        />

        <button
          style={{
            width: '100%',
            padding: 12,
            background: '#111',
            color: '#fff'
          }}
        >
          送出祈福（測試版）
        </button>
      </div>

    </div>
  )
}