'use client';

import { BellIcon, Cookie, CreditCard, Inbox, MessageSquare, Settings, User } from 'lucide-react';
import UserItem from './UserItem';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator } from './ui/command';

const Sidebar = () => {
  const menuList = [
    {
      group: "General",
      items: [
        {
          link: "/",
          icon: <User />,
          text: "Profile"
        },
        {
          link: "/",
          icon: <Inbox />,
          text: "Inbox"
        },
        {
          link: "/",
          icon: <CreditCard />,
          text: "Billing"
        },
        {
          link: "/",
          icon: <BellIcon />,
          text: "Notifications"
        }
      ]
    },
    {
      group: "Settings",
      items: [
        {
          link: "/",
          icon: <Settings />,
          text: "General Settings"
        },
        {
          link: "/",
          icon: <Cookie />,
          text: "Privacy"
        },
        {
          link: "/",
          icon: <MessageSquare />,
          text: "Logs"
        }
      ]
    }
  ];

  return (
    <div className='flex flex-col gap-4 w-[300px] min-w-[300px] border-r min-h-screen p-4'>
        <div>
            <UserItem />
        </div>
        <div className='grow'>
          <Command style={{overflow: 'visible'}}>
            <CommandList style={{overflow: 'visible'}}>
              {menuList.map((menu: any, key: number) => (
                <CommandGroup key={key} heading={menu.group}>
                  {menu.items.map((item: any, itemKey: number) => (
                    <CommandItem key={itemKey} className='flex gap-2 cursor-pointer'>
                      {item.icon}
                      {item.text}
                    </CommandItem>
                  ))}
                </CommandGroup>
              )
              )}
            </CommandList>
          </Command>
        </div>
        <div>Settings / Notifications</div>
    </div>
  );
}

export default Sidebar;