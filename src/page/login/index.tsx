import { useState } from "react"
import Title from "./title"
import Form from "./form"
import Forget from "./forget"
import NoAcc from "./no_acc"
import Lang from "./lang"
import "./style.css"

const Login = () => {
	const [email, setEmail] = useState<string | number>("")
	const [psw, setPsw] = useState<string | number>("")
	return (
		<>
			<main className='login'>
				<Title />
				<Form />
				<Forget />
				<NoAcc />
			</main>
			<Lang />
		</>
	)
}

export default Login
