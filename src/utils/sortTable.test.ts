import sortTable from './sortTable';
import mockedListData from '../tests/mockedListData';

const defaultSorting = mockedListData.data[0];
const nameSortingDescending = mockedListData.data[0];
const nameSortingAscending = mockedListData.data[4];
const priceSortingDescending = mockedListData.data[0];
const priceSortingAscending = mockedListData.data[7];
const volumeSortingDescending = mockedListData.data[2];
const volumeSortingAscending = mockedListData.data[6];

describe('sortTable', () => {
  it('sorts the table alphabetically', () => {
    expect(sortTable('byName', null, mockedListData)[0]).toEqual(defaultSorting);

    expect(sortTable('byName', 'descending', mockedListData)[0]).toEqual(nameSortingDescending);

    expect(sortTable('byName', 'ascending', mockedListData)[0]).toEqual(nameSortingAscending);
  });

  it('sorts the table by price', () => {
    expect(sortTable('byPrice', null, mockedListData)[0]).toEqual(defaultSorting);

    expect(sortTable('byPrice', 'descending', mockedListData)[0]).toEqual(priceSortingDescending);

    expect(sortTable('byPrice', 'ascending', mockedListData)[0]).toEqual(priceSortingAscending);
  });

  it('sorts the table by volume', () => {
    expect(sortTable('byVolume', null, mockedListData)[0]).toEqual(defaultSorting);

    expect(sortTable('byVolume', 'descending', mockedListData)[0]).toEqual(volumeSortingDescending);

    expect(sortTable('byVolume', 'ascending', mockedListData)[0]).toEqual(volumeSortingAscending);
  });
});
