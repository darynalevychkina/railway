import { useState } from 'react'

// BookingForm — форма бронювання з валідацією
// Props: onSubmit, selectedSeats, wagon, train
function BookingForm({ onSubmit, selectedSeats, wagon, train }) {
  const [form, setForm] = useState({ name: '', phone: '', email: '' })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.name.trim() || form.name.trim().length < 2)
      e.name = "Введіть ім'я (мінімум 2 символи)"
    if (!form.phone.match(/^\+?[\d\s\-()]{10,15}$/))
      e.phone = 'Введіть коректний номер телефону'
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      e.email = 'Введіть коректний email'
    if (selectedSeats.length === 0)
      e.seats = 'Оберіть хоча б одне місце'
    return e
  }

  const handleChange = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const e2 = validate()
    if (Object.keys(e2).length > 0) { setErrors(e2); return }
    onSubmit({ ...form, seats: selectedSeats, wagon: wagon.number, wagonType: wagon.type })
  }

  const totalPrice = selectedSeats.length * train.price

  return (
    <div className="booking-form-wrap">
      <h3 className="section-title">Дані пасажира</h3>

      {errors.seats && (
        <div style={{ color:'var(--red)', fontSize:'0.85rem', marginBottom:12, padding:'8px 12px', background:'#fee2e2', borderRadius:8 }}>
          ⚠️ {errors.seats}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-grid">

          <div className="form-group full">
            <label className="form-label">Повне ім'я *</label>
            <input
              className={`form-input ${errors.name ? 'error' : ''}`}
              type="text"
              placeholder="Іваненко Іван Іванович"
              value={form.name}
              onChange={e => handleChange('name', e.target.value)}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Телефон *</label>
            <input
              className={`form-input ${errors.phone ? 'error' : ''}`}
              type="tel"
              placeholder="+38 050 123 45 67"
              value={form.phone}
              onChange={e => handleChange('phone', e.target.value)}
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              className={`form-input ${errors.email ? 'error' : ''}`}
              type="email"
              placeholder="ivan@example.com"
              value={form.email}
              onChange={e => handleChange('email', e.target.value)}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>

        </div>

        {/* Підсумок */}
        {selectedSeats.length > 0 && (
          <div style={{ padding:'14px 16px', background:'#eff6ff', borderRadius:8, marginBottom:16, fontSize:'0.9rem' }}>
            <strong>{train.from} → {train.to}</strong> · Вагон {wagon.number} ({wagon.type})<br/>
            Місця: <strong>{selectedSeats.sort((a,b)=>a-b).join(', ')}</strong> ·
            Разом: <strong style={{ color:'var(--primary)', fontSize:'1.1rem' }}> {totalPrice} ₴</strong>
          </div>
        )}

        <button className="btn-submit" type="submit">
          🎫 Забронювати квитки
        </button>
      </form>
    </div>
  )
}

export default BookingForm