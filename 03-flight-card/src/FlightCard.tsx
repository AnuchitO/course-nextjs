function FlightCard() {
  const takeoffIcon = "flight_takeoff"
  const airline = "Qoomlee"
  const flightNumber = "QM102"

  return (
    <section className="bg-surface-container-lowest rounded-xl border border-outline-variant shadow-sm p-md transition-all hover:shadow-md hover:border-primary/30 group">
      <div className="flex flex-col gap-lg">
        {/* Airline & Price */}
        <div className="flex justify-between items-start gap-sm">
          <div className="flex items-center gap-md min-w-0">
            <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-secondary text-3xl">{takeoffIcon}</span>
            </div>
            <div className="min-w-0">
              <h3 className="text-headline-md">{airline}</h3>
              <p className="text-label-sm text-on-surface-variant">{flightNumber}</p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-xs shrink-0">
            <div className="text-right">
              <p className="text-headline-md text-primary">
                ฿3,920.00 <span className="text-label-sm text-on-surface-variant">/person</span>
              </p>
            </div>
          </div>
        </div>
        {/* Journey */}
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <p className="text-headline-md text-on-surface">07:00</p>
            <p className="text-label-md text-on-surface-variant">BKK</p>
          </div>
          <div className="flex-[2] flex flex-col items-center px-md">
            <p className="text-label-sm text-on-surface-variant mb-1">2h 30m</p>
            <div className="w-full flex items-center">
              <div className="flex-1 border-t-2 border-dashed border-outline-variant"></div>
              <span className="material-symbols-outlined text-primary text-[20px] rotate-90 mx-1">flight</span>
              <div className="flex-1 border-t-2 border-dashed border-outline-variant"></div>
            </div>
            <span className="bg-surface-container-high text-on-surface-variant text-[10px] px-2 py-0.5 rounded font-medium mt-1">Non-stop</span>
          </div>
          <div className="flex-1 text-right">
            <p className="text-headline-md text-on-surface">09:30</p>
            <p className="text-label-md text-on-surface-variant">SIN</p>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-between pt-md border-t border-outline-variant/30">
          <div className="flex gap-md text-on-surface-variant">
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">luggage</span>
              <span className="text-label-sm">20kg</span>
            </div>
            <div className="flex items-center gap-xs">
              <span className="material-symbols-outlined text-[18px]">airline_seat_recline_normal</span>
              <span className="text-label-sm capitalize">Economy</span>
            </div>
          </div>
          <button className="bg-primary-container text-on-primary-container px-lg py-2 rounded-xl text-label-md flex items-center gap-xs active:scale-95 transition-all shadow-sm">
            Select <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default FlightCard
