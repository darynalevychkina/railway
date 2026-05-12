// trains.js — дані про потяги (mock-дані)
const trains = [
  {
    id: 1,
    number: "751 Інтерсіті",
    from: "Київ",
    to: "Львів",
    departure: "2025-06-10T07:00",
    arrival:   "2025-06-10T12:30",
    duration:  "5 год 30 хв",
    price:     480,
    type:      "Інтерсіті",
    wagons: [
      { id: 1, number: 1, type: "Бізнес",   seats: 20, booked: [2,5,8,14] },
      { id: 2, number: 2, type: "Економ",   seats: 40, booked: [1,3,7,12,18,22,35] },
      { id: 3, number: 3, type: "Економ",   seats: 40, booked: [4,9,15,27,33] },
    ]
  },
  {
    id: 2,
    number: "109 Столичний",
    from: "Київ",
    to: "Одеса",
    departure: "2025-06-10T09:15",
    arrival:   "2025-06-10T16:45",
    duration:  "7 год 30 хв",
    price:     320,
    type:      "Швидкий",
    wagons: [
      { id: 4, number: 1, type: "Купе",     seats: 36, booked: [1,2,5,6,9,10,17,18] },
      { id: 5, number: 2, type: "Плацкарт", seats: 54, booked: [3,7,11,22,30,44,51] },
      { id: 6, number: 3, type: "Плацкарт", seats: 54, booked: [1,5,8,13,19,28,40,48] },
    ]
  },
  {
    id: 3,
    number: "753 Інтерсіті+",
    from: "Київ",
    to: "Харків",
    departure: "2025-06-10T11:00",
    arrival:   "2025-06-10T14:00",
    duration:  "3 год 00 хв",
    price:     420,
    type:      "Інтерсіті+",
    wagons: [
      { id: 7, number: 1, type: "Бізнес",   seats: 20, booked: [1,3,11,15,19] },
      { id: 8, number: 2, type: "Економ",   seats: 40, booked: [2,6,14,21,31,38] },
    ]
  },
  {
    id: 4,
    number: "87 Карпати",
    from: "Львів",
    to: "Ужгород",
    departure: "2025-06-10T14:20",
    arrival:   "2025-06-10T18:50",
    duration:  "4 год 30 хв",
    price:     210,
    type:      "Регіональний",
    wagons: [
      { id: 9,  number: 1, type: "Купе",     seats: 36, booked: [4,8,16,20,28] },
      { id: 10, number: 2, type: "Плацкарт", seats: 54, booked: [2,9,17,24,33,41] },
    ]
  },
  {
    id: 5,
    number: "103 Дніпро",
    from: "Київ",
    to: "Дніпро",
    departure: "2025-06-10T16:30",
    arrival:   "2025-06-10T20:30",
    duration:  "4 год 00 хв",
    price:     290,
    type:      "Швидкий",
    wagons: [
      { id: 11, number: 1, type: "Купе",     seats: 36, booked: [1,5,9,13,21,25] },
      { id: 12, number: 2, type: "Плацкарт", seats: 54, booked: [3,7,15,23,31,43,51] },
      { id: 13, number: 3, type: "Плацкарт", seats: 54, booked: [2,6,10,18,26,34,46] },
    ]
  },
  {
    id: 6,
    number: "55 Полісся",
    from: "Київ",
    to: "Чернігів",
    departure: "2025-06-10T18:00",
    arrival:   "2025-06-10T20:30",
    duration:  "2 год 30 хв",
    price:     150,
    type:      "Регіональний",
    wagons: [
      { id: 14, number: 1, type: "Економ",   seats: 40, booked: [5,10,20,30] },
      { id: 15, number: 2, type: "Економ",   seats: 40, booked: [2,8,14,24,36] },
    ]
  },
  {
    id: 7,
    number: "755 Інтерсіті",
    from: "Львів",
    to: "Київ",
    departure: "2025-06-10T08:30",
    arrival:   "2025-06-10T14:00",
    duration:  "5 год 30 хв",
    price:     480,
    type:      "Інтерсіті",
    wagons: [
      { id: 16, number: 1, type: "Бізнес",   seats: 20, booked: [1,4,7,12,18] },
      { id: 17, number: 2, type: "Економ",   seats: 40, booked: [2,5,11,16,23,29,37] },
      { id: 18, number: 3, type: "Економ",   seats: 40, booked: [3,8,14,20,28,35] },
    ]
  },
  {
    id: 8,
    number: "145 Причорномор'я",
    from: "Одеса",
    to: "Київ",
    departure: "2025-06-10T20:00",
    arrival:   "2025-06-11T04:00",
    duration:  "8 год 00 хв",
    price:     350,
    type:      "Нічний",
    wagons: [
      { id: 19, number: 1, type: "Купе",     seats: 36, booked: [2,6,10,14,22,26,30,34] },
      { id: 20, number: 2, type: "Плацкарт", seats: 54, booked: [1,4,8,15,20,27,38,46,52] },
      { id: 21, number: 3, type: "Плацкарт", seats: 54, booked: [3,9,13,21,29,37,45,51] },
    ]
  },
  {
    id: 9,
    number: "201 Запорізький",
    from: "Київ",
    to: "Запоріжжя",
    departure: "2025-06-10T13:45",
    arrival:   "2025-06-10T19:15",
    duration:  "5 год 30 хв",
    price:     260,
    type:      "Швидкий",
    wagons: [
      { id: 22, number: 1, type: "Купе",     seats: 36, booked: [3,7,11,19,23,27] },
      { id: 23, number: 2, type: "Плацкарт", seats: 54, booked: [2,6,12,18,24,32,40,48] },
    ]
  },
  {
    id: 10,
    number: "311 Буковина",
    from: "Київ",
    to: "Чернівці",
    departure: "2025-06-10T21:30",
    arrival:   "2025-06-11T06:00",
    duration:  "8 год 30 хв",
    price:     380,
    type:      "Нічний",
    wagons: [
      { id: 24, number: 1, type: "Купе",     seats: 36, booked: [1,5,9,13,17,21,25,29] },
      { id: 25, number: 2, type: "Плацкарт", seats: 54, booked: [4,8,16,24,32,40,48,52] },
      { id: 26, number: 3, type: "Плацкарт", seats: 54, booked: [2,7,11,19,27,35,43,49] },
    ]
  },
  {
    id: 11,
    number: "403 Слобожанський",
    from: "Харків",
    to: "Одеса",
    departure: "2025-06-10T06:00",
    arrival:   "2025-06-10T16:30",
    duration:  "10 год 30 хв",
    price:     410,
    type:      "Швидкий",
    wagons: [
      { id: 27, number: 1, type: "Купе",     seats: 36, booked: [2,4,8,12,20,24,28,32] },
      { id: 28, number: 2, type: "Плацкарт", seats: 54, booked: [1,5,9,17,25,33,41,49] },
      { id: 29, number: 3, type: "Плацкарт", seats: 54, booked: [3,7,15,23,31,39,47,53] },
    ]
  },
  {
    id: 12,
    number: "501 Поліський",
    from: "Рівне",
    to: "Київ",
    departure: "2025-06-10T05:30",
    arrival:   "2025-06-10T09:00",
    duration:  "3 год 30 хв",
    price:     180,
    type:      "Регіональний",
    wagons: [
      { id: 30, number: 1, type: "Економ",   seats: 40, booked: [3,6,12,18,24,30,36] },
      { id: 31, number: 2, type: "Економ",   seats: 40, booked: [1,7,13,19,25,31,37] },
    ]
  },
]

export default trains