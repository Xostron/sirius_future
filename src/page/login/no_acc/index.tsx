import Btn from "@cmp/fields/btn"

const NoAcc = () => {
	return (
		<div className='login-noacc'>
			<p>Нет аккаунта?</p>
			<Btn
				title='Зарегистрироваться'
				onClick={() => {
					console.log("Зарегистрироваться")
				}}
			/>
		</div>
	)
}

export default NoAcc
