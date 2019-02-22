class Basic{

	constructor(){
		this._paragrafoEl = document.querySelector(".paragrafo");
		this.init();
	}

	init(){
		//console.log(this._paragrafo);
		this.addEventListenerAll(this._paragrafoEl, 'mouseover mouseup mousedown', func => {
               this._paragrafoEl.style.cursor = 'pointer';//muda o estilo do cursor quando passa sobre o botão para poder indicar que podemos clicar;
        })

        this.paragrafo("GS4L");
        
	}

	alertaz(mensagem){
		alert(mensagem);
	}

	paragrafo(valor){
		this._paragrafoEl.innerHTML =valor;
	}

	addEventListenerAll(element, events, func) {

		events.split(" ").forEach(event => {
			element.addEventListener(event, func, false);
		});

	}

}