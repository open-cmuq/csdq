export default function Navbar() {
  interface NavbarItemProps {
    name: string;
  }

  const NavbarItem: React.FC<NavbarItemProps> = ({ name }) => {
    return (
      <a href="#">
        <button>{name}</button>
      </a>
    );
  };

  return (
    <nav className="flex justify-center space-x-4 font-bold col-span-2">
      <NavbarItem name="Home" />
      <NavbarItem name="Events" />
      <NavbarItem name="Research" />
      <NavbarItem name="News" />
    </nav>
  );
}
