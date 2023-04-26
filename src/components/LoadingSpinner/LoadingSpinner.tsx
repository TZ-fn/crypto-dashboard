function LoadingSpinner() {
  return (
    <div className='relative mt-8'>
      <div className='w-20 h-20 border-bg-lighter border-4 rounded-full'></div>
      <div className='w-20 h-20 border-text-primary border-t-4 animate-spin rounded-full absolute left-0 top-0'></div>
    </div>
  );
}

export default LoadingSpinner;
