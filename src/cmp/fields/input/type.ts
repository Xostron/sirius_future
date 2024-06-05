export default interface Inp {
	value: string | number
	setValue: (value:string|number) => void
	style?: object
	cls?: string
	placeholder?: string
	type?: string
	min?: number
	max?: number
	step?: number
	disabled?: boolean | undefined
	autoComplete?: string
}
