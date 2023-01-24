



let datos;

const fetchData = fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=> response.json())
    .then((data)=>datos = data)
    .catch((error) => console.log(`Error al obtener los datos: ${error}`))


    async function modifyData() {
        await fetchData; // espera a que los datos se obtengan antes de modificarlos
        console.log (datos);
        //data.name = "Nuevo nombre";
        //data.age = 25;
      }

modifyData();