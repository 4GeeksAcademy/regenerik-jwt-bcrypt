const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			message: null,
			userList: []		
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			register: async (datas) => {
				try{
					let response = await fetch("https://zany-succotash-679wjxj7vv6fr9v6-3001.app.github.dev/api/register", {
						method:"POST",
						body: JSON.stringify(datas),
						headers:{
							"Content-Type": "application/json"
						}
					})
					let data = await response.json()
					console.log("esta es la dta de respuesta: ",data)
					if(data.ok){
						alert("Registro exitoso")
					}else{
						alert("Algo salió mal")
					}
				}catch(e){
					console.error(e)
				}
			},
			login: async (infoLogin) => {
				try{
					const response = await fetch("https://zany-succotash-679wjxj7vv6fr9v6-3001.app.github.dev/api/login", {
						method:"POST",
						body: JSON.stringify(infoLogin),
						headers:{
							"Content-Type": "application/json"
						}
					})
					let data = await response.json()
					console.log("data entrante de login : ",data)
					if(data.access_token){

						console.log("bIENVENIDO/A",data.name)
						localStorage.setItem('token',data.access_token)
						localStorage.setItem('name', data.name)
						localStorage.setItem('email', data.email)

					}else{
						alert("algo salió mal al loguearte")
					}
				}catch(e){
					console.error(e)
				}
			},
			getList: async () => {
				let token = localStorage.getItem('token')
				if(!token){
					alert("Primero logueate para tener token")
					return
				}
				try{
					let response = await fetch("https://zany-succotash-679wjxj7vv6fr9v6-3001.app.github.dev/api/users",{
						headers:{
							Authorization:`Bearer ${token}`
						}
					})
					let data = await response.json()
					if(data.lista_usuarios){
						setStore({...getStore(), userList: data.lista_usuarios})
					}
				}catch(e){
					console.error(e)
				}
			},
			getMessage: async () => {
				try{
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello")
					const data = await resp.json()
					setStore({ message: data.message })
					// don't forget to return something, that is how the async resolves
					return data;
				}catch(error){
					console.log("Error loading message from backend", error)
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
