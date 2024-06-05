import { useEffect, useState } from "react"
import Inp from "./type"
import "../style.css"

//Поле ввода
export default function Input({
	value,
	setValue,
	style,
	placeholder,
	type = "text",
	min,
	max,
	step,
	cls,
	disabled = false,
	autoComplete = "off",
}: Inp) {
	const [val, setVal] = useState(value)

	// Защита от сброса курсора в конец текста
	useEffect(() => {
		if (val !== value) {
			setVal(value)
		}
	}, [value, val])

	let cl = ["cell input", cls].join(" ")

	return (
		<input
			className={cl}
			type={type}
			style={style}
			min={min}
			max={max}
			step={step}
			placeholder={placeholder}
			value={val}
			onChange={onChange}
			disabled={disabled}
			autoComplete={autoComplete}
		/>
	)
	function onChange(e: React.ChangeEvent<HTMLInputElement>) {
		let v: string | number = e.target.value
		if (Number.isInteger(step) && v) v = Math.floor(+v)
		if (min && v && min > v) return setVal(min)
		if (max && v && max < v) return setVal(max)
		setVal(v)
		setValue(v)
	}
}
