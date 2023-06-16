import Coin from 'types/Coin';

type sortingTypes = 'byName' | 'byPrice' | 'byVolume';

export default function sortTable(
  sortBy: sortingTypes,
  direction: null | 'ascending' | 'descending',
  data: { data: Coin[] },
): Coin[] {
  let sortedData;
  const directionModifier = direction === 'ascending' ? -1 : 1;
  const isNumeric = sortBy !== 'byName' ? true : false;

  if (direction === null) {
    sortedData = data.data;
    return sortedData;
  }

  sortedData = [...data.data].sort((coin1: Coin, coin2: Coin) => {
    if (sortBy === 'byName') {
      return (
        new Intl.Collator('en', { numeric: isNumeric }).compare(coin1.name, coin2.name) *
        directionModifier
      );
    }

    if (sortBy === 'byPrice') {
      return (
        new Intl.Collator('en', { numeric: isNumeric }).compare(
          String(coin2.quote.USD.price),
          String(coin1.quote.USD.price),
        ) * directionModifier
      );
    }

    if (sortBy === 'byVolume') {
      return (
        new Intl.Collator('en', { numeric: isNumeric }).compare(
          String(coin2.quote.USD.volume_24h),
          String(coin1.quote.USD.volume_24h),
        ) * directionModifier
      );
    }

    throw new Error('Sorting type is missing.');
  });

  return sortedData as Coin[];
}
