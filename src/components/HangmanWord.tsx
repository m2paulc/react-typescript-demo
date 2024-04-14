type HangmanWordProps = {
	guessedLetters: string[];
	wordToGuess: string;
	reveal?: boolean;
};

function HangmanWord({
	guessedLetters,
	wordToGuess,
	reveal,
}: HangmanWordProps) {
	return (
		<div className="flex gap-1 text-6xl font-bold uppercase">
			{wordToGuess.split("").map((letter, index) => (
				<span className="border-b-[.1em] border-black" key={index}>
					<span
						style={{
							visibility:
								guessedLetters.includes(letter) || reveal
									? "visible"
									: "hidden",
						}}
					>
						{letter}
					</span>
				</span>
			))}
		</div>
	);
}

export default HangmanWord;
