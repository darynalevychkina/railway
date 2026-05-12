import TrainCard from './TrainCard'

// TrainList — список карток рейсів
// Props: trains (масив), searchQuery, filterType
function TrainList({ trains, searchQuery, filterType }) {

  // Фільтрація за пошуком і типом
  const filtered = trains.filter(t => {
    const q = searchQuery.toLowerCase()
    const matchSearch =
      t.from.toLowerCase().includes(q) ||
      t.to.toLowerCase().includes(q) ||
      t.number.toLowerCase().includes(q)
    const matchType = filterType === 'all' || t.type === filterType
    return matchSearch && matchType
  })

  if (filtered.length === 0) {
    return (
      <div className="no-results">
        <span className="no-results-icon">🔍</span>
        <p>Рейсів не знайдено. Спробуйте змінити параметри пошуку.</p>
      </div>
    )
  }

  return (
    <div className="train-list">
      {filtered.map(train => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  )
}

export default TrainList