interface CoinListItemProps {
  name: string;
  price: number;
  volume24h: number;
}

function CoinListItem({ name, price, volume24h }: CoinListItemProps) {
  return (
    <li className='flex flex-row align-center justify-around my-4 px-6 py-8 bg-bg-lighter rounded hover:bg-bg-lighter-2 cursor-pointer'>
      <p>{name}</p>
      <p>{price}</p>
      <p>{volume24h}</p>
    </li>
  );
}

export default CoinListItem;
