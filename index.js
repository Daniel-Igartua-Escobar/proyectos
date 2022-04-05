const loanCodes = [];
const products = {
  LOAN: ['uno', 'dos', 'tres']
};

async function _getFilteredLoans() {
  setTimeout(() => {
    console.log('prueba');
  }, 3000);
}

async function suerte() {
  const filteredLoans = loanCodes.length ? await _getFilteredLoans(products.LOAN) : products.LOAN;
  console.log('prueba2');
}


console.log(suerte());