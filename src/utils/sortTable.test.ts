import sortTable from './sortTable';
import mockedLatestData from '../tests/mockedLatestData';

const defaultSorting = mockedLatestData.data[0];
const nameSortingDescending = mockedLatestData.data[0];
const nameSortingAscending = mockedLatestData.data[4];
const priceSortingDescending = mockedLatestData.data[0];
const priceSortingAscending = mockedLatestData.data[7];
const volumeSortingDescending = mockedLatestData.data[2];
const volumeSortingAscending = mockedLatestData.data[6];

describe('sortTable', () => {
  it('sorts the table alphabetically', () => {
    expect(sortTable('byName', null, mockedLatestData)[0]).toEqual(defaultSorting);

    expect(sortTable('byName', 'descending', mockedLatestData)[0]).toEqual(nameSortingDescending);

    expect(sortTable('byName', 'ascending', mockedLatestData)[0]).toEqual(nameSortingAscending);
  });

  it('sorts the table by price', () => {
    expect(sortTable('byPrice', null, mockedLatestData)[0]).toEqual(defaultSorting);

    expect(sortTable('byPrice', 'descending', mockedLatestData)[0]).toEqual(priceSortingDescending);

    expect(sortTable('byPrice', 'ascending', mockedLatestData)[0]).toEqual(priceSortingAscending);
  });

  it('sorts the table by volume', () => {
    expect(sortTable('byVolume', null, mockedLatestData)[0]).toEqual(defaultSorting);

    expect(sortTable('byVolume', 'descending', mockedLatestData)[0]).toEqual(
      volumeSortingDescending,
    );

    expect(sortTable('byVolume', 'ascending', mockedLatestData)[0]).toEqual(volumeSortingAscending);
  });
});
