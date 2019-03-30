class MyDate {

    constructor() {

    
        this._locale = 'pt-BR';
        this._dateEl = document.querySelector('#date');
        this._dateFormatedEl = document.querySelector('#dateFormatted');

        this.init();


    }

    get mydate() {

        return new Date();//tem que ser assim para toda vez que atualizar a tela o objeto retornar um tempo diferente pra função

    }

   

    get locale() {

        return this._locale;

    }

    get dateEl() {

        return this._dateEl;

    }

    set dateEl(value){

        this._dateEl.textContent = value;

    }

    get dateFormattedEl() {

        return this._dateFormatedEl;

    }

   

    setDisplay() {

        this.dateEl = this.mydate;  

        this.dateFormattedEl.textContent = this.mydate.toLocaleDateString(this.locale, {

            day: '2-digit',
            month: 'numeric',
            year: 'numeric'

        }) + ' ' + this.mydate.toLocaleTimeString(this.locale);

    }

    init() {


        this.setDisplay();

        setInterval(()=>{
            this.setDisplay();

        },1000);





    }





}