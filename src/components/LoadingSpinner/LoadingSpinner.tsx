function LoadingSpinner() {
  return (
    <div data-testid='loading-spinner' className='relative mt-8'>
      <div className='h-20 w-20 rounded-full border-4 border-bg-lighter'></div>
      <div className='absolute left-0 top-0 h-20 w-20 animate-spin rounded-full border-t-4 border-text-primary'></div>
    </div>
  );
}

export default LoadingSpinner;
