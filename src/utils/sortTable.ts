import Coin from 'types/Coin';

type sortingTypes = 'byName' | 'byPrice' | 'byVolume';

export default function sortTable(
  sortBy: sortingTypes,
  sortingStatus: { by: null | sortingTypes; direction: null | 'ascending' | 'descending' },
  data: { data: Coin[] },
): Coin[] {
  let sortedData;

  if (sortingStatus.direction === null) {
    sortedData = data.data;
    return sortedData;
  }

  if (sortBy === 'byName') {
    sortedData = [...data.data].sort(
      (coin1: Coin, coin2: Coin) =>
        new Intl.Collator('en').compare(coin1.name, coin2.name) *
        (sortingStatus.direction === 'ascending' ? -1 : 1),
    );
  }
  if (sortBy === 'byPrice') {
    sortedData = [...data.data].sort(
      (coin1: Coin, coin2: Coin) =>
        new Intl.Collator('en', { numeric: true }).compare(
          String(coin2.quote.USD.price),
          String(coin1.quote.USD.price),
        ) * (sortingStatus.direction === 'ascending' ? -1 : 1),
    );
  }
  if (sortBy === 'byVolume') {
    sortedData = [...data.data].sort(
      (coin1: Coin, coin2: Coin) =>
        new Intl.Collator('en', { numeric: true }).compare(
          String(coin2.quote.USD.volume_24h),
          String(coin1.quote.USD.volume_24h),
        ) * (sortingStatus.direction === 'ascending' ? -1 : 1),
    );
  }
  return sortedData as Coin[];
}
