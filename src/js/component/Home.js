import React, { useState } from "react";
import "../../styles/Home.css"

//include images into your bundle

//create your first component
const Home = () => {


	const [selectcolor, setSelectColor] = useState("Semaforo__circle1")
	const change = (colorselected) => {
		setSelectColor(colorselected)

	}



	return (
		<div className="Semaforo text-center">

			<div className="Suport"></div>
			<div className="Semaforo__body">

				<div className={`Semaforo__circle1 ${selectcolor == "Semaforo__circle1" ? "Light" : ""} `}
					onClick={() => change("Semaforo__circle1")}
				></div>


				<div className={`Semaforo__circle2 ${selectcolor == "Semaforo__circle2" ? "Light" : ""} `}
					onClick={() => change("Semaforo__circle2")}
				></div>


				<div className={`Semaforo__circle3 ${selectcolor == "Semaforo__circle3" ? "Light" : ""} `}
					onClick={() => change("Semaforo__circle3")}
				></div>
			</div>

		</div>
	);
};



export default Home;
