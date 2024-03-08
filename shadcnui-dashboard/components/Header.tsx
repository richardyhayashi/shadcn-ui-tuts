'use client';

import { BellIcon } from "lucide-react";
import CommandDemo from "./Command";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className='grid grid-cols-2 gap-2 p-4 border-b'>
      <CommandDemo />
      <div className="flex items-center justify-end">
        <Button variant="outline" size="icon">
          <BellIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Header;