import Btn from "@cmp/fields/btn"

const Lang = () => {
	return (
		<span className='login-lang'>
			<Btn
				title='RU'
				onClick={() => {
					console.log("RU")
				}}
			/>
			<Btn
				title='EN'
				onClick={() => {
					console.log("EN")
				}}
			/>
		</span>
	)
}

export default Lang
