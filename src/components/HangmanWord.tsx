function HangmanWord() {
	const word = "TEST";
	const guessedLetters = ["T", "e"];
	return (
		<div className="flex gap-1 text-6xl font-bold uppercase">
			{word.split("").map((letter, index) => (
				<span className="border-b-[.1em] border-black" key={index}>
					<span
						style={{
							visibility: guessedLetters.includes(letter)
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
