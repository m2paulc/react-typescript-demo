import Header from "./components/Header";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";
import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";

function getWord() {
	const word = words[Math.floor(Math.random() * words.length)].toUpperCase();
	console.log(word);
	return word;
}

function App() {
	const title = "Hangman Game";
	const [wordToGuess, setWordToGuess] = useState(getWord);
	const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
	const incorrectLetters = guessedLetters.filter(
		(letter) => !wordToGuess.includes(letter)
	);

	const isLoser = incorrectLetters.length >= 6;
	const isWinner = wordToGuess
		.split("")
		.every((letter) => guessedLetters.includes(letter));

	const addGuessedLetter = useCallback(
		(letter: string) => {
			if (guessedLetters.includes(letter)) return;

			setGuessedLetters((currentLetters) => [...currentLetters, letter]);
		},
		[guessedLetters]
	);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;

			if (!key.match(/^[A-Z]$/)) return;

			e.preventDefault();
			addGuessedLetter(key);
		};
		document.addEventListener("keypress", handler);
		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, [guessedLetters, addGuessedLetter]);

	useEffect(() => {
		const handler = (e: KeyboardEvent) => {
			const key = e.key;
			if (key !== "Enter") return;

			e.preventDefault();
			setGuessedLetters([]);
			setWordToGuess(getWord());
		};
		document.addEventListener("keypress", handler);

		return () => {
			document.removeEventListener("keypress", handler);
		};
	}, []);

	return (
		<>
			<div className="max-w-[800px] flex flex-col gap-8 m-auto items-center justify-center">
				<Header title={title} />
				<div className="text-3xl text-center">
					{isWinner && "Winner! - Refresh to try again"}
					{isLoser && "Nice Try - Refresh to try again"}
				</div>
				<HangmanDrawing numberOfGuesses={incorrectLetters.length} />
				<HangmanWord
					guessedLetters={guessedLetters}
					wordToGuess={wordToGuess}
					reveal={isLoser}
				/>
				<div className="self-stretch">
					<Keyboard
						activeLetters={guessedLetters.filter((letter) =>
							wordToGuess.includes(letter)
						)}
						inactiveLetters={incorrectLetters}
						addGuessedLetter={addGuessedLetter}
						disabled={isWinner || isLoser}
					/>
				</div>
			</div>
		</>
	);
}

export default App;
