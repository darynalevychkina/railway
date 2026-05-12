import { useNavigate } from 'react-router-dom'

// TrainCard — картка одного рейсу
// Props: train (об'єкт рейсу)
function TrainCard({ train }) {
  const navigate = useNavigate()

  const badgeClass = {
    'Інтерсіті':  'badge-intercity',
    'Інтерсіті+': 'badge-intercity',
    'Швидкий':    'badge-fast',
    'Регіональний':'badge-regional',
  }[train.type] || 'badge-regional'

  const formatTime = (iso) => {
    const d = new Date(iso)
    return d.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' })
  }
  const formatDate = (iso) => {
    const d = new Date(iso)
    return d.toLocaleDateString('uk-UA', { day: '2-digit', month: 'short' })
  }

  const freeSeats = train.wagons.reduce((sum, w) => sum + (w.seats - w.booked.length), 0)

  return (
    <div className="train-card" onClick={() => navigate(`/booking/${train.id}`)}>

      {/* Тип та номер */}
      <div style={{ display:'flex', flexDirection:'column', gap:4, minWidth:100 }}>
        <span className={`train-badge ${badgeClass}`}>{train.type}</span>
        <span className="train-number">{train.number}</span>
      </div>

      {/* Маршрут */}
      <div className="train-route">
        <div>
          <div className="train-city">{train.from}</div>
          <div className="train-time">{formatTime(train.departure)} · {formatDate(train.departure)}</div>
        </div>
        <div className="train-arrow">→</div>
        <div>
          <div className="train-city">{train.to}</div>
          <div className="train-time">{formatTime(train.arrival)} · {formatDate(train.arrival)}</div>
        </div>
      </div>

      {/* Тривалість */}
      <div className="train-info">
        <span className="train-duration">🕐 {train.duration}</span>
        <span className="train-number">💺 {freeSeats} місць</span>
      </div>

      {/* Ціна і кнопка */}
      <div className="train-price">
        <span className="price-value">від {train.price} ₴</span>
        <span className="price-label">за місце</span>
      </div>

      <button
        className="btn-book"
        onClick={(e) => { e.stopPropagation(); navigate(`/booking/${train.id}`) }}
      >
        Обрати →
      </button>

    </div>
  )
}

export default TrainCard