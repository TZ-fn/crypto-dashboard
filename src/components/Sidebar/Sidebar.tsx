import Favourites from '../Favourites/Favourites';

function Sidebar() {
  return (
    <aside className='flex flex-col items-center justify-center gap-4 rounded bg-bg-lighter px-4 py-6 '>
      <Favourites />
    </aside>
  );
}

export default Sidebar;
