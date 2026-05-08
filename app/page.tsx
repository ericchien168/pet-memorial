'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #ffffff, #f5f5f5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 24
    }}>
      
      <div style={{
        width: '100%',
        maxWidth: 520,
        background: '#fff',
        borderRadius: 16,
        padding: 28,
        boxShadow: '0 10px 30px rgba(0,0,0,0.08)'
      }}>
        
        <h1 style={{
          fontSize: 28,
          marginBottom: 8
        }}>
          🐾 寵物平安祈福平台
        </h1>

        <p style={{
          color: '#666',
          marginBottom: 24
        }}>
          為毛孩點一盞平安燈，祈願平安健康
        </p>

        <button
          onClick={() => router.push('/order')}
          style={{
            width: '100%',
            padding: 14,
            borderRadius: 12,
            background: '#111',
            color: '#fff',
            fontSize: 16,
            marginBottom: 12
          }}
        >
          開始點燈祈福
        </button>

        <button
          onClick={() => router.push('/admin')}
          style={{
            width: '100%',
            padding: 12,
            borderRadius: 12,
            background: '#eee',
            fontSize: 14
          }}
        >
          宮廟管理入口
        </button>

        <div style={{
          marginTop: 20,
          fontSize: 12,
          color: '#999'
        }}>
          ✨ 支援寵物祈福・平安燈・跨宮廟合作
        </div>

      </div>
    </div>
  )
}