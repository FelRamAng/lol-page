let language = 'es_ES';

fetch(`http://ddragon.leagueoflegends.com/cdn/11.19.1/data/${language}/champion.json`)
    .then(response => response.json())
    .then(data => {
        let champions = data.data;
        let championsArray = Object.keys(champions).map(key => champions[key]);
        let championsList = document.querySelector('.champ-container');
        championsArray.forEach(champion => {
            let championCard = document.createElement('div');
            championCard.classList.add('champion-card');
            championCard.addEventListener('click', () => {
                showChampionData(champion);
            });
            let championImg = document.createElement('img');
            championImg.classList.add('champ-img');
            championImg.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champion.id}_0.jpg`;
            let championOverlap = document.createElement('div');
            championOverlap.classList.add('champ-overlap');
            let championInfo = document.createElement('div');
            championInfo.classList.add('champ-info');
            let championName = document.createElement('h3');
            championName.classList.add('champ-name');
            championName.innerHTML = champion.id;
            let championTitle = document.createElement('p');
            championTitle.classList.add('champ-title');
            championTitle.innerHTML = champion.title;
            championInfo.appendChild(championName);
            championInfo.appendChild(championTitle);
            championOverlap.appendChild(championInfo);
            championCard.appendChild(championImg);
            championCard.appendChild(championOverlap);
            championsList.appendChild(championCard);
        });
    }).catch(error => console.log(error));


function showChampionData(champion) {
    $("#myModal").modal();
    let title = document.querySelector('.modal-title');
    let description = document.querySelector('.modal-body');
    title.textContent = champion.id;
    description.innerHTML = 
    `<p>${champion.title}</p>`;
}
