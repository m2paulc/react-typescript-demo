type props = {
	title: string;
};

const Greet = ({ title }: props) => {
	return (
		<div className="m-auto">
			<h1 className="text-3xl font-bold">{title}</h1>
		</div>
	);
};

export default Greet;
