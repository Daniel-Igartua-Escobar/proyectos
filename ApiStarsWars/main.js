const $categories = document.querySelector('#categories');

function getAllData() {
  const url = "https://swapi.dev/api/"
  fetch('https://swapi.dev/api/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const categories = Object.keys(data);
    console.log(data)
    console.log(categories)
    const template = categories.map(function(key) {
      return `<button class="btn">${key}</button>`
     }).join('');

    $categories.innerHTML = template
  });
}


getAllData()