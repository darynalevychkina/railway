import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home    from './pages/Home'
import './styles/global.css'

// App — головний компонент з роутингом
function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <Link to="/" className="header-logo">
          <div className="header-logo-icon">🚂</div>
          УкрЗалізниця — Квитки онлайн
        </Link>
        <nav className="header-nav">
          <Link to="/">Розклад</Link>
          <a href="#">Мої квитки</a>
          <a href="#">Допомога</a>
        </nav>
      </header>

      <Routes>
        <Route path="/"                element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App