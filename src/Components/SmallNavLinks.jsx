import Proptype from "prop-types";

//Prop validation
SmallNavLinks.propTypes = {
  name: Proptype.string.isRequired,
  onclick: Proptype.func,
};
function SmallNavLinks({ name, onclick }) {
  return (
    <p
      onClick={onclick}
      className="cursor-pointer w-full text-center text-xl hover:text-heading py-5 "
    >
      {name}
    </p>
  );
}
export default SmallNavLinks;
