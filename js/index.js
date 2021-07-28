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
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
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