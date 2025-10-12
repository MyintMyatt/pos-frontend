
import { Home, Users, Package, Warehouse, BadgeDollarSign } from "lucide-react";

export const routesConfig = [
  { name: "Home", path: "/", title: "Hello Admin", icon: <Home size={20} /> },
  { name: "Users", path: "/users", title: "User Management", icon: <Users size={20} /> },
  { name: "Menus", path: "/menus", title: "Menu Management", icon: <Package size={20} /> },
  { name: "Inventory", path: "/inventory", title: "Inventory Control", icon: <Warehouse size={20} /> },
  { name: "Sales History", path: "/sales", title: "Sales Reports", icon: <BadgeDollarSign size={20} /> },
];
