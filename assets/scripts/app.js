let language = 'es_ES';


fetch(`http://ddragon.leagueoflegends.com/cdn/11.19.1/data/${language}/champion.json`)
    .then(response => response.json())
    .then(data => {
        let champions = data.data;
        let championsArray = Object.keys(champions).map(key => champions[key]);
        let championsList = document.querySelector('.champion-container');
        championsArray.forEach((champion, id) => {
            let championElement = document.createElement('div');
            championElement.classList.add('champion');
            championElement.innerHTML = `
                <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg" alt="${champion.id}" width="250px">
                <h3>${champion.name}</h3>
                <p>${champion.title}</p>
            `;
            championsList.appendChild(championElement);
            console.log(champion);
        });
    }
    ).catch(error => console.log(error));




























