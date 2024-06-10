import Btn from "@cmp/fields/btn"

const NoAcc = () => {
	return (
		<div className='login-noacc'>
			<p>Нет аккаунта?</p>
			<Btn
				cls='btn-text'
				title='Зарегистрироваться'
				onClick={() => {
					console.log("Зарегистрироваться")
				}}
			/>
		</div>
	)
}

export default NoAcc
