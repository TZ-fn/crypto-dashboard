import mockedLatestData from './mockedLatestData';
import mockedMetaData from './mockedMetaData';

const mockedContextData = {
  latestData: {
    isLoading: false,
    isFetching: false,
    data: {
      data: mockedLatestData.data,
    },
    error: null,
  },
  metaData: {
    isLoading: false,
    isFetching: false,
    metaData: mockedMetaData,
    error: null,
  },
};

export default mockedContextData;
