


function _checkUserLogged(userLogged = {}) {
  const isBoolean = (value) => typeof value === 'boolean';
  const validParams = [((userLogged || {}).value || {}).isLogged, (userLogged || {}).value, (userLogged || {}).isLogged, userLogged];
  const firstBooleanMatch = validParams.find(isBoolean);

  return Boolean(firstBooleanMatch);
}


console.log(_checkUserLogged(true))
console.log(_checkUserLogged({isLogged: true}))
console.log(_checkUserLogged({value: {isLogged: true}}))