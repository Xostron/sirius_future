import Btn from "@cmp/fields/btn"

const Forget = () => {
	return (
		<span className='login-forget'>
			<Btn
				cls='btn-text'
				title='Я забыл пароль'
				onClick={() => {
					console.log("Забыл пароль")
				}}
			/>
			<Btn
				cls='btn-text'
				title='Войти как тренер'
				onClick={() => {
					console.log("Войти как тренер")
				}}
			/>
		</span>
	)
}

export default Forget
