import Btn from "@cmp/fields/btn"

const Lang = () => {
	return (
		<span className='login-lang'>
			<Btn
				cls='btn-text lang lang-active'
				title='RU'
				onClick={() => {
					console.log("RU")
				}}
			/>
			<Btn
				cls='btn-text lang'
				title='EN'
				onClick={() => {
					console.log("EN")
				}}
			/>
		</span>
	)
}

export default Lang
