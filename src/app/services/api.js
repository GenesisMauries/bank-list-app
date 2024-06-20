export function getBanks() {
  const url = "https://dev.obtenmas.com/catom/api/challenge/banks";
  return fetch(url, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': 'https://deploy-bank-list-app.vercel.app/'
    }
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      //console.error('Error fetching banks:', error);
      return [];
    });
}
