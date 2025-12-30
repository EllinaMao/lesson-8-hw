import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={isActive("/about") ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link
            to="/shoppingCard"
            className={isActive("/shoppingCard") ? "active" : ""}
          >
            Shopping Card
          </Link>
        </li>
        <li>
          <Link
            to="/contacts"
            className={isActive("/contacts") ? "active" : ""}
          >
            Contacts
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
