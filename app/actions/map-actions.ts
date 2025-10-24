"use server"

export async function generateMapEmbedUrl(pickup?: string, destination?: string) {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY

  if (!apiKey) {
    return null
  }

  if (pickup && destination) {
    const encodedPickup = encodeURIComponent(pickup + ", Sri Lanka")
    const encodedDestination = encodeURIComponent(destination + ", Sri Lanka")
    return `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${encodedPickup}&destination=${encodedDestination}&mode=driving`
  } else if (pickup || destination) {
    const location = pickup || destination
    const encodedLocation = encodeURIComponent(location + ", Sri Lanka")
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedLocation}`
  } else {
    return `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=Sri+Lanka&zoom=8`
  }
}
