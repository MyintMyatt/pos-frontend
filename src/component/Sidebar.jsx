import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { routesConfig } from "../config/routeConfig";
import { Menu } from "lucide-react";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setCollapsed(true);
      else setCollapsed(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={`h-screen bg-white border-r border-gray-200 flex flex-col transition-all duration-300 overflow-hidden ${
        collapsed ? "translate-x-0 w-16" : "translate-x-0 w-60"
      }`}
    >
      <div className="flex items-center justify-between h-20 px-4 border-b border-gray-200">
        {!collapsed && (
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-xl">POS System</h2>
            <span className="text-xs text-black bg-gray-300 w-fit px-1 py-0.5 rounded-xl">
              super admin
            </span>
          </div>
        )}
        <button
          className="cursor-pointer"
          onClick={() => setCollapsed((c) => !c)}
        >
          <Menu />
        </button>
      </div>
      <nav className="flex-1 mt-4 space-y-2 px-2">
        {routesConfig.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
          `flex items-center ${collapsed && `justify-center` } gap-3 p-2 rounded-lg transition ${
                isActive
                  ? "bg-black text-white"
                  : "text-black hover:bg-black hover:text-white"
              }`
            }
          >
            {link.icon}
            {!collapsed && <span>{link.name}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default SideBar;
