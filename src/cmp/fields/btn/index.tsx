import btn from "./type"
import "../style.css"

//Кнопка с иконкой
export default function Btn({ title, onClick, cls, style }: btn) {
	let cl = ["btn", cls].join(" ")
	return (
		<button onClick={onClick} className={cl} style={style}>
			{title && <span>{title}</span>}
		</button>
	)
}
