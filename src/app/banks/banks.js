
import { getBanks } from '../services/api';
import Card from '../components/card';

async function fetchBanks(){ return await getBanks()}

export default async function Banks() {
  const banks = await fetchBanks();
  return (
    <section>
      <h1>Lista de Bancos</h1>
      <ul>
        {banks.map((bank) => (
          <Card key = {bank.bankName} data={bank}></Card>
        ))}
      </ul>
    </section>
  );
}