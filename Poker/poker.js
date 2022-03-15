const deck = [
    'AE', '2E', '3E', '4E', '5E', '6E', '7E', '8E', '9E', '10E', 'JE', 'QE', 'KE',
    'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD',
    'AT', '2T', '3T', '4T', '5T', '6T', '7T', '8T', '9T', '10T', 'JT', 'QT', 'KT',
    'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC'
];

const shufflingCards = array => {
    return array.sort(function() { return Math.random() - 0.5 });
};

const dealCards = (array, cards) => {
    return array.splice(0, cards);
};

const init = () => {debugger;
    let shuffledCards = shufflingCards(deck);
    const jugador1 = dealCards(shuffledCards, 2);
    const jugador2 = dealCards(shuffledCards, 2);
    const board = dealCards(shuffledCards, 3);

    console.log(jugador1, jugador2, board);
};
