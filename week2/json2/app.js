let output = document.querySelector(".output");
let showObject = "";

fetch("./cars.json")
  .then((response) => response.json())
  .then((cars) => {
    console.log(cars);
    for (let car of cars) {
      console.log(car.model);
      showObject += `
    <section>
        <h2>${car.brand}</h2>
        <h3>${car.model}</h3>
    </section>
    `;
    }
    output.innerHTML = showObject
  });
