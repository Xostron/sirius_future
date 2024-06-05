import React from "react"
import ReactDOM from "react-dom/client"
import App from "./page/login/index"
import { RouterProvider } from "react-router-dom"
import router from "./router"
import "./style.css"

const root = ReactDOM.createRoot(document.getElementById("root")!)
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
