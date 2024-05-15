let text = document.querySelector(".output")

const car = {
    color: "red",
    brand: "Audi",
    model: "Q2",
    year: 2024,
    drive: function() {
        return "driving";
    },
    brake: function() {
        return "braking";
    }
}

text.innerHTML = `
<h1>De naam van de auto is: ${car.brand}</h1>
<p>Het model is een ${car.model} ${car.year}</p>
`
