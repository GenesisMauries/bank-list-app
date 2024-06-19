export async function fetchBanks() {
  const res = await fetch('https://dev.obtenmas.com/catom/api/challenge/banks');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  console.log(res.json());
  return res.json();
}
