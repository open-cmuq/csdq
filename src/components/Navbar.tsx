import { Link } from "react-router-dom";

export default function Navbar() {
  interface NavbarItemProps {
    name: string;
    link: string;
  }

  const NavbarItem: React.FC<NavbarItemProps> = ({ name, link }) => {
    return (
      <Link to={`/${link}`}>
        <button>{name}</button>
      </Link>
    );
  };

  return (
    <nav className="flex justify-center space-x-4 font-bold col-span-2">
      <NavbarItem name="Home" link="#" />
      <NavbarItem name="Events" link="events" />
      <NavbarItem name="Research" link="research" />
      <NavbarItem name="News" link="news" />
    </nav>
  );
}
