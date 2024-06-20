export default function Search({ searchTerm, handleSearchChange }) {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={handleSearchChange}
      placeholder="Buscar banco 🔍"
    />
  );
}
