// WagonSelector — вибір вагона
// Props: wagons (масив), selectedWagon, onSelect
function WagonSelector({ wagons, selectedWagon, onSelect }) {
  return (
    <div className="wagon-selector">
      <h3 className="section-title">Оберіть вагон</h3>
      <div className="wagon-tabs">
        {wagons.map(wagon => {
          const free = wagon.seats - wagon.booked.length
          return (
            <button
              key={wagon.id}
              className={`wagon-tab ${selectedWagon?.id === wagon.id ? 'active' : ''}`}
              onClick={() => onSelect(wagon)}
            >
              Вагон {wagon.number} · {wagon.type} · {free} місць
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default WagonSelector