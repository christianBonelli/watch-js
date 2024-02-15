function login(){

var utenteTecnico= [
    {username: "tecnico1", password: "password1"},
    {username: "tecnico2", password: "password2"}
];

    //Funzione login
    var username = document.getElementById("nome").value;
    var password = document.getElementById("password").value;
    var utente =[
        {username: "utente1", password:"password3"},
        {username: "utente2", password:"password4"}
    
    ];
    
        //verifica se le credenziali sono corrette
        var utenteCasuale= utente.find(utente => utente.username === username && utente.password === password);
       

    //verifica se le credenziali sono corrette
    var utenteTrovato= utenteTecnico.find(utenteTecnico => utenteTecnico.username === username && utenteTecnico.password === password);
    if(utenteTrovato){
        alert("Accesso Riuscito! Benvenuto: " + username);
        //reindirizzamento alla pagina dedicata
        window.location.href = "pagina_tecnico.html";
    }else if (utenteCasuale){
        alert("Accesso Riuscito! Benvenuto: " + username);
        //reindizirizzamento alla pagina dedicata
        window.location.href = "homeutente.html";
    }else{
        alert("Credenziali di accesso sbagliate");
    }
}

function passaTesto() {
    // Testo da passare
    const testoDaPassare = username;
    // Codifica il testo per l'URL
    const testoCodificato = encodeURIComponent(testoDaPassare);
    // Crea l'URL con il parametro "testo" e passa il testo codificato
    const urlDestinazione = "pagina2.html?testo=" + testoCodificato;
    // Reindirizza alla pagina di destinazione
    window.location.href = urlDestinazione;
    }
// Funzione per cambiare la lingua
function changeLanguage(lang) {
    const translations = {
        'it': {
            'access-title': 'Accesso area riservata Utenti e Tecnici',
            'username-label': 'Inserisci il nome Utente',
            'password-label': 'Inserisci la password',
            'accedi': 'invia',

        },
        'en': {
            'access-title': 'Access area for Users and Technicians',
            'username-label': 'Enter username',
            'password-label': 'Enter password',
            'accedi':'send'
          
        }
    };

    Object.keys(translations[lang]).forEach(function (key) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[lang][key];
        }
    });
}


