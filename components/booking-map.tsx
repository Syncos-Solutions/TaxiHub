"use client"

import { useEffect, useState } from "react"

interface BookingMapProps {
  selectedPickup?: string
  selectedDestination?: string
}

export default function BookingMap({ selectedPickup, selectedDestination }: BookingMapProps) {
  const [mapUrl, setMapUrl] = useState("")

  const GOOGLE_MAPS_API_KEY = "AIzaSyCSDUDNOWCK5dVbjVCdKMRNj3nDTuqn5Uw"

  useEffect(() => {
    if (!selectedPickup && !selectedDestination) {
      setMapUrl("")
      return
    }

    const origin = encodeURIComponent(selectedPickup || "Colombo, Sri Lanka")
    const dest = encodeURIComponent(selectedDestination || "")

    const url = dest
      ? `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=${origin}&destination=${dest}&zoom=7`
      : `https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${origin}&zoom=7`

    setMapUrl(url)
  }, [selectedPickup, selectedDestination])

  return (
    <div className="w-full h-72 sm:h-80 md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden border-2 border-primary/10">

      {mapUrl ? (
        <iframe
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={mapUrl}
          title="Booking Route Map"
        />
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
          <p className="text-gray-500">Enter pickup and destination to view map</p>
        </div>
      )}
    </div>
  )
}
