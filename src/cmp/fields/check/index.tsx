import InCheckbox from "./type"

// radio кнопка
export default function Checkbox({
	label,
	cls,
	checked,
	onChange,
}: InCheckbox) {
	let cl = ["checkbox", cls].join(" ")

	return (
		<label className={cl}>
			<input type='checkbox' checked={checked} onChange={onChange} />
			{label}
		</label>
	)
}
