export function getBanks() {
  const url = 'https://dev.obtenmas.com/catom/api/challenge/banks';
  return fetch(url)
    .then(response => response.json())
    .then(data => data)

}
