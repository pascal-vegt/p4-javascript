let output = document.querySelector('.output');

fetch('./persons.json')
    .then(response => response.json())
    .then((people) => {
        output.innerHTML += `<h1>${people.length} Birthdays today</h1>`;
        for (let person of people) {
            output.innerHTML +=
                `
            <div class="birthday-entry">
                <img src="${person.img}" alt="">
                <div class="details">
                    <p class="name">${person.name}</p>
                    <p class="age">${person.age} Years old</p>
                </div>
            </div>
            `;
        }
        output.innerHTML += `<button class="clear-btn">Clear All</button>`;

        const clearBtn = document.querySelector('.clear-btn');
        clearBtn.addEventListener('click', () => {
            output.innerHTML = `
            <h1>0 Birthdays today</h1>
            <button class="clear-btn">Clear All</button>
            `;
        });
    });