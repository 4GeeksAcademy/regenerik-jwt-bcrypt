import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Form from "../component/Form.jsx";
import FormLog from "../component/FormLog.jsx";
import ListUsers from "../component/ListUsers.jsx"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<h1>Esto es Home</h1>
			<Form/>
			<br/>
			<FormLog/>
			<br/>
			<ListUsers />
		</div>
	);
};
