let output = document.querySelector('.output');

fetch('./pokemon.json')
.then(response => response.json())
.then((pokemons) => {
    console.log(pokemons)
    for (const pokemon of pokemons) {
        output.innerHTML += `
        <section class="main-container">
        <article class="pokemon-container">
            <img class="pokemon-image" src="${pokemon.img}" alt="">
            <div class="pokemon-sheet">
              <h1 class="pokemon-name">${pokemon.name}</h1>
            </div>
        </article>
      </section>
        `
    }
})