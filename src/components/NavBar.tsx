import React from "react";
import { Link, useNavigate } from "react-router-dom";
import '../styles/NavBar.css'

interface Route {
    path: string;
    label: string;
}

interface Props {
  onNavigate: (isNavigating: boolean) => void;
}

const NavBar: React.FC<Props> = ({ onNavigate }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    onNavigate(true);
    navigate(path);
  };

  const routes: Route[] = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/counter', label: 'Counter' },
  ];

  return (
    <nav className='navbar'>
      <ul>
        { 
            routes.map((route) => (
                <li key={ route.path }>
                    <Link 
                        to={ route.path } 
                        onClick={() => handleNavigation(route.path)}
                    >
                        { route.label }
                    </Link>
                </li>
            )) 
        }
      </ul>
    </nav>
  );
};

export default NavBar;
