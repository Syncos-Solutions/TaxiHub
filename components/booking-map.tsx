"use client"

import { useEffect, useState } from "react"

interface BookingMapProps {
  selectedPickup?: string
  selectedDestination?: string
}

export default function BookingMap({ selectedPickup, selectedDestination }: BookingMapProps) {
  const [mapUrl, setMapUrl] = useState("")

    const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY

  // Function to geocode location names to coordinates
  const getCoordinates = (location: string) => {
    // Predefined coordinates for Sri Lankan cities
    const locationCoords: { [key: string]: string } = {
      "Colombo": "6.9271,79.8612",
      "Kandy": "7.2906,80.6337",
      "Galle": "6.0535,80.2210",
      "Jaffna": "9.6615,80.0255",
      "Trincomalee": "8.5874,81.2152",
      "Batticaloa": "7.7310,81.6747",
      "Matara": "5.9549,80.5550",
      "Negombo": "7.2084,79.8358",
      "Anuradhapura": "8.3114,80.4037",
      "Polonnaruwa": "7.9403,81.0188"
    }
    
    return locationCoords[location] || null
  }

  useEffect(() => {
    // Default: Show Sri Lanka centered map
    if (!selectedPickup && !selectedDestination) {
      // Center of Sri Lanka
      const sriLankaCenter = "7.8731,80.7718"
      const url = `https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${sriLankaCenter}&zoom=8`
      setMapUrl(url)
      return
    }

    // If only pickup is selected, show it as a place marker
    if (selectedPickup && !selectedDestination) {
      const pickupCoords = getCoordinates(selectedPickup)
      if (pickupCoords) {
        // Use place mode with coordinates
        const url = `https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${pickupCoords}&zoom=12`
        setMapUrl(url)
      } else {
        // Fallback to search if coordinates not found
        const pickupEncoded = encodeURIComponent(`${selectedPickup}, Sri Lanka`)
        const url = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${pickupEncoded}&zoom=12`
        setMapUrl(url)
      }
      return
    }

    // If only destination is selected, show it as a place marker
    if (!selectedPickup && selectedDestination) {
      const destCoords = getCoordinates(selectedDestination)
      if (destCoords) {
        const url = `https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${destCoords}&zoom=12`
        setMapUrl(url)
      } else {
        const destEncoded = encodeURIComponent(`${selectedDestination}, Sri Lanka`)
        const url = `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAPS_API_KEY}&q=${destEncoded}&zoom=12`
        setMapUrl(url)
      }
      return
    }

    // If both pickup and destination are selected, show directions
    if (selectedPickup && selectedDestination) {
      const origin = encodeURIComponent(`${selectedPickup}, Sri Lanka`)
      const dest = encodeURIComponent(`${selectedDestination}, Sri Lanka`)
      const url = `https://www.google.com/maps/embed/v1/directions?key=${GOOGLE_MAPS_API_KEY}&origin=${origin}&destination=${dest}&zoom=8`
      setMapUrl(url)
    }
  }, [selectedPickup, selectedDestination, GOOGLE_MAPS_API_KEY])

  return (
    <div className="w-full h-72 sm:h-80 md:h-[500px] lg:h-[600px] rounded-xl overflow-hidden border-2 border-primary/10 shadow-xl">
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
        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-pulse mb-3">
              <svg className="w-16 h-16 mx-auto text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
            </div>
            <p className="text-gray-600 font-medium">Loading Sri Lanka Map...</p>
          </div>
        </div>
      )}
    </div>
  )
}