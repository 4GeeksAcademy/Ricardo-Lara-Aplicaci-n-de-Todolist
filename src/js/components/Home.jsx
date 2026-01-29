import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	return (
		<div className="d-flex justify-content-center align-items-center min-vh-100">
            <ToDoList/>
		</div>
	);
};

const ToDoList = () =>{
	const [ tarea, setTarea] = useState ("");
	const [ lista, setLista] = useState ([]);

	return (
		<div className="d-flex flex-column">
			<p className="mb-3 text-center text-danger fw-light opacity-50" style={{fontSize: "55px"}}>todos</p>
			<input type="text" onKeyDown={(e)=>{if (e.key==="Enter"){setLista(prev=>[...prev, tarea]); setTarea("");}}} onChange={(e)=>setTarea(e.target.value)} value={tarea} placeholder={lista.length===0 ? "No hay tareas, añadir tareas" : " ¿Qué hay pendiente?"} style={{width: "350px", height: "55px"}}/>
			<ul className="list-group shadow"  style={{width: "350px"}}>
				{lista.map((item, index)=>{
					return (
					<li className="list-group-item rounded-0 d-flex justify-content-between align-items-center todo-item" key={index} style={{width: "350px", height: "55px", fontSize: "16px"}}>
						{item}
						<button type="button" onClick={()=>setLista(lista.filter((_,i)=> i !==index))} className="btn-close p-0 todo-close" aria-label="Close" style={{fontSize: "14px"}}></button>
					</li>
					)
				})}
				<li className="list-group-item rounded-0 d-flex align-items-center text-body-secondary opacity-75" style={{width: "350px", height: "30px", fontSize: "12px"}}>
						{lista.length} item left
				</li>
			</ul>
		</div>
	);
};

export default Home;