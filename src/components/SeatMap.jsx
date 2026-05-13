// SeatMap — схема місць як на реальному сайті УкрЗалізниці
// Плацкарт: верхній рядок (парні) + нижній рядок (непарні) + бокові знизу
function SeatMap({ wagon, selectedSeats, onToggleSeat }) {
  if (!wagon) return null

  const getSeatStatus = (num) => {
    if (wagon.booked.includes(num)) return 'booked'
    if (selectedSeats.includes(num)) return 'selected'
    return 'free'
  }

  const SeatBtn = ({ num }) => {
    const status = getSeatStatus(num)
    return (
      <button
        className={`seat-btn seat-${status}`}
        disabled={status === 'booked'}
        onClick={() => status !== 'booked' && onToggleSeat(num)}
        title={`Місце ${num}`}
      >
        {num}
      </button>
    )
  }

  // ── ПЛАЦКАРТ ──
  // Верхній ряд: парні (верхні полиці)
  // Нижній ряд: непарні (нижні полиці)
  const renderPlaczkart = () => {
    const topRow = []
    const botRow = []
    for (let i = 1; i <= wagon.seats; i++) {
      if (i % 2 === 0) topRow.push(i)
      else             botRow.push(i)
    }
    return (
      <div className="placzkart-layout">
        <div className="seats-row top-row">
          {topRow.map(n => <SeatBtn key={n} num={n} />)}
        </div>
        <div className="seats-row bot-row">
          {botRow.map(n => <SeatBtn key={n} num={n} />)}
        </div>
      </div>
    )
  }

  // ── КУПЕ ──
  // Верхній ряд: парні (2,4,6...) — верхні полиці
  // Нижній ряд: непарні (1,3,5...) — нижні полиці
  const renderKupe = () => {
    const topRow = []
    const botRow = []
    for (let i = 1; i <= wagon.seats; i++) {
      if (i % 2 === 0) topRow.push(i)
      else             botRow.push(i)
    }
    return (
      <div className="kupe-layout">
        <div className="seats-row top-row">
          {topRow.map(n => <SeatBtn key={n} num={n} />)}
        </div>
        <div className="seats-row bot-row">
          {botRow.map(n => <SeatBtn key={n} num={n} />)}
        </div>
      </div>
    )
  }

  // ── ЕКОНОМ / БІЗНЕС ──
  const renderEconom = () => {
    const seats = Array.from({ length: wagon.seats }, (_, i) => i + 1)
    const rows = []
    for (let i = 0; i < seats.length; i += 4) {
      rows.push(seats.slice(i, i + 4))
    }
    return (
      <div className="econom-layout">
        {rows.map((row, i) => (
          <div key={i} className="econom-row">
            <div className="econom-left">
              {row.slice(0,2).map(n => <SeatBtn key={n} num={n} />)}
            </div>
            <div className="econom-aisle"></div>
            <div className="econom-right">
              {row.slice(2).map(n => <SeatBtn key={n} num={n} />)}
            </div>
          </div>
        ))}
      </div>
    )
  }

  const renderSeats = () => {
    if (wagon.type === 'Плацкарт') return renderPlaczkart()
    if (wagon.type === 'Купе')     return renderKupe()
    return renderEconom()
  }

  return (
    <div className="seat-map-wrap">
      <h3 className="section-title">
        Схема місць — Вагон {wagon.number} ({wagon.type})
      </h3>

      <div className="seat-legend">
        <div className="legend-item"><div className="legend-dot legend-free"></div> Вільне</div>
        <div className="legend-item"><div className="legend-dot legend-booked"></div> Заброньоване</div>
        <div className="legend-item"><div className="legend-dot legend-selected"></div> Обране вами</div>
      </div>

      <div className="wagon-scheme-wrap">
        {renderSeats()}
      </div>

      {selectedSeats.length > 0 && (
        <div className="selected-info">
          ✅ Обрані місця: <strong>{selectedSeats.sort((a,b)=>a-b).join(', ')}</strong>
          &nbsp;· Кількість: <strong>{selectedSeats.length}</strong>
        </div>
      )}
    </div>
  )
}

export default SeatMap