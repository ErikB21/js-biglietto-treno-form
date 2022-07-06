/*//DATI//
const nomeCognomeDom = document.getElementById('name');
console.log(nomeCognomeDom);

const numeroDom = document.getElementById('numero');
console.log(numeroDom);

const numeroEtaDom = document.getElementById('numeroEta');
console.log(numeroEtaDom);

let numeroCarrozzaDom = document.getElementById('numeroCarrozza');
numeroCarrozzaDom = Math.round(Math.random() * 110000);
console.log(numeroCarrozzaDom);

let numeroCodiceDom = document.getElementById('numeroCodice');
numeroCodiceDom = Math.round(Math.random() * 10 + 1);
console.log(numeroEtaDom);

const prezzoKilometro = 0.21;
const prezzoTotale = numeroDom.value * prezzoKilometro;

const scontoRagazzi = (prezzoTotale * 0.8);
const scontoAnziani = (prezzoTotale * 0.6);

let n = scontoRagazzi.toFixed(2);
let nu = scontoAnziani.toFixed(2);
let num = prezzoTotale.toFixed(2);

////////////////////////////////////////////////

const generaBigliettoDom = document.getElementById('generaBiglietto')
generaBigliettoDom.addEventListener('click', 
    function(){
        if (numeroDom.value >= 1){
            if (numeroEtaDom.value < 18){
                scontoRagazzi;
                console.log(scontoRagazzi);
            } else if (numeroEtaDom.value >= 65){
                scontoAnziani;
                console.log(scontoRagazzi);
            } else{
                prezzoTotale;
                console.log(prezzoTotale);
            }
        } else{
            console.log(numeroDom.value);
        }
    }
    
);

const eliminaBigliettoDom = document.getElementById("eliminaBiglietto");
eliminaBigliettoDom.addEventListener('click', 
    function(){
        const nomeCognomeDom = document.getElementById('name');
        const numeroDom = document.getElementById('numero');
        const numeroEtaDom = document.getElementById('numeroEta');
        nomeCognomeDom.value = '';
        numeroDom.value = '';
        numeroEtaDom.value = '';
        document.getElementById('totTravel').innerHTML = '';
    }
);





document.getElementById('generaBiglietto').addEventListener('click', 
    function () {
        document.querySelector('.pass_viaggio').classList.add('show');
        const numeroCarrozzaDom = document.getElementById('numeroCarrozza');
        const numeroCodiceDom = document.getElementById('numeroCodice');
        if(numeroDom.value >= 1){
            if(numeroEtaDom.value < 18){
                scontoRagazzi;
                document.getElementById('nomeBiglietto').innerHTML = nomeCognomeDom.value;
                document.getElementById('nomeOfferta').innerHTML = 'Sconto Ragazzi';
                document.getElementById('numeroCarrozza').innerHTML = numeroCarrozzaDom;
                document.getElementById('numeroCodice').innerHTML = numeroCodiceDom;
                document.getElementById('nomeCosto').innerHTML = n + '€'; 
            } else if(numeroEtaDom.value >= 65){
                scontoAnziani;
                document.getElementById('nomeBiglietto').innerHTML = nomeCognomeDom.value;
                document.getElementById('nomeOfferta').innerHTML = 'Sconto Over 65';
                document.getElementById('numeroCarrozza').innerHTML = numeroCarrozzaDom;
                document.getElementById('numeroCodice').innerHTML = numeroCodiceDom;
                document.getElementById('nomeCosto').innerHTML = nu + '€';
            }else{
                prezzoTotale;
                document.getElementById('nomeBiglietto').innerHTML = nomeCognomeDom.value;
                document.getElementById('nomeOfferta').innerHTML = 'Prezzo Ordinario';
                document.getElementById('numeroCarrozza').innerHTML = numeroCarrozzaDom;
                document.getElementById('numeroCodice').innerHTML = numeroCodiceDom;
                document.getElementById('nomeCosto').innerHTML = num + '€';
            }
        }else{
            console.log(numeroDom.value);
        }
        
    }
);

document.getElementById('eliminaBiglietto').addEventListener('click', 
    function () {
        document.querySelector('.pass_viaggio').classList.remove('show');
    }
);*/

const genera = document.getElementById('generaBiglietto');

genera.addEventListener('click', 
    function (){

        const priceKm = 0.21;
        console.log(priceKm);

        const fullname = document.getElementById('name').value;
        console.log(fullname);
       
        const km = parseInt(document.getElementById('numerokm').value );
        console.log(km);

        const age = document.getElementById('age').value;
        console.log(age)


        let ticketPrice = km * priceKm;
        let promo = "Biglietto Standard";


        if(age == 'junior'){
            ticketPrice -= (ticketPrice / 100 * 20);
            promo = "Sconto Minorenne"
        } else if (age == 'senior'){
            ticketPrice -= (ticketPrice / 100 * 40);
            promo = "Sconto Over 65";
        }

        const carriageNumber = Math.floor(Math.random() * 10) + 1;
        const prenotationNumber = Math.floor(Math.random() * (100000 - 90000)) + 90000;

        //IMPOSTO IL NOME DEL PASSEGGERO
        document.getElementById('nomeBiglietto').innerHTML = fullname;
        document.getElementById('nomeOfferta').innerHTML = promo;
        document.getElementById('numeroCosto').innerHTML = ticketPrice.toFixed(2) + '€';
        document.getElementById('numeroCarrozza').innerHTML = carriageNumber;
        document.getElementById('numeroCodice').innerHTML = prenotationNumber;
        document.getElementById('ticket').className = 'show';
        
    }
);


document.getElementById('cancellaBiglietto').addEventListener('click', 
    function(){
        document.getElementById('nomeBiglietto').innerHTML = '';
        document.getElementById('nomeOfferta').innerHTML = '';
        document.getElementById('numeroCosto').innerHTML = '';
        document.getElementById('numeroCarrozza').innerHTML = '';
        document.getElementById('numeroCodice').innerHTML = '';

        document.getElementById('name').value ='';
        document.getElementById('numerokm').value ='';
        document.getElementById('age').value ='junior';

        document.getElementById('ticket').className = 'pass_viaggio';
    }
);






