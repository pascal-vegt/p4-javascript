let output = document.querySelector(".output");

fetch(`https://dragonball-api.com/api/characters?limit=59`)
  .then((response) => response.json())
  .then((characters) => {
    console.log(characters.items);
    for (const character of characters.items) {
      output.innerHTML +=
    ` 
        <section class="main-container">
          <article class="character-container">
              <img class="character-image" src="${character.image}" alt="">
              <div class="character-sheet">
                <h2 class="character-name">${character.name}</h2>
                <h3 class="character-race">${character.race}</h3>
                <p class="character-ki">${character.ki}</p>
                <p class="character-maxki">${character.maxKi}</p>
                <p class="character-gender">${character.gender}</p>
                <p class="character-affiliation">${character.affiliation}</p>
              </div>
          </article>
        </section>
    `
    ;
    }
  });
