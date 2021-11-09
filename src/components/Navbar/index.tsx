import { Link } from 'react-router-dom';
import './Navbar.css';

interface NavbarLink {
  text: string;
  href: string;
}

const NavbarItem: (props: NavbarLink) => JSX.Element = ({ text, href }) => (
  <Link to={href} className="font-normal sm:text-lg text-sm text-gray-800 p-2">
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
    <nav className="flex justify-between">
      <h1 className="font-bold text-green-900 text-lg p-2">Estudio Mundo</h1>
      <ul className="flex justify-between">
        {links.map((v) => (
          <NavbarItem key={v.text} {...v} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
