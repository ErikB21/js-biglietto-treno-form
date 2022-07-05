

const generaBigliettoDom = document.getElementById('generaBiglietto')
generaBigliettoDom.addEventListener('click', 
    function(){
        const numeroDom = document.getElementById('numero');
        const numeroEtaDom = document.getElementById('numeroEta');
        const prezzoKilometro = 0.21;
        const prezzoTotale = numeroDom.value * prezzoKilometro;

        const scontoRagazzi = (prezzoTotale * 0.8);
        const scontoAnziani = (prezzoTotale * 0.6);

        let n = scontoRagazzi.toFixed(2);
        let nu = scontoAnziani.toFixed(2);
        let num = prezzoTotale.toFixed(2);



        if (numeroDom.value >= 1){
            if (numeroEtaDom.value < 18){
                scontoRagazzi;
                console.log(scontoRagazzi);
                document.getElementById('totTravel').innerHTML = 'Il prezzo totale è ' + '' + n + '€';
            } else if (numeroEtaDom.value >= 65){
                scontoAnziani;
                console.log(scontoRagazzi);
                document.getElementById('totTravel').innerHTML = 'Il prezzo totale è ' + '' + nu + '€';
            } else{
                prezzoTotale;
                console.log(prezzoTotale);
                document.getElementById('totTravel').innerHTML = 'Il prezzo totale è ' + '' + num + '€';
            }
        } else{
            console.log(numeroDom.value);
        }
    }
    
);

const eliminaBigliettoDom = document.getElementById("eliminaBiglietto");
eliminaBigliettoDom.addEventListener('click', 
    function(){
        const numeroDom = document.getElementById('numero');
        const numeroEtaDom = document.getElementById('numeroEta');
        numeroDom.value = '';
        numeroEtaDom.value = '';
        document.getElementById('totTravel').innerHTML = '';
    }
);



