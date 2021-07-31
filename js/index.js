let valueColor = document.getElementById("value-color")
let valueBtn = document.getElementById("value-btn")
let boxColor = document.getElementById("box-color")
let valueHexa = document.getElementById("value-hexa")


valueBtn.addEventListener("click", function(){
	let condicion = /^#\b/
	if (condicion.test(valueColor.value)) {
		boxColor.style.display = "block"
		boxColor.style.background = valueColor.value
		valueHexa.innerHTML = valueColor.value
	} else {
		boxColor.style.display = "none"
		valueHexa.innerHTML = "error"
	}
	
})

//section 2
let i = 0;
let images = ["./img/img1.jpg", 
			  "./img/img2.jpg", 
			  "./img/img3.jpg", 
			  "./img/img4.jpg",
			  "./img/img5.jpg"]
let time = 3000;
let sliderEl = document.getElementById("slider-el")

function changeImg(img){
	//document.slide.src = img[i];
	if (i < img.length) {
		sliderEl.innerHTML = `<img src="${img[i]}">`
		i++;
	} else {
		i = 0;
	}

	setTimeout("changeImg(images)", time)
}

changeImg(images)

//-----------project 3: calculator-------

const displayValorAnterior = document.getElementById("valor-anterior")
const displayValorActual = document.getElementById("valor-actual")
const botonesNumeros = document.querySelectorAll(".numero")
const botonesOperadores = document.querySelectorAll(".operador")


//let calculadora = new Calculadora();

const display = new Display(displayValorAnterior, displayValorActual)

botonesNumeros.forEach(boton => {
	boton.addEventListener("click", () =>{
		display.agregarNumero(boton.innerHTML)
	})
})

botonesOperadores.forEach(boton => {
	boton.addEventListener("click", () => {
		let tipo = boton.value;
		display.computare(tipo);
	})
})


// PROJECT 4: COUNTDOWN
//set the date we are counting down to 
var countDownDate = new Date("Jan 6, 2022 15:37:25").getTime();
// Update the count down every 1 second
var contador = setInterval(function(){
	//get todays date and time 
	var now = new Date().getTime();
	//find the distance between now and the count down date
	var distance = countDownDate - now
	//time calculations for days, hours, minutes an seconds
	var days = Math.floor(distance /(1000 * 60 * 60 * 24));
	var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000*60*60));
	var minutes = Math.floor((distance % (1000*60*60))/(1000*60))
	var seconds = Math.floor((distance % (1000*60))/1000)
	//display the result in the element with id="demo"
	document.getElementById("demo").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`
	//if the count down is finished, write some text
	if (distance <0) {
		clearInterval(contador);
		document.getElementById("demo").innerHTML = "expired"
	}
}, 1000)


//project 5: login form
let correct = document.getElementById("correct");
class Usuario {
	constructor(name,clave){
		this.name = name
		this.clave = clave
	}
}
// const usuario = /^([a-z])/i
// const clave = //
let usuario1 = new Usuario();
usuario1.name = "ediliani"
usuario1.clave = "123"

function login(form){
	if (form.user.value && form.passw.value) {
		if (form.user.value === usuario1.name && form.passw.value === usuario1.clave) {
			correct.innerHTML = `<p>Usuario correcto</p>`;
		} else {
			correct.innerHTML = `<p>Usuario incorrecto</p>`;
		}
	} else {
		correct.innerHTML = `<p>El usuario o la contraseña no fue suministrada</p>`;
	}
}

// --------PROJECT 6: TO DO LIST -------

const input = document.querySelector("#addItem")
const addBtn = document.querySelector(".btn-add")
const ul = document.querySelector("#tareas")
const empty = document.querySelector(".empty")

addBtn.addEventListener("click", (e) => {
	e.preventDefault();
	const text = input.value;

	if (text){

		const li = document.createElement("li")
		const p = document.createElement("p")
		p.textContent = text;

		li.appendChild(p);
		li.appendChild(addDeleteBtn())
		ul.appendChild(li);

		input.value = "";
		empty.style.display = "none"
	} else {
		// empty.innerHTML += `<p>No redactó ninguna tarea</p>`
	}
	
})

function addDeleteBtn(){
	const deleteBtn = document.createElement("button")

	deleteBtn.textContent = "x";
	deleteBtn.className = "btn-delete"

	deleteBtn.addEventListener("click", (e) => {
		const item = e.target.parentElement
		ul.removeChild(item)

		const items = document.querySelectorAll("li")
		if (items.length === 0) {
			empty.style.display = "block"
		}
	})

	return deleteBtn
}