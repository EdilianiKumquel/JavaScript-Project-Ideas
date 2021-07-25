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