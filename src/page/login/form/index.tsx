import { useState } from "react"
import Btn from "@cmp/fields/btn"
import Input from "@cmp/fields/input"
import Checkbox from "@cmp/fields/check"

const Form = () => {
	const [email, setEmail] = useState<string | number>("")
	const [psw, setPsw] = useState<string | number>("")
	const [checked, setChecked] = useState<boolean>(false)

	return (
		<fieldset className='login-form'>
			<Input cls="input-auth" placeholder="E-mail" type="email" value={email} setValue={setEmail} />
			<Input cls="input-auth login-form-psw" type="password" placeholder="Пароль" value={psw} setValue={setPsw} />
			<Checkbox
			cls="login-form-check"
				label='Запомнить меня'
				checked={checked}
				onChange={onChecked}
			/>
			<Btn cls="login-form-btn" title='Войти' onClick={onClick} />
		</fieldset>
	)

	function onChecked() {
		setChecked(!checked)
	}

	function onClick() {
		console.log("Войти")
	}
}

export default Form
