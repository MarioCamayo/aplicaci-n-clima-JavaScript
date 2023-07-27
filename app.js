//clave API , url y variable de conversion
let apiKey = "70cd17f2ef48bc48e3518e1c9bf854c5";
let urlBase = "https://api.openweathermap.org/data/2.5/weather";
let difKelvin = 273.15;
 

// se selecciona el boton para agregarle un evento
document.getElementById("botonBusqueda").addEventListener("click", ()=>{
    const ciudad = document.getElementById("ciudadEntrada").value
    if(ciudad){
        fetchDatosClima(ciudad)
    }
    
});
 
// se crea la funcion que hace una llamada a la API 
function fetchDatosClima(ciudad){
    fetch(`${urlBase}?q=${ciudad}&appid=${apiKey}`) 
         .then(data => data.json())
         .then(data => mostrarDatosClima(data))
         
};

// la funcion selecciona el div para agregar elementos con informacion
function mostrarDatosClima(data){
    const divDatosClima = document.getElementById("datosClima")
    divDatosClima.innerHTML = ""

    const ciudadNombre = data.name
    const paisNombre = data.sys.country
    const temperatura = data.main.temp
    const humedad = data.main.humidity
    const description = data.weather[0].description
    const icono =  data.weather[0].icon

    const ciudadTitulo = document.createElement("h2")
    ciudadTitulo.textContent = `${ciudadNombre}, ${paisNombre}`

    const temperaturaInfo = document.createElement("p")
    temperaturaInfo.textContent = `La temperatura es: ${Math.floor(temperatura-difKelvin)}°C`

    const humedadInfo = document.createElement("p")
    humedadInfo.textContent = `La humedad es: ${humedad}%`

    const iconoInfo = document.createElement("img")
    iconoInfo.src=`https://openweathermap.org/img/wn/${icono}@2x.png`


    const descripcionInfo = document.createElement("p")
    descripcionInfo.textContent = `La descripcion metereologica es: ${description}`

    divDatosClima.appendChild(ciudadTitulo)
    divDatosClima.appendChild(temperaturaInfo)
    divDatosClima.appendChild(humedadInfo)
    divDatosClima.appendChild(iconoInfo)
    divDatosClima.appendChild(descripcionInfo)
    
    

};