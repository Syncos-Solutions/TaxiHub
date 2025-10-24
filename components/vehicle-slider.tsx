"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Users } from "lucide-react"

const vehicles = [
  {
    id: 1,
    name: "Economy Sedan",
    image: "/white-sedan-taxi-car.jpg",
    passengers: 4,
    costPerKm: { lkr: 50, usd: 0.15 },
    description: "Perfect for solo travelers and couples",
  },
  {
    id: 2,
    name: "Comfort Plus",
    image: "/comfortable-sedan-taxi.jpg",
    passengers: 4,
    costPerKm: { lkr: 65, usd: 0.2 },
    description: "Extra comfort with premium features",
  },
  {
    id: 3,
    name: "Premium SUV",
    image: "/luxury-suv-taxi.jpg",
    passengers: 5,
    costPerKm: { lkr: 85, usd: 0.26 },
    description: "Luxury ride with spacious interior",
  },
  {
    id: 4,
    name: "Executive",
    image: "/executive-car-taxi.jpg",
    passengers: 4,
    costPerKm: { lkr: 100, usd: 0.3 },
    description: "Premium business travel experience",
  },
  {
    id: 5,
    name: "Family Van",
    image: "/family-van-taxi.jpg",
    passengers: 7,
    costPerKm: { lkr: 120, usd: 0.36 },
    description: "Spacious van for family trips",
  },
  {
    id: 6,
    name: "Luxury Van",
    image: "/luxury-van-taxi.jpg",
    passengers: 8,
    costPerKm: { lkr: 150, usd: 0.45 },
    description: "Premium group travel solution",
  },
  {
    id: 7,
    name: "Mini Bus",
    image: "/mini-bus-taxi.jpg",
    passengers: 12,
    costPerKm: { lkr: 180, usd: 0.54 },
    description: "Perfect for group tours and events",
  },
  {
    id: 8,
    name: "Coach Bus",
    image: "/coach-bus-taxi.jpg",
    passengers: 20,
    costPerKm: { lkr: 250, usd: 0.75 },
    description: "Large group transportation",
  },
]

export default function VehicleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? vehicles.length - 1 : prev - 1))
    setSelectedVehicle(vehicles[currentIndex === 0 ? vehicles.length - 1 : currentIndex - 1])
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === vehicles.length - 1 ? 0 : prev + 1))
    setSelectedVehicle(vehicles[currentIndex === vehicles.length - 1 ? 0 : currentIndex + 1])
  }

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-primary mb-4">
            Our <span className="text-accent">Vehicle Fleet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our diverse range of vehicles for every occasion
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-fade-in-up">
            <div className="relative bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={selectedVehicle.image || "/placeholder.svg"}
                alt={selectedVehicle.name}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrev}
                className="bg-accent hover:bg-accent/90 text-accent-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="flex gap-2">
                {vehicles.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setSelectedVehicle(vehicles[index])
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? "bg-accent w-8" : "bg-primary/20 w-2"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                className="bg-accent hover:bg-accent/90 text-accent-foreground p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border-2 border-primary/10">
              <h3 className="text-4xl font-bold text-primary mb-2">{selectedVehicle.name}</h3>
              <p className="text-lg text-muted-foreground mb-8">{selectedVehicle.description}</p>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-colors">
                  <div className="bg-accent/20 p-3 rounded-lg">
                    <Users className="text-accent" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Passenger Capacity</p>
                    <p className="text-2xl font-bold text-primary">{selectedVehicle.passengers} Passengers</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-colors">
                    <p className="text-sm text-muted-foreground mb-2">Cost per 1 KM</p>
                    <p className="text-2xl font-bold text-accent">₨ {selectedVehicle.costPerKm.lkr}</p>
                  </div>
                  <div className="p-4 bg-white rounded-xl border-2 border-accent/20 hover:border-accent/50 transition-colors">
                    <p className="text-sm text-muted-foreground mb-2">Cost per 1 KM</p>
                    <p className="text-2xl font-bold text-accent">${selectedVehicle.costPerKm.usd.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
                Book {selectedVehicle.name}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
