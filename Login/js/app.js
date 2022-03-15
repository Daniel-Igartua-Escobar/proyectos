const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');

formulario.addEventListener('submit', async(e) => {
	e.preventDefault();

// Escribir Filas
	try {
		const respuesta = await fetch('https://sheet.best/api/sheets/8c527a19-04ac-4fb0-8720-7fcc607f6dee', {
			method: 'POST',
			mode: 'cors',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				"Nombre": formulario.nombre.value,
				"Correo": formulario.correo.value,
				"Telefono": formulario.telefono.value
			})
		});

		const contenido = await respuesta.json();
		console.log(contenido);
	} catch(error){
		console.log(error);
	}

// Leer Filas
	// try {
	// 	const respuesta = await fetch('https://sheet.best/api/sheets/8c527a19-04ac-4fb0-8720-7fcc607f6dee');

	// 	const contenido = await respuesta.json();
	// 	console.log(contenido);
	// } catch(error){
	// 	console.log(error);
	// }


// Eliminar Filas
	// try {
	// 	const respuesta = await fetch('https://sheet.best/api/sheets/8c527a19-04ac-4fb0-8720-7fcc607f6dee/0', {
	// 		method: 'DELETE'
	// 	});

	// 	const contenido = await respuesta.json();
	// 	console.log(contenido);
	// } catch(error){
	// 	console.log(error);
	// }


// Actualizar Filas
	// try {
	// 	const respuesta = await fetch('https://sheet.best/api/sheets/8c527a19-04ac-4fb0-8720-7fcc607f6dee', {
	// 		method: 'PATCH',
	// 		mode: 'cors',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			"Telefono": "000 000 000"
	// 		})
	// 	});

	// 	const contenido = await respuesta.json();
	// 	console.log(contenido);
	// } catch(error){
	// 	console.log(error);
	// }


	// registro.classList.remove('activo');
	// exito.classList.add('activo');
});