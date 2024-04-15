const KEYS = [
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"G",
	"H",
	"I",
	"J",
	"K",
	"L",
	"M",
	"N",
	"O",
	"P",
	"Q",
	"R",
	"S",
	"T",
	"U",
	"V",
	"W",
	"X",
	"Y",
	"Z",
];

type KeyboardProps = {
	activeLetters: string[];
	inactiveLetters: string[];
	addGuessedLetter: (letter: string) => void;
	disabled: boolean;
};

function Keyboard({
	activeLetters,
	inactiveLetters,
	addGuessedLetter,
	disabled = false,
}: KeyboardProps) {
	return (
		<div className="grid grid-cols-keyboardGrid gap-2">
			{KEYS.map((key) => {
				const isActive = activeLetters.includes(key);
				const isInactive = inactiveLetters.includes(key);
				return (
					<button
						onClick={() => addGuessedLetter(key)}
						className="w-full border border-solid border-black text-2xl uppercase aspect-square p-2 font-bold cursor-pointer enabled:hover:bg-yellow-500 enabled:focus:bg-yellow-500 enabled:active:bg-gold-600 enabled:active:text-white disabled:opacity-30 disabled:cursor-not-allowed"
						key={key}
						disabled={isInactive || isActive || disabled}
					>
						{key}
					</button>
				);
			})}
		</div>
	);
}

export default Keyboard;
