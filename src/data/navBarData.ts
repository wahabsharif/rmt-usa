export interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

export const navBarData: MenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About Us",
    href: "#",
    submenu: [
      { label: "Company", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Out Team", href: "#" },
      { label: "Blogs", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "#",
    submenu: [
      { label: "Company", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Out Team", href: "#" },
      { label: "Blogs", href: "#" },
    ],
  },
  {
    label: "Product Portfolio",
    href: "#",
    submenu: [
      { label: "Company", href: "#" },
      { label: "Leadership", href: "#" },
      { label: "Out Team", href: "#" },
      { label: "Blogs", href: "/blogs" },
    ],
  },
  {
    label: "Contact Us",
    href: "#",
  },
];
