// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

console.log('ok', Vue);

Vue.config.devtools = true;

var app = new Vue({
    el: '#root',
    data: {
        message: 'Hello World',
        image: {
            src: 'https://picsphotos/id/237/200/300',
            alt: 'Lorem Picsum Image'
        }
    }
});

