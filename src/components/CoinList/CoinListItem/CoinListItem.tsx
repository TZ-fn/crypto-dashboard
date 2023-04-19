interface CoinListItemProps {
  index: number;
  name: string;
  price: string;
  volume24h: string;
}

function CoinListItem({ index, name, price, volume24h }: CoinListItemProps) {
  return (
    <li className='flex flex-row justify-around  align-center my-4 px-6 py-8 pl-16 bg-bg-lighter rounded hover:bg-bg-lighter-2 cursor-pointer text-lg'>
      <p className='mr-auto'>{index}</p>
      <p className='mr-auto'>{name}</p>
      <p className='mr-auto'>{price}</p>
      <p className='mr-auto'>{volume24h}</p>
    </li>
  );
}

export default CoinListItem;
