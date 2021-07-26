class Display {
	constructor(displayValorAnterior, displayValorActual){
		this.displayValorAnterior = displayValorAnterior;
		this.displayValorActual = displayValorActual;
		this.calculadora = new Calculadora();
		this.tipoOperacion = "";
		this.valorActual = "";
		this.valorAnterior = "";
	}

	borrar(){
		this.valorActual = this.valorActual.slice(0,-1);
		this.imprimirValores();
	}

	borrarTodo(){
		this.valorActual = "";
		this.valorAnterior = "";
		this.tipoOperacion = undefined;
		this.imprimirValores();
	}

	// computare(tipo){
	// 	console.log("hola")
	// 	// this.tipoOperacion !== 'igual' && this.calcular();
	// 	// this.tipoOperacion = tipo;
	// 	// this.valorAnterior = this.valorActual || this.valorAnterior;
	// 	// this.valorActual = "";
	// 	// this.imprimirValores();
	// }

	agregarNumero(numero){
		if(numero === '.' && this.valorActual.includes('.')) return
		this.valorActual = this.valorActual + numero;
		this.imprimirValores();
	}

	imprimirValores(){
		this.displayValorActual.textContent = this.valorActual;
		this.displayValorAnterior.textContent = this.valorAnterior;
	}

	calcular(){
		const valorAnterior = this.valorAnterior;
		const valorActual = this.valorActual;

		if (isNaN(valorActual) || isNaN(valorAnterior)) return
		this.valorActual = this.Calculadora[this.tipoOperacion](valorAnterior, valorActual);
	}


}

Display.computare = function(tipo){

	console.log(typeof tipo)
	this.tipo !== 'igual' && this.calcular();
		// this.tipoOperacion = tipo;
		// this.valorAnterior = this.valorActual || this.valorAnterior;
		// this.valorActual = "";
		// this.imprimirValores();
}