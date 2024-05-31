let output = document.querySelector(".output");
let button = document.querySelector(".button");

const person = {
  name: "Luna Patel",
  age: 29,
  dateOfBirth: "July 12, 1994",
  gender: "vrouw",
  pronouns: "",
  direct: "",
  alive: true,
  aliveText: "",
  hobbies:
    "painting landscapes, playing the piano, hiking in the mountains, reading mystery novels",
  addHobby: function (hobby) {},
  aliveChange: function () {
    this.alive = !this.alive;
    return this.alive;
    if (this.alive == true) {
      this.aliveText = "levend";
    } else if (this.alive == false) {
      this.aliveText = "overleden";
    } else {
      this.aliveText = "onbekend";
    }
    console.log(this.alive);
  },
  changeName: function (name) {},
};

if (person.alive == true) {
  person.aliveText = "levend";
} else if (person.alive == false) {
  person.aliveText = "overleden";
} else {
  person.aliveText = "onbekend";
}

if (person.gender === "vrouw" || person.gender === "Vrouw") {
  person.pronouns = "Haar";
  person.direct = "zij";
} else if (person.gender === "man" || person.gender === "Man") {
  person.pronouns = "Zijn";
  person.direct = "hij";
} else {
  person.pronouns = "Hun";
  person.direct = "hen";
}

output.innerHTML = `<p> ${person.pronouns} naam is ${person.name}, ${person.direct} is een ${person.age}e oude ${person.gender}, ${person.direct} is geboren op ${person.dateOfBirth} en houdt van ${person.hobbies}.
  (${person.direct} is op dit moment ${person.aliveText})</p>`;

