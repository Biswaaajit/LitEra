import { NavLink } from "react-router-dom";
import Proptype from "prop-types";

//prop Validation
NavigationLinks.propTypes = {
  address: Proptype.string,
  name: Proptype.string,
};

function NavigationLinks({ address, name }) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "text-heading" : "hover:text-heading"
      }
      to={address}
    >
      {name}
    </NavLink>
  );
}
export default NavigationLinks;
