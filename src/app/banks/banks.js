"use client";
import { useState, useEffect } from "react";
import { getBanks } from "../services/api";
import Card from "../components/card";
import Search from "../components/search";
import List from "../components/list";

export default function Banks() {
  const [banks, setBanks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBanks()
      .then((fetchedBanks) => {
        setBanks(fetchedBanks);
        setLoading(false);
      })
      .catch((error) => {
        // console.error("Error fetching banks:", error);
        setLoading(false);
      });
  }, []);

  const searchBanks = (searchTerm) => {
    if (searchTerm === "") {
      return banks;
    }
    return banks.filter((bank) =>
      bank.bankName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const filteredBanks = searchBanks(searchTerm);
  const handleDeleteBank = (bankName) => {
    setBanks((prevBanks) =>
      prevBanks.filter((bank) => bank.bankName !== bankName)
    );
  };
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section>
      <article>
        <h3>Busqueda por nombre</h3>
        <Search
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
        />
      </article>

      <h1>Lista de bancos</h1>
      {loading ? (
        <h2>Cargando bancos... ⬆️</h2>
      ) : (
        <List
          banks={filteredBanks}
          searchTerm={searchTerm}
          onDelete={handleDeleteBank}
        />
      )}
    </section>
  );
}
