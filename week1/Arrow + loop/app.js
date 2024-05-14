let marvels = ["Avengers: Infinity War", "Black Panther", "Guardians of the Galaxy", "Iron Man"]

const addMarvel = () => {
    marvels.push("Thor: Ragnarok")
}

addMarvel();

for (const film of marvels) {
    console.log(film);
}

