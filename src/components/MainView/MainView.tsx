import { ReactNode } from 'react';

function MainView({ children }: { children: ReactNode }) {
  return <div className='px-12 py-12 flex items-center justify-center'>{children}</div>;
}

export default MainView;
