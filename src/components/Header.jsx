import { useLocation } from "react-router-dom";
// import Navigation from "./Navigation";
 
const Header = () => {
  const location = useLocation();
 
  if (location.pathname === "/posts/secret") {
    return null;
  }
 
  return (
    <header>
      <h1>Simple Game Registration</h1>
      {/* <Navigation /> */}
      <hr />
    </header>
  );
};
 
export default Header;