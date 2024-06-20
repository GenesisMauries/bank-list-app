import Image from 'next/image'

function Card({data}) {
  return (
    <li>
      <h3>{data.bankName}</h3>
      <p>{data.description}</p>
      <Image
        src="https://github.com/GenesisMauries/bank-list-app/assets/39414582/3d4b113a-baf9-48b0-8d6c-cc55b97bda40"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </li>
  )
}

export default Card