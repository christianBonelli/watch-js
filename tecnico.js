var negozioOrologi={
    orologi:[
        {nome:"Mario", categoria: "Tudor",problema: "bracciale",immagine:"img/tudor_1.jpg" },
        {nome:"Mario", categoria: "Patek", problema: "corona", immagine:"img/patek_2.jpg"},
        {nome:"Gianni", categoria: "Rolex", problema: "corona", immagine:"img/rolex_tiffany.jpg"},
        {nome: "Gianni", categoria: "Tudor",problema: "movimento", immagine:"img/tudor.jpg"},
        {nome: "Kevin", categoria: "Rolex", problema: "movimento", immagine:"img/rolex_blu.jpg"},
        {nome: "Kevin", categoria: "Patek", problema: "corona", immagine: "img/patek_3.jpg"},
        {nome: "Bernardo", categoria: "Rolex", problema: "bracciale",immagine: "img/rolex_3.jpg"},
        {nome: "Bernardo ", categoria: "Tudor",problema: "movimento", immagine: "img/tudor_2.jpg"},
        {nome: "Giorgia", categoria: "Patek", problema: "bracciale",immagine:"img/patek_1.jpg"},
        {nome: "Giorgia", categoria: "Rolex", problema: "corona",immagine:"img/rolex_submarine.jpg"},       
       
    ],
    filtraPerCategoria: function (categoria) {
        var orologiFiltrati = this.orologi.filter(function (prodotto) {
            return prodotto.categoria === categoria;
        });
        this.mostraOrologi(orologiFiltrati);
    },

    filtraPerProblema: function (problema) {
        var orologiFiltrati = this.orologi.filter(function (prodotto) {
            return prodotto.problema === problema;
        });
        this.mostraOrologi(orologiFiltrati);
    },

    mostraOrologi: function (orologiFiltrati) {
        var elencoOrologi = document.getElementById("contenitore");
        elencoOrologi.innerHTML = "";
          //creazione card
        orologiFiltrati.forEach(function (prodotto,index) {
            var card = document.createElement("div");
            card.classList.add("col-lg-4");
            
            var cardContent = '<div class="card">' + '<img src="' + prodotto.immagine + '" class="card-img-top" alt="...." >' +
                        '<div class="card-body" style="text-align:center; ">' +
                            '<h5 style=" font-size:30px;" class="card-title">'+ prodotto.nome +'<h5>' + '<p class="card-text" style=" font-size:20px;"> Watch: ' + prodotto.categoria + '<p>'+
                                '<p class="card-text" style=" font-size:20px;"> Problem: ' + prodotto.problema + '<p>'+
                                    '<button onclick="rimuoviLavoro(' + index + ')" class="rimuovi">Delete</button>'+
                                    '<button onclick="consegnaLavoro(' + index + ')" class="btn">done</button>' +
                                    '<div><div>';

                                    card.innerHTML = cardContent;

            elencoOrologi.appendChild(card);
            
        });
    }
};

negozioOrologi.mostraOrologi(negozioOrologi.orologi);

function filtraPerCategoria(categoria) {
    negozioOrologi.filtraPerCategoria(categoria);
}

// Funzione per filtrare per problema
function filtraPerProblema(problema) {
    negozioOrologi.filtraPerProblema(problema);
}
//funzione per rimuovere
function rimuoviLavoro(index) {
    if (index >= 0 && index < negozioOrologi.orologi.length) {
        var cardRimossa = negozioOrologi.orologi[index];
    negozioOrologi.orologi.splice(index, 1);
    negozioOrologi.mostraOrologi(negozioOrologi.orologi);
    alert("Hai rimosso: " + "Nome: " + cardRimossa.nome + "; " + "Categoria: " + cardRimossa.categoria + "; " + "Problema: "+cardRimossa.problema);
}else{
    alert("Indice non valido")
}
}


/*pop up per la notifica*/
function consegnaLavoro(index) {
    var testoDaPassare = document.getElementById("nome");
    alert("Notifica inviata a utente1.");
}

// Funzione per cambiare la lingua
function changeLanguage(lang) {
    const translations = {
 'it': {
            'bracciali': 'bracciale',
            'corone': 'corona',
            'movimenti': 'movimento',
            'rimuoviLavoro': 'Rimuovi Lavoro',
            'notificaConsegna': 'Notifica consegna',
            'watch':'orologi',
            'info': 'dati clienti',
            'my-data-link1':'esci',

        },
        'en': {
            'bracciali': 'bracelet',
            'corone': 'crown',
            'movimenti': 'movement',
            'rimuoviLavoro': 'Remove Job',
            'notificaConsegna': 'Notify Delivery', 
            'watch':'watch',
            'info': 'info clients',
            'my-data-link1':'log out'

         
          
        }
    };

    Object.keys(translations[lang]).forEach(function (key) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[lang][key];
        }
    });
}
