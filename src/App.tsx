import Header from "./components/Header";
import HangmanDrawing from "./components/HangmanDrawing";
import HangmanWord from "./components/HangmanWord";
import Keyboard from "./components/Keyboard";

function App() {
	const title = "Hangman Game";
	return (
		<>
			<div className="max-w-[800px] flex flex-col gap-8 m-auto items-center justify-center">
				<Header title={title} />
				<div className="text-3xl text-center">Lose Win</div>
				<HangmanDrawing />
				<HangmanWord />
				<div className="self-stretch">
					<Keyboard />
				</div>
			</div>
		</>
	);
}

export default App;
