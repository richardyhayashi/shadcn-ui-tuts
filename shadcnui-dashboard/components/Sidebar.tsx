'use client';

import UserItem from './UserItem';

const Sidebar = () => {
  return (
    <div className='flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4'>
        <div>
            <UserItem />
        </div>
        <div className='flex-grow bg-red-200'>Menu</div>
        <div>Settings / Notifications</div>
    </div>
  );
}

export default Sidebar;