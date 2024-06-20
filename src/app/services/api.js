export function getBanks() {
  const url = "https://dev.obtenmas.com/catom/api/challenge/banks";
  return fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      //console.error('Error fetching banks:', error);
      return [];
    });
}
