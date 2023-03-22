import { ReactNode } from 'react';

function MainView({ children }: { children: ReactNode }) {
  return <div className='px-6 py-12'>{children}</div>;
}

export default MainView;
