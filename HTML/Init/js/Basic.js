class Basic{

	constructor(){

		this._paragrafoEl = document.querySelector(".paragrafo");
		this.init();
	}

	init(){
		//console.log(this._paragrafo);
		this.addEventListenerAll(this._paragrafoEl, 'mouseover mouseup mousedown', e=> {
               this._paragrafoEl.style.cursor = 'pointer';//muda o estilo do cursor quando passa sobre o botão para poder indicar que podemos clicar;
        });

        this.paragrafo("GS4L");
        
	}

	alertaz(mensagem){//chama a função alert para mostrar a mensagemna tela

		alert(mensagem);

	}

	paragrafo(valor){//escreve a mensagem passada como parâmetro no parágrafo dentro do first.html; 

		this._paragrafoEl.innerHTML =valor;

	}

	changeValue(){

		document.querySelector("#result").innerHTML = document.querySelector("#value").value;
		console.log(document.querySelector("#result"));
		console.log(document.querySelector("#value"))

	}

	addEventListenerAll(element, events, func) {//Como o addEventListener do js só adiciona um evento por vez em um elemento é preciso criar uma função para melhorar essa questão.

		events.split(" ").forEach(event => {//Passamos para a função o elemento onde vão ser adicionados os eventos, os eventos e a função que vai determinar o comportamento do objeto quando o evento for disparado  
			//Cada um dos eventos passados na string de eventos é adicionado ao elemento;
			element.addEventListener(event, func, false);
			
		});

	}

}