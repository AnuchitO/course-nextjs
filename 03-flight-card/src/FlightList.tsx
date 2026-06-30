import FlightCard from './FlightCard'

function FlightList() {
  return (
    <div className="flex flex-col gap-md">
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
      <FlightCard />
    </div>
  )
}

export default FlightList
