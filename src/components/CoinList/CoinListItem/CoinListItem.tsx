interface CoinListItemProps {
  index: number;
  name: string;
  price: string;
  volume24h: string;
}

function CoinListItem({ index, name, price, volume24h }: CoinListItemProps) {
  return (
    <tr className='flex flex-row justify-around  align-center my-4 px-6 py-8 pl-16 bg-bg-lighter rounded hover:bg-bg-lighter-2 cursor-pointer text-lg'>
      <td className='mr-auto'>{index}</td>
      <td className='mr-auto'>{name}</td>
      <td className='mr-auto'>{price}</td>
      <td className='mr-auto'>{volume24h}</td>
    </tr>
  );
}

export default CoinListItem;
