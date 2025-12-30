import { Link, useLocation } from "react-router-dom";
 
const Breadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);
 
  return (
    <div className="breadcrumbs">
      <span>
        <Link to="/">Home</Link>
      </span>
 
      {segments.map((segment, index) => {
        const path = "/" + segments.slice(0, index + 1).join("/");
 
        return (
          <span key={path}>
            / <Link to={path}>{segment}</Link>
          </span>
        );
      })}
    </div>
  );
};
 
export default Breadcrumbs;