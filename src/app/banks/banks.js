
import { getBanks } from '../services/api';

async function fetchBanks(){ return await getBanks()}


export default async function Banks() {
  const banks = await fetchBanks();
  return (
    <main>
      <h1>Lista de Bancos</h1>
      <ul>
        {banks.map((bank) => (
          <li key={bank.bankName}>{bank.bankName}</li>
        ))}
      </ul>
    </main>
  );
}