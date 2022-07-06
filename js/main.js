//DATI//
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
);






