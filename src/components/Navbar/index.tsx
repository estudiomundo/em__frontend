import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarLink {
  text: string;
  href: string;
}

const NavbarItem: (props: NavbarLink) => JSX.Element = ({ text, href }) => (
  <Link to={href} className="sm:text-lg text-md text-gray-800 sm:px-2 px-2">
    {text}
  </Link>
);

const Navbar = () => {
  const links: NavbarLink[] = [
    { href: '#', text: 'Proyectos' },
    { href: '#', text: 'Quienes somos' },
    { href: '#', text: 'Contacto' },
  ];

  return (
    <nav className="flex justify-between shadow-sm py-2">
      <Link to="/">
        <h1 className="font-bold whitespace-nowrap text-green-900 text-2xl sm:px-2 px-1 mx-5">
          Estudio Mundo
        </h1>
      </Link>
      <ul className="flex justify-between whitespace-nowrap">
        {links.map((v) => (
          <NavbarItem key={v.text} {...v} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
