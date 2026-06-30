function App() {

  return (
    <>
      {/* Flight Card */}
      <div className="flex items-center gap-md min-w-0">
        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
          <span className="material-symbols-outlined text-secondary text-3xl">flight_takeoff</span>
        </div>
        <div className="min-w-0">
          <h3 className="text-headline-md">Qoomlee</h3>
          <p className="text-label-sm text-on-surface-variant">QM102</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-headline-md text-primary">
          ฿3,920.00 <span className="text-label-sm text-on-surface-variant">/person</span>
        </p>
      </div>
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
