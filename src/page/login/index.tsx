import { useState } from "react"
import Title from "./title"
import Form from "./form"
import Forget from "./forget"
import NoAcc from "./no_acc"
import Lang from "./lang"
import "./style.css"

const Login = () => {
	return (
		<>
			<main className='login'>
				<div className='login-content'>
					<Title />
					<Form />
					<Forget />
					<NoAcc />
				</div>
			</main>
			<Lang />
		</>
	)
}

export default Login
