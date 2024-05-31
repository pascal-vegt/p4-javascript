let output = document.querySelector('.output')


fetch(`https://restcountries.com/v3.1/all`)
  .then((response) => response.json())
  .then((countries) => {
    console.log(countries);
    for (const country of countries) {
      output.innerHTML += `
      <section class="country-container">
      <img class="country-image" src="${country.flags.svg}" alt="">
      <h3 class="country-text">${country.name.official}</h3>
      </section>
      `
    }
    })