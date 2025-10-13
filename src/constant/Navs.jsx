import {
  Home,
  Users,
  Package,
  Warehouse,
  BadgeDollarSign,
  Sparkles,
  LucideMenuSquare,
} from "lucide-react";

export const admin_navs = [
  {
    name: "Home",
    path: "/admin",
    title: "Hello Admin",
    icon: <Home size={20} />,
  },
  {
    name: "Users",
    path: "/admin/users",
    title: "User Management",
    icon: <Users size={20} />,
  },
  {
    name: "Menus",
    path: "/admin/menus",
    title: "Menu Management",
    icon: <Package size={20} />,
  },
  {
    name: "Inventory",
    path: "/admin/inventory",
    title: "Inventory Control",
    icon: <Warehouse size={20} />,
  },
  {
    name: "Sales History",
    path: "/admin/sales-history",
    title: "Sales Reports",
    icon: <BadgeDollarSign size={20} />,
  },
];

export const cashier_navs = [

    {
    name: "Sales",
    path: "/cashier",
    title: "Sales",
    icon: <LucideMenuSquare />,
  },
  {
    name: "Sales History",
    path: "/cashier/sales-history",
    title: "Sales Reports",
    icon: <BadgeDollarSign size={20} />,
  }

];
