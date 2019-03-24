class Essencial{

    constructor(name,age,birth,operationalArea){

        this._jsonEl = document.querySelector('#json');
        this._name = name;
        this._age = age; // Atributo -> espaço de memória onde são guardadas informações uteis ao nosso código  
        this._birth = birth;
        this._operationalArea = operationalArea;
        this._formEl = document.querySelector('#conversion');
        this.init();
    }
    
    
    get name(){//método

        return this._name;

    }

    get age(){

        return this._age;

    }

    get birth(){

        return this._birth;

    }

    get operationalArea(){

        return this._operationalArea;

    }

    set jsonEl(value){

        this._jsonEl.textContent = value;

    }

    get jsonEl(){

        return this._jsonEl;

    }

    get formEl(){

        return this._formEl;

    }

    init(){

        this.jsonEl = this.toJSONString();
        this.onSubmit();

    }

    toJSONString(){

        let json = {'_name':this.name,'_age':this.age,'birth':this.birth,'area':this.operationalArea};
        
        return JSON.stringify(json);

    }

    onSubmit(){

        Utils.addEventListenerAll(this.formEl,'submit',f=>{

            f.preventDefault();

            let celsius = document.querySelector('#celsius').value;

            let fahrenheit = document.querySelector('#fahrenheit');

            fahrenheit.value = ((celsius*1.8) + 32).toFixed(2);//controle o numero de casas decimais

        });

    }

   



   



    
}