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
        classe: 'text-green',
        image: {
            src: 'https://picsum.photos/id/237/200/300',
            alt: 'Lorem Picsum Image',
        },
    },
    methods: {
        changeClass() {
            console.log('ciao');
            console.log(this.classe);
            if (this.classe === 'text-green') {
                this.classe = 'text-red';
                console.log(this.classe);
            } else {
                this.classe = 'text-green'
            }
        }

    }
});






