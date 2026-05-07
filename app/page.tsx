'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  const [temples, setTemples] = useState<any[]>([])
  const [products, setProducts] = useState<any[]>([])

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [pet, setPet] = useState('')
  const [prayer, setPrayer] = useState('平安健康')
  const [templeId, setTempleId] = useState('')
  const [productId, setProductId] = useState('')

  useEffect(() => {
    loadData()
  }, [])

  const loadData = async () => {
    const { data: t } = await supabase.from('temples').select('*')
    const { data: p } = await supabase.from('products').select('*')

    setTemples(t || [])
    setProducts(p || [])
  }

  const submit = async () => {
    // 1. user
    const { data: user } = await supabase
      .from('users')
      .insert({ name, phone })
      .select()
      .single()

    // 2. pet
    const { data: petRow } = await supabase
      .from('pets')
      .insert({
        user_id: user?.id,
        name: pet,
        prayer_text: prayer
      })
      .select()
      .single()

    // 3. order
    const { data: order } = await supabase
      .from('orders')
      .insert({
        user_id: user?.id,
        pet_id: petRow?.id,
        temple_id: templeId,
        product_id: productId,
        amount: 600,
        prayer_text_snapshot: prayer,
        status: 'pending'
      })
      .select()
      .single()

    router.push('/success')
  }

  return (
    <div style={{ padding: 20, maxWidth: 400 }}>
      <h2>寵物平安祈福</h2>

      <input placeholder="姓名" onChange={e => setName(e.target.value)} />
      <input placeholder="電話" onChange={e => setPhone(e.target.value)} />

      <input placeholder="寵物名字" onChange={e => setPet(e.target.value)} />

      <textarea
        value={prayer}
        onChange={e => setPrayer(e.target.value)}
      />

      <select onChange={e => setTempleId(e.target.value)}>
        <option>選宮廟</option>
        {temples.map(t => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>

      <select onChange={e => setProductId(e.target.value)}>
        <option>選方案</option>
        {products.map(p => (
          <option key={p.id} value={p.id}>
            {p.name} - {p.price}
          </option>
        ))}
      </select>

      <button onClick={submit}>
        點燈祈福
      </button>
    </div>
  )
}