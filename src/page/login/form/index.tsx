import { useState } from "react"
import Btn from "@cmp/fields/btn"
import Input from "@cmp/fields/input"

const Form = () => {
	const [email, setEmail] = useState<string | number>("")
	const [psw, setPsw] = useState<string | number>("")
	return (
		<div className="login-form">
			<Input value={email} setValue={setEmail} />
			<Input value={psw} setValue={setPsw} />
			<input type='checkbox' />
			<Btn
				title='Войти'
				onClick={() => {
					console.log("Enter")
				}}
			/>
		</div>
	)
}

export default Form
