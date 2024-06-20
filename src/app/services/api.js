export function getBanks() {
  const url = "https://dev.obtenmas.com/catom/api/challenge/banks";
  return fetch(url, {
    mode: 'no-cors'
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      //console.error('Error fetching banks:', error);
      return [];
    });
}
