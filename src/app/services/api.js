export async function getBanks() {
  const url = "https://dev.obtenmas.com/catom/api/challenge/banks";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://deploy-bank-list-app.vercel.app/",
      },
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    // console.error('Error fetching banks:', error);
    return [];
  }
}
