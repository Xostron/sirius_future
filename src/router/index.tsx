import Login from "@page/login"
import Calendar from "@page/calendar"
import Profile from "@page/profile"
import NotFound from "@page/not_found"
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
	{ path: "/", element: <Login /> },
	{ path: "calendar", element: <Calendar /> },
	{ path: "profile", element: <Profile /> },
	{ path: "*", element: <NotFound /> },
])

export default router
