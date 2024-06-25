"use client";
import { useState, useEffect } from "react";
import { getBanks } from "../services/api";
import Search from "../components/search";
import List from "../components/list";
import Button from "../components/button";
import Image from "next/image";

export default function Banks() {
  const [banks, setBanks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sorting, setSorting] = useState(false);

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
  const handleSort = () => {
    setSorting(true);
    setTimeout(() => {
      const sortedBanks = [...banks].sort((a, b) => {
        if (sortOrder === "asc") {
          return a.bankName.localeCompare(b.bankName);
        } else {
          return b.bankName.localeCompare(a.bankName);
        }
      });

      setBanks(sortedBanks);
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
      setSorting(false);
    }, 1000);
    
  };
  return (
    <section>
      <section className="banks-container">
        <article>
          <Image
            src="https://github.com/GenesisMauries/bank-list-app/assets/39414582/866e8492-0435-41bb-89aa-49f18947b16d"
            width={400}
            height={400}
            alt="Tarjeta"
          />
        </article>
        <article>
          <h3>Busqueda por nombre</h3>
          <Search
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
          />
        </article>
      </section>
      <section className="list-header">
        <h1>Lista de bancos</h1>
        <Button
          onClick={handleSort}
          text={`Ordenar ${sortOrder === "asc" ? "A-Z" : "Z-A"}`}
          loadingText="Ordenando..."
          isLoading={sorting}
        />
      </section>
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