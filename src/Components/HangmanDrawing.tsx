import "./HangmanDrawing.css";
const HEAD = <div className="starting-head"> </div>;
const BODY = <div className="body"> </div>;
const rightArm = <div className="right-arm"> </div>;
const leftArm = <div className="left-arm"> </div>;
const rightFoot = <div className="right-foot"> </div>;
const leftFoot = <div className="left-foot"> </div>;

const BODY_Parts = [HEAD, BODY, rightArm, leftArm, rightFoot, leftFoot];
type HangmanDrawingProps = {
	numberOfGuesses: number;
};

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
	return (
		<div className="Hanging">
			{BODY_Parts.slice(0, numberOfGuesses)}

			<div className="last-line"> </div>
			<div className="third-line"> </div>
			<div className="new-line"> </div>
			<div className="line"> </div>
		</div>
	);
}
