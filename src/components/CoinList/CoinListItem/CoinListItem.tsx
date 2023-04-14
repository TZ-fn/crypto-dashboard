interface CoinListItemProps {
  name: string;
  price: number;
  volume24h: number;
}

function CoinListItem({ name, price, volume24h }: CoinListItemProps) {
  return (
    <li className='my-4 px-6 py-8 bg-bg-lighter rounded hover:bg-bg-lighter-2 cursor-pointer'>
      <p className='ml-auto'>{name}</p>
      <p className='ml-auto'>{price}</p>
      <p className='ml-auto'>{volume24h}</p>
    </li>
  );
}

export default CoinListItem;
