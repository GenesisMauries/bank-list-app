import Card from "./card";

export default function List({ banks, searchTerm }) {
  if (banks.length === 0) {
    return (
      <h2>
        ❌ No se encontraron bancos que coincidan con la búsqueda: {searchTerm}
      </h2>
    );
  }

  return (
    <ul>
      {banks.map((bank) => (
        <Card key={bank.bankName} data={bank} />
      ))}
    </ul>
  );
}
