import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { CreateTripPage } from "./pages/create-trip/CreateTripPage"
import { TripDetails } from "./pages/trip-details/TripDetails"

const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />
  },
  {
    path: "/trips/:tripId",
    element: <TripDetails />
  }
])

export function App() {

  return <RouterProvider router={router} />

}