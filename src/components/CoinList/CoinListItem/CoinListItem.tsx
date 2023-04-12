function CoinListItem({ name }) {
  return (
    <li className='my-4 px-6 py-8 bg-bg-lighter rounded hover:bg-bg-lighter-2 cursor-pointer'>
      {name}
    </li>
  );
}

export default CoinListItem;
