import "./HangmanWord.css";
type HangmanWordProps = {
	guessedLetters: string[];
	wordToGuess: string;
	reveal?: boolean;
};
export function HangmanWord({
	guessedLetters,
	wordToGuess,
	reveal = false,
}: HangmanWordProps) {
	return (
		<div className="flex-container">
			{" "}
			{wordToGuess.split("").map((letter) => (
				<span className="find-letter" key={letter}>
					<span
						className={
							guessedLetters.includes(letter) || reveal ? "visible" : "hidden"
						}
					>
						{letter}
					</span>
				</span>
			))}{" "}
		</div>
	);
}
