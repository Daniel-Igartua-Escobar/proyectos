$mainContainer = document.querySelector('#mainContainer');
$prevBtn = document.querySelector('#prevBtn');
$nextBtn = document.querySelector('#nextBtn');

let page = {
  prev: '',
  next:''
}

function getAllCharacters(url = 'https://rickandmortyapi.com/api/character') {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    $prevBtn.disabled = !data.info.prev;
    $nextBtn.disabled = !data.info.next;
    page.prev = data.info.prev;
    page.next = data.info.next;
    const characterTemplate = data.results.map(character => {
      return `
        <div class="img-container">
          <img src=${character.image} alt=${character.name}>
          <span class="title">${character.name}</span>
          <hr>
          <span>Species: ${character.species}</span>
          <span>Location: ${character.location.name}</span>
        </div>
      `
    }).join('');
    $mainContainer.innerHTML = characterTemplate;
  });
}

getAllCharacters()