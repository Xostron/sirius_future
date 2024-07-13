import { useState } from "react"
import Title from "./title"
import Form from "./form"
import Forget from "./forget"
import NoAcc from "./no_acc"
import Lang from "./lang"
import "./style.css"

const Login = () => {
	return (
		// <div className='wrp'>
		<section className='login'>
			<div className='login-content'>
				<Title />
				<Form />
				<Forget />
				<NoAcc />
			</div>
			<Lang />
		</section>
		// </div>
	)
}

export default Login
