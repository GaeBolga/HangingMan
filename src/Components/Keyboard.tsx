import "./Keyboard.css";

const KEYS = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

type keyboardProps = {
	activeLetters: string[];
	inactiveLetters: string[];
	addGuessedLetter: (letter: string) => void;
	disabled?: boolean;
};
export function Keyboard({
	activeLetters,
	inactiveLetters,
	addGuessedLetter,
	disabled = false,
}: keyboardProps) {
	return (
		<div className="keyboard-container">
			{KEYS.map((key) => {
				const isActive = activeLetters.includes(key);
				const isInactive = inactiveLetters.includes(key);

				return (
					<button
						type="button"
						onClick={() => addGuessedLetter(key)}
						className={`btn ${isActive ? "active" : ""} ${isInactive ? "inactive" : ""} ${disabled ? "disabled" : ""}`}
						disabled={isInactive || isActive || disabled}
						key={key}
					>
						{key}
					</button>
				);
			})}
		</div>
	);
}
