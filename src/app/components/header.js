import Image from "next/image";
import styles from '../prueba.module.css'
export default function Header() {
  return (
    <header>
      <section className={styles.triangle}></section>
      {/* <Image
        src="https://github.com/GenesisMauries/bank-list-app/assets/39414582/f24b0b07-edfd-4d84-9de8-10f81c175146"
        width={35}
        height={35}
        alt= "Telefono icon"
      /> */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://github.com/GenesisMauries/bank-list-app/assets/39414582/f24b0b07-edfd-4d84-9de8-10f81c175146"
        width={35}
        height={35}
        alt= "Telefono icon"
      />
      <a href="tel:+1234567890">123-456-7890</a>
    </header>
  );
}