let output = document.querySelector(".output")

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: 1925,
    sold: this.soldroundup,
    copiessold: 25000000,
    price: 9.99,
    soldroundup: function (){
        if (this.copiessold > 999 && this.copiessold < 999999) {
            this.sold = `${this.copiessold / 1000}K`;
        }
        if (this.copiessold > 999999 && this.copiessold < 999999999) {
            this.sold = `${this.copiessold / 1000000}M`;
        }
        if (this.copiessold > 999999999 && this.copiessold < 999999999999) {
            this.sold = `${this.copiessold / 1000000000}B`;
        }
    }
};

const roundup = () => {
    book.soldroundup();
}

roundup();

output.innerHTML = `
<h1>${book.title}</h1>
<p>The author of ${book.title} is ${book.author}.</p>
<p>It was published in ${book.published} and since 2024 has sold around ${book.sold} copies</p>
<p>The current price of ${book.title} by ${book.author} is €${book.price},-</p>
`