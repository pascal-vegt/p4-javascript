const moviesContainer = document.querySelector("#movies-container");
const movieForm = document.querySelector("#movie-form");
let allMovies = [];

const movieURL = `http://localhost:3000/movies`;

fetch(`${movieURL}`)
  .then((response) => response.json())
  .then((movies) => {
    let out = "";
    for (let movie of movies) {
      allMovies = movies;
      out += `
<div id="single-movie">
<img src="./img/${movie.img}" width="500" height="400"/>
<h3> ${movie.title}</h3>
<p>Year: ${movie.year}</p>
<p> ${movie.rating}</p>
<button data-id="${movie.id}" id="edit-${movie.id}" data-action="edit">Edit</button>
<button data-id="${movie.id}" id="delete-${movie.id}" data-action="delete">Delete</button>
</div>
`;
    }
    moviesContainer.innerHTML = out;
  });

movieForm.addEventListener("submit", () => {
  const titleInput = movieForm.querySelector("#title").value;
  const yearInput = movieForm.querySelector("#year").value;
  const imageInput = movieForm.querySelector("#coverImage").value;
  const ratingInput = movieForm.querySelector("#rating").value;

  fetch(`${movieURL}`, {
    method: "POST",
    body: JSON.stringify({
      title: titleInput,
      year: yearInput,
      img: imageInput,
      rating: ratingInput,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
});

moviesContainer.addEventListener('click', (e) => {
  // e.preventDefault() zorgt ervoor dat de browser niet refresht
  // nadat je op een knop hebt geklikt
  e.preventDefault();
  const editButton = document.querySelector(`#edit-${e.target.dataset.id}`);
  editButton.disabled = true;

  if (e.target.dataset.action === 'edit') {
    const movieData = allMovies.find((movie) => {
      return movie.id == e.target.dataset.id;
    })
    // hier maak je het formulier aan met als placeholder
    // de gegevens van de film
    e.target.parentElement.innerHTML += `
      <div id="edit-movie">
        <form id="movie-form-edit">
          <input required id="edit-title" value="${movieData.title}">
          <input required id="edit-year" value="${movieData.year}">
          <input required id="edit-coverImage" value="${movieData.img}">
          <input required id="edit-rating" value="${movieData.rating}">
          <input type="submit" id="edit" value="Edit Movie">
        </form>
      </div>
    `;

    document.querySelector('#edit').addEventListener('click', (e) => {
      // gebruik altijd preventDefault(), zodat de browser niet refresht
      e.preventDefault();

      // Sla alle waarden van je input op in variabelen
      const titleInput = document.querySelector('#edit-title').value;
      const yearInput = document.querySelector('#edit-year').value;
      const imageInput = document.querySelector('#edit-coverImage').value;
      const ratingInput = document.querySelector('#edit-rating').value;

      // fetch de data naar je server/json-bestand met de method 'PATCH'
      fetch(`${movieURL}/${movieData.id}`, {
        method: 'PATCH',
        body: JSON.stringify({
          title: titleInput,
          year: yearInput,
          img: imageInput,
          rating: ratingInput,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
    });

  } else if (e.target.dataset.action === 'delete') {
    document.querySelector(`#delete-${e.target.dataset.id}`).remove();
    fetch(`${movieURL}/${e.target.dataset.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }
});

