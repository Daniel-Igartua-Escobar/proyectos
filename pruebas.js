

function daysToXmas(date) {
  return Math.ceil((new Date('Dec 25, 2021').getTime() - new Date(date).getTime()) / (1000 * 60 * 60 * 24));
}


const date4 = new Date("December 20, 2021 03:24:00")
console.log(daysToXmas(date4)) // 5