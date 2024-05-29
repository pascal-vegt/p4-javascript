let output = document.querySelector('.cars')
let out ='';

fetch('./cars.json')
.then(response => response.json())
.then((cars) => {
    for (let car of cars) {
        out += `
        <h2>${car.name}</h2>
        <p>${car.model}</p>
        <p>${car.weight}</p>
        <p>${car.color}</p>
        `
    }
    output.innerHTML = out;
});


