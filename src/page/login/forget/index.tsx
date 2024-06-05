import Btn from "@cmp/fields/btn"

const Forget = () => {
	return (
		<span className='login-forget'>
			<Btn
				title='Я забыл пароль'
				onClick={() => {
					console.log("Забыл пароль")
				}}
			/>
			<Btn
				title='Войти как тренер'
				onClick={() => {
					console.log("Войти как тренер")
				}}
			/>
		</span>
	)
}

export default Forget
