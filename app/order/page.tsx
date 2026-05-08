'use client'

import { useEffect, useState } from 'react'
import { createClient } from '@/lib/supabase'

const supabase = createClient()

export default function OrderPage() {
  const [temples, setTemples] = useState<any[]>([])
  const [templeId, setTempleId] = useState('')

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')

  const [petName, setPetName] = useState('')
  const [prayer, setPrayer] = useState('願毛孩平安健康')

  // 🔥 load temples
  useEffect(() => {
    const load = async () => {
      const { data } = await supabase.from('temples').select('*')
      setTemples(data || [])
    }
    load()
  }, [])

  // 🔥 submit order
  const submit = async () => {

    // 1️⃣ user upsert
    const { data: user } = await supabase
      .from('users')
      .upsert({ name, phone }, { onConflict: 'phone' })
      .select()
      .single()

    // 2️⃣ pet create
    const { data: pet } = await supabase
      .from('pets')
      .insert({
        user_id: user.id,
        name: petName,
        prayer_text: prayer
      })
      .select()
      .single()

    // 3️⃣ order create
    await supabase.from('orders').insert({
      user_id: user.id,
      temple_id: templeId,
      pet_id: pet.id,
      amount: 100,
      prayer_text_snapshot: prayer,
      status: 'pending'
    })

    alert('點燈成功 🎉（已建立訂單）')
  }

  return (
    <div style={{ maxWidth: 520, margin: '0 auto', padding: 20 }}>

      <h1>🐾 點燈祈福</h1>

      {/* 宮廟 */}
      <select
        value={templeId}
        onChange={(e) => setTempleId(e.target.value)}
        style={{ width: '100%', padding: 10, marginTop: 10 }}
      >
        <option value="">選擇宮廟</option>
        {temples.map(t => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>

      {/* user */}
      <input
        placeholder="飼主姓名"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '100%', padding: 10, marginTop: 10 }}
      />

      <input
        placeholder="手機"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={{ width: '100%', padding: 10, marginTop: 10 }}
      />

      {/* pet */}
      <input
        placeholder="寵物名字"
        value={petName}
        onChange={(e) => setPetName(e.target.value)}
        style={{ width: '100%', padding: 10, marginTop: 10 }}
      />

      {/* prayer */}
      <textarea
        value={prayer}
        onChange={(e) => setPrayer(e.target.value)}
        style={{ width: '100%', padding: 10, marginTop: 10 }}
      />

      <button
        onClick={submit}
        style={{
          width: '100%',
          padding: 12,
          marginTop: 15,
          background: '#111',
          color: '#fff'
        }}
      >
        送出點燈（建立訂單）
      </button>

    </div>
  )
}