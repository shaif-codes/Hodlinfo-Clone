// script.js

// Timer functionality
let timer = document.getElementById('timer');
setInterval(() => {
    let time = parseInt(timer.textContent, 10);
    if (time === 0) {
        timer.textContent = '60';
    } else {
        timer.textContent = time - 1;
    }
}, 1000);

// Dark mode toggle
let darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    HTML.style.backgroundColor = 'white';
});


// Fetch data from server
const toptickets = document.getElementById("topticket");

        const fetchData = async () => {
            try {
                const response = await fetch("https://hodlinfo-clone-9zop.onrender.com/top10");
                let actualData = [];

                if (response.status === 404) {
                    const secondResponse = await fetch("http://localhost:4000/storeData");
                    actualData = await secondResponse.json();
                } else {
                    actualData = await response.json();
                }

                actualData.forEach((ticker, i) => {
                    const row = document.createElement("tr");
                    row.innerHTML = `
                        <td class="text-center">${i+1}</td>
                        <td class="text-center">${ticker.base_unit}</td>
                        <td class="text-center">${ticker.name}</td>
                        <td class="text-center">${ticker.last}</td>
                        <td class="text-center">${ticker.buy} / ${ticker.sell}</td>
                        <td class="text-center">${ticker.volume}</td>
                    `;
                    toptickets.appendChild(row);
                });
            } catch (err) {
                console.error("Some error occurred during fetching data from backend: ", err);
            }
        };

        fetchData();
