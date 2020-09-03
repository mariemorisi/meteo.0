let ville = "marseille";
recevoirTemp(ville);

let bouton = document.querySelector('#changer');
bouton.addEventListener('click', () => {
ville = prompt("Choisissez une ville");
recevoirTemp(ville);
});

function recevoirTemp(ville) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + ville + "&appid=00000000&units=metric";
    let requete = new XMLHttpRequest();
    requete.open("GET", url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200){
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville       = reponse.name;
                document.querySelector('#temperature_label').textContent = temperature;
                document.querySelector('#ville').textContent = ville;
            } 
            else {
            alert('Un problème est survenu');
            }
        }
    }
}


