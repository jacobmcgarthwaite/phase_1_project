document.addEventListener("DOMContentLoaded", () => {
    fetchCharacters()
})

const fetchCharacters = () => {
    fetch("https://www.breakingbadapi.com/api/characters/")
    .then((res) => res.json())
    .then((data) => renderCharacters(data));
};

const renderCharacters = (characters) => {
    //Character name, Portrayed by, Nickname, Occupation, Status, Image
    const container = document.querySelector(".container");
    characters.map(character => {
        const div = document.createElement("div");
        div.innerHTML = `
            <img src= "${character.img}"/>
            <h3>${character.name}</h3>
            <p>Portrayed by: ${character.portrayed}</p>
            <p>Nickname: ${character.nickname}</p>
            <p>Occupation: ${character.occupation}</p>
            <p>Status: ${character.status}</p>
        `;
            container.append(div);
    });
};