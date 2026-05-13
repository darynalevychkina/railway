// BookingService.js — сервіс для роботи з бронюваннями через localStorage

const STORAGE_KEY = 'railway_bookings'

// Отримати всі бронювання
export const getBookings = () => {
  const saved = localStorage.getItem(STORAGE_KEY)
  return saved ? JSON.parse(saved) : []
}

// Зберегти нове бронювання
export const saveBooking = (booking) => {
  const bookings = getBookings()
  const newBooking = {
    ...booking,
    id: Date.now(),
    createdAt: new Date().toISOString(),
    status: 'confirmed',
  }
  bookings.push(newBooking)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(bookings))
  return newBooking
}

// Перевірити чи місце вже заброньоване (з localStorage)
export const getBookedSeats = (trainId, wagonId) => {
  const bookings = getBookings()
  return bookings
    .filter(b => b.trainId === trainId && b.wagonId === wagonId)
    .flatMap(b => b.seats)
}