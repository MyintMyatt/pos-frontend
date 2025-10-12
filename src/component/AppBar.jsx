import { LogOut } from "lucide-react";

const AppBar = ({ title }) => {
  return (
    <header className="flex items-center justify-between h-18 px-7 border-b border-gray-200">
      <h1 className="text-xl">{title}</h1>
      <button className="relative group flex items-center justify-center text-sm text-white cursor-pointer gap-2 bg-red-500 hover:bg-red-700 px-5 py-2 rounded-xl">
        <span className="hidden sm:inline">Logout</span>
        <LogOut size={18} />
        {/* Tooltip for mobile */}
        <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200 sm:hidden">
          Logout
        </span>
      </button>
    </header>
  );
};

export default AppBar;
 