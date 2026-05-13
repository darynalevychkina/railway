import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import WagonSelector from '../components/WagonSelector'
import SeatMap       from '../components/SeatMap'
import BookingForm   from '../components/BookingForm'
import trains        from '../data/trains'
import { saveBooking, getBookedSeats } from '../services/BookingService'

// Booking — сторінка бронювання місць
function Booking() {
  const { trainId }  = useParams()
  const navigate     = useNavigate()
  const train        = trains.find(t => t.id === parseInt(trainId))

  const [selectedWagon, setSelectedWagon] = useState(train?.wagons[0] || null)
  const [selectedSeats, setSelectedSeats] = useState([])
  const [booking, setBooking]             = useState(null) // успішне бронювання

  if (!train) {
    return (
      <div className="page">
        <p>Рейс не знайдено.</p>
        <button className="btn-back" onClick={() => navigate('/')}>← Назад</button>
      </div>
    )
  }

  // Об'єднуємо заброньовані з JSON і з localStorage
  const bookedFromStorage = selectedWagon
    ? getBookedSeats(train.id, selectedWagon.id)
    : []
  const currentWagon = selectedWagon
    ? { ...selectedWagon, booked: [...selectedWagon.booked, ...bookedFromStorage] }
    : null

  // Вибір вагона — скидаємо вибрані місця
  const handleWagonSelect = (wagon) => {
    setSelectedWagon(wagon)
    setSelectedSeats([])
  }

  // Клік по місцю — додати/прибрати
  const handleToggleSeat = (num) => {
    setSelectedSeats(prev =>
      prev.includes(num)
        ? prev.filter(s => s !== num)
        : [...prev, num]
    )
  }

  // Бронювання
  const handleSubmit = (formData) => {
    const result = saveBooking({
      trainId:   train.id,
      wagonId:   selectedWagon.id,
      trainName: train.number,
      from:      train.from,
      to:        train.to,
      departure: train.departure,
      ...formData,
    })
    setBooking(result)
  }

  // Екран успішного бронювання
  if (booking) {
    return (
      <div className="booking-page">
        <div className="success-card">
          <span className="success-icon">✅</span>
          <h2 className="success-title">Квитки заброньовано!</h2>
          <div className="success-details">
            <strong>{train.from} → {train.to}</strong><br/>
            Потяг: {train.number}<br/>
            Вагон: {booking.wagon} ({booking.wagonType})<br/>
            Місця: <strong>{booking.seats.sort((a,b)=>a-b).join(', ')}</strong><br/>
            Пасажир: {booking.name}<br/>
            Email: {booking.email}<br/>
            Сума: <strong>{booking.seats.length * train.price} ₴</strong>
          </div>
          <button className="btn-home" onClick={() => navigate('/')}>
            ← До списку рейсів
          </button>
        </div>
      </div>
    )
  }

  const formatTime = (iso) =>
    new Date(iso).toLocaleString('uk-UA', { day:'2-digit', month:'short', hour:'2-digit', minute:'2-digit' })

  return (
    <div className="booking-page">

      {/* Хедер сторінки */}
      <div className="booking-header">
        <button className="btn-back" onClick={() => navigate('/')}>← Назад</button>
        <h1 className="page-title" style={{ margin:0 }}>Бронювання квитків</h1>
      </div>

      {/* Інформація про рейс */}
      <div className="booking-train-info">
        <div className="booking-route">
          {train.from} → {train.to}
        </div>
        <div className="booking-details">
          🚂 {train.number} · ⏰ {formatTime(train.departure)} · 🕐 {train.duration}
        </div>
        <div style={{ marginLeft:'auto', fontWeight:700, color:'var(--primary)', fontSize:'1.1rem' }}>
          від {train.price} ₴
        </div>
      </div>

      {/* Вибір вагона */}
      <WagonSelector
        wagons={train.wagons}
        selectedWagon={selectedWagon}
        onSelect={handleWagonSelect}
      />

      {/* Схема місць */}
      {currentWagon && (
        <SeatMap
          wagon={currentWagon}
          selectedSeats={selectedSeats}
          onToggleSeat={handleToggleSeat}
        />
      )}

      {/* Форма бронювання */}
      <BookingForm
        onSubmit={handleSubmit}
        selectedSeats={selectedSeats}
        wagon={selectedWagon}
        train={train}
      />

    </div>
  )
}

export default Booking