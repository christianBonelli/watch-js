var contatori=[];
//tasto aggiungi
function aggiungi(){
    var orologioUtente = document.getElementById("orologio").value;
    var problemiOrologio = document.getElementById("problemi").value;
    var dataUtente = document.getElementById("data").value;
    if(orologioUtente ==="" || problemiOrologio ==="" || dataUtente ===""){
      alert("devi compilare tutti i campi !");
      return false;
    }

    var riga = document.createElement("tr");
     // Aggiunta della colonna contatore
     var contatore = contatori[orologioUtente] || 1;
        contatori[orologioUtente] = contatore + 1;

        var colonnaContatore = document.createElement("td");
        colonnaContatore.innerText = contatore;
        riga.appendChild(colonnaContatore);

    var colonnaUtente = document.createElement("td");
    var colonnaOrologio = document.createElement("td");
    var colonnaData = document.createElement("td");


    colonnaUtente.innerText = orologioUtente;
    colonnaOrologio.innerText = problemiOrologio;
    colonnaData.innerText = dataUtente;

    riga.appendChild(colonnaUtente);
    riga.appendChild(colonnaOrologio);
    riga.appendChild(colonnaData);


    var tabella = document.getElementById("tabella");
    tabella.appendChild(riga);


    document.getElementById("orologio").value= "";
    document.getElementById("problemi").value="";
    document.getElementById("data").value="";

}

function cancella(){
    contatori.pop();
    document.getElementById("tabella").innerText=contatori;

}


function passaTesto() {
// Testo da passare
const testoDaPassare = "Questo è il testo da passare.";
// Codifica il testo per l'URL
const testoCodificato = encodeURIComponent(testoDaPassare);
// Crea l'URL con il parametro "testo" e passa il testo codificato
const urlDestinazione = "pagina2.html?testo=" + testoCodificato;
// Reindirizza alla pagina di destinazione
window.location.href = urlDestinazione;
}





// Funzione per cambiare la lingua
function changeLanguage(lang) {
    // Definisci le traduzioni per le lingue supportate
    const translations = {
        'it': {
            'label-nome': 'Nome Cliente',
            'label-orologio': 'Orologio',
            'label-problemi': 'Problemi',
            'label-data': 'Data',
            'label-stato': 'Stato riparazioni',
            'label-nome-input': 'Inserisci il nome',
            'label-orologio-input': 'Che tipo di orologio',
            'label-problemi-input': 'Problemi orologio',
            'label-data-input': 'Data',
            'button-add': 'Aggiungi appuntamento',
            'home-link': 'Home',
            'watches-link': 'I miei orologi',
            'assistance-link': 'Assistenza',
            'my-data-link': 'I miei dati',
        
        },
        'en': {
            'label-nome': 'Client Name',
            'label-orologio': 'Watch',
            'label-problemi': 'Issues',
            'label-data': 'Date',
            'label-stato': 'Repair Status',
            'label-nome-input': 'Enter your name',
            'label-orologio-input': 'Watch type',
            'label-problemi-input': 'Watch issues',
            'label-data-input': 'Date',
            'button-add': 'Add Appointment',
            'home-link': 'Home',
            'watches-link': 'My Watches',
            'assistance-link': 'Assistance',
           'my-data-link': 'My Data'
        
        }
    };

    // Cambia i testi dei label in base alla lingua
    Object.keys(translations[lang]).forEach(function (key) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[lang][key];
        }
    });
}



