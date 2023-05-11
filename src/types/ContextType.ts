export default interface ContextType {
  latestData: {
    isLoading: boolean;
    isFetching: boolean;
    data: any;
    error: unknown;
  };
  metaData: {
    isLoading: boolean;
    isFetching: boolean;
    metaData: any;
    error: unknown;
  };
}
