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
    label: "Company",
    href: "#",
    submenu: [
      { label: "About", href: "#" },
      { label: "Our Team", href: "#" },
      { label: "Legacy", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Certifications", href: "#" },
    ],
  },
  {
    label: "Services",
    href: "#",
    submenu: [
      { label: "Product Design & Engineering", href: "#" },
      { label: "Quality Testing", href: "#" },
      { label: "Regulatory Affairs & Quality Management", href: "#" },
      { label: "Manufacturing Consultancy", href: "#" },
    ],
  },
  {
    label: "Product Archive",
    href: "#",
  },
  {
    label: "Insights",
    href: "#",
    submenu: [
      { label: "News / Events", href: "#" },
      { label: "Blogs", href: "#" },
    ],
  },
  {
    label: "Contact Us",
    href: "#",
  },
];
