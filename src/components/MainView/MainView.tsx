import { ReactNode } from 'react';

function MainView({ children }: { children: ReactNode }) {
  return <div className='flex items-center justify-center px-12 py-6'>{children}</div>;
}

export default MainView;
