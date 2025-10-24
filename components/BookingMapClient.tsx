"use client"

import dynamic from "next/dynamic"

// Dynamically import BookingMap with SSR disabled
const BookingMap = dynamic(() => import("./booking-map"), {
  ssr: false,
})

export default BookingMap
