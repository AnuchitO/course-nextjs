function App() {

  return (
    <>
      {/* Flight Card */}
      <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
        <span className="material-symbols-outlined text-secondary text-3xl">flight_takeoff</span>
      </div>
      <h3>Qoomlee</h3>
      <p>QM102</p>
      <p>฿3,920.00</p>
      <span>/person</span>
      <p>07:00</p>
      <p>BKK</p>
      <p>2h 30m</p>
      <span>flight</span>
      <span>Non-stop</span>
      <p>09:30</p>
      <p>SIN</p>
      <span>luggage</span>
      <span>20kg</span>
      <span>airline_seat_recline_normal</span>
      <span>Economy</span>
      <button>Select</button>
      <span>arrow_forward</span>
    </>
  )
}

export default App
