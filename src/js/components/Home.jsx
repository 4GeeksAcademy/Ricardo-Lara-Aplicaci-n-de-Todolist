import React, { useEffect, useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
            <ToDoList/>
		</div>
	);
};

const ToDoList = () =>{
	const [ tarea, setTarea] = useState ("");
	const [ lista, setLista] = useState ([]);

	return (
		<div className="container d-flex flex-column">
			<input type="text" onKeyDown={(e)=>{if (e.key==="Enter"){setLista(prev=>[...prev, tarea]); setTarea("");}}} onChange={(e)=>setTarea(e.target.value)} value={tarea} placeholder={lista.length===0 ? "No hay tareas, añadir tareas" : null} style={{width: "350px", height: "55px"}}/>
			<ul className="list-group">
				{lista.map((item, index)=>{
					return <li className="list-group-item rounded-0" key={index} style={{width: "350px", height: "55px"}}>{item}</li>
				})}
			</ul>
		</div>
	);
};

export default Home;