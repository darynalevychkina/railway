// SeatMap — схема місць у вагоні
// Props: wagon, selectedSeats, onToggleSeat
function SeatMap({ wagon, selectedSeats, onToggleSeat }) {
  if (!wagon) return null

  const seats = Array.from({ length: wagon.seats }, (_, i) => i + 1)

  const getSeatClass = (num) => {
    if (wagon.booked.includes(num)) return 'seat-btn seat-booked'
    if (selectedSeats.includes(num))  return 'seat-btn seat-selected'
    return 'seat-btn seat-free'
  }

  return (
    <div className="seat-map-wrap">
      <h3 className="section-title">
        Схема місць — Вагон {wagon.number} ({wagon.type})
      </h3>

      {/* Легенда */}
      <div className="seat-legend">
        <div className="legend-item">
          <div className="legend-dot legend-free"></div> Вільне
        </div>
        <div className="legend-item">
          <div className="legend-dot legend-booked"></div> Заброньоване
        </div>
        <div className="legend-item">
          <div className="legend-dot legend-selected"></div> Обране вами
        </div>
      </div>

      {/* Сітка місць */}
      <div className="seat-grid">
        {seats.map(num => (
          <button
            key={num}
            className={getSeatClass(num)}
            disabled={wagon.booked.includes(num)}
            onClick={() => !wagon.booked.includes(num) && onToggleSeat(num)}
            title={`Місце ${num}`}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Обрані місця */}
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