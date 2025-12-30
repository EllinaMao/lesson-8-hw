import { useEffect } from "react";
import { useLocation } from "react-router-dom";
 
const LocationLogger = () => {
  const location = useLocation();
 
  useEffect(() => {
    console.log("Current location:", location);
  }, [location]);
 
  return null;
};
 
export default LocationLogger;