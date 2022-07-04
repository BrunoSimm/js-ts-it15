const app = Vue.createApp({
    data() {
        return {
            title: 'The Final Empire',
            author: 'Brandon',
            age: 45,
            showBooks: true,
            books: [
                {
                    title: 'The Final Empire',
                    author: 'Brandon',
                    age: 45,
                    img_url: "https://ayine.com.br/wp-content/uploads/2022/03/Miolo-diagonal-O-livro-dos-amigos-site.png",
                    isFav: true
                },
                {
                    title: 'The Way of Kings',
                    author: 'Brandon',
                    age: 45,
                    img_url: "https://ayine.com.br/wp-content/uploads/2022/03/Miolo-diagonal-O-livro-dos-amigos-site.png",
                    isFav: true
                },
                {
                    title: 'Name of the Wind',
                    author: 'Patrick',
                    age: 32,
                    img_url: "https://ayine.com.br/wp-content/uploads/2022/03/Miolo-diagonal-O-livro-dos-amigos-site.png",
                    isFav: false
                },
            ],
            X: 0,
            Y: 0,
            url: "http://www.google.com"
        }
    },
    methods: {
        changeTitle(title) {
            this.title = title
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(event, arg) {
            console.log(event)
            console.log(arg)
        },
        handleMouseMove(event) {
            this.X = event.offsetX;
            this.Y = event.offsetY;
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.isFav)
        }
    }
})

app.mount('#app');