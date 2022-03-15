let counter = 0;
const $counter = document.querySelector('#counter');

const handleCounter = method => {
  const methods = {
    reset() { counter = 0 },
    decrement() { counter-- },
    increase() { counter++ },
  };

  methods[method]();
  _updateCounter();
}

const _updateCounter = () => {
  let color;

  if (counter > 0) {
    color = 'green'; 
  } else if (counter < 0) {
    color = 'red'; 
  } else {
    color = 'black'; 

  }

  $counter.style.color = color;
  $counter.textContent = counter;
}