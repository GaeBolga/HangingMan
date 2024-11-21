import { useCallback, useEffect, useState } from "react";
import "./App.css";
import words from "./wordList.json";
import { HangmanDrawing } from "./Components/HangmanDrawing";
import { Keyboard } from "./Components/Keyboard";
import { HangmanWord } from "./Components/HangmanWord";

function App() {
	const [wordToGuess, setWordToGuess] = useState(() => {
		return words[Math.floor(Math.random() * words.length)];
	});
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
	const inCorrectLetters = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter),
	);

	const isLoser = inCorrectLetters.length >= 6;
	const isWinner = wordToGuess
		.split("")
		.every((letter) => guessedLetters.includes(letter));

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter) || isLoser || isWinner) return;
			setGuessedLetters((currentLetters) => [...currentLetters, letter]);
		},
		[guessedLetters, isWinner, isLoser],
	);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (!key.match(/^[a-z]$/)) return;

			e.preventDefault();
			addGuessedLetter(key);
		};

		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [guessedLetters]);
	return (
		<div className="first-class">
			<div className="end-game">
				{isWinner && "Winner ! - Refresh to try again"}
				{isLoser && "Nice try - Refresh to try again "}{" "}
			</div>
			<HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
			<HangmanWord
				reveal={isLoser}
				guessedLetters={guessedLetters}
				wordToGuess={wordToGuess}
			/>
			<div className="align-grid">
				<Keyboard
					disabled={isWinner || isLoser}
					activeLetters={guessedLetters.filter((letter) =>
						wordToGuess.includes(letter),
					)}
					inactiveLetters={inCorrectLetters}
					addGuessedLetter={addGuessedLetter}
				/>
			</div>
		</div>
	);
}

export default App;
