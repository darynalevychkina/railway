import { useState } from 'react'
import TrainList from '../components/TrainList'
import trains from '../data/trains'

// Home — сторінка зі списком рейсів
function Home() {
  const [query, setQuery]  = useState('')
  const [filter, setFilter] = useState('all')

  const types = ['all', ...new Set(trains.map(t => t.type))]

  return (
    <div className="page">
      <h1 className="page-title">🚂 Розклад потягів</h1>
      <p className="page-subtitle">Знайдіть та забронюйте квитки на потрібний рейс</p>

      {/* Пошук і фільтр */}
      <div className="search-bar">
        <input
          className="search-input"
          type="search"
          placeholder="🔍 Пошук за містом або номером потяга..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <select
          className="search-select"
          value={filter}
          onChange={e => setFilter(e.target.value)}
        >
          {types.map(t => (
            <option key={t} value={t}>
              {t === 'all' ? 'Усі типи' : t}
            </option>
          ))}
        </select>
      </div>

      <TrainList trains={trains} searchQuery={query} filterType={filter} />
    </div>
  )
}

export default Home