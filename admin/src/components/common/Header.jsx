import { useEffect, useState } from "react";
import {
  ClockIcon,
  CalendarDaysIcon,
  UsersIcon,
  SearchIcon,
  BellIcon,
} from "@animateicons/react/lucide";

const Header = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = time.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <header className="sticky top-0 z-30 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="flex min-h-[72px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar (Like in Puzzler design) */}
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 w-96 transition-colors focus-within:border-blue-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
          <SearchIcon size={18} className="text-gray-400" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent text-sm text-gray-700 outline-none w-full"
          />
        </div>

        <div className="flex items-center gap-2 sm:hidden">
           <h1 className="text-lg font-bold text-gray-800">Admin</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          <button className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-gray-100 transition">
            <BellIcon size={20} />
            <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
          </button>

          <div className="h-8 w-[1px] bg-gray-200"></div>

          <div className="flex items-center gap-3 cursor-pointer">
            <div className="h-10 w-10 overflow-hidden rounded-full bg-gray-200 border border-gray-200 shadow-sm">
               <img src="https://ui-avatars.com/api/?name=Admin+User&background=3b82f6&color=fff" alt="Avatar" className="h-full w-full object-cover" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-700">Admin User</p>
              <p className="text-xs text-gray-500">admin@example.com</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;