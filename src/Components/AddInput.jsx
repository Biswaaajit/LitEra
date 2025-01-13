import Proptype from "prop-types";

function AddInput({ label, type, value, setFunc, require }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  }
  return (
    <input
      className="border-2 w-full py-2 px-3  focus:outline-none focus:shadow-md focus:shadow-amber-300 rounded-lg hover:shadow-md hover:shadow-amber-300 focus:mb-4 hover:mb-4 transition-all"
      type={type}
      required={require}
      value={value}
      onChange={(e) => setFunc(e.target.value)}
      onKeyDown={handleKeyDown}
      placeholder={label}
    />
  );
}

//Prop validation

AddInput.propTypes = {
  label: Proptype.string,
  setFunc: Proptype.func,
  type: Proptype.string,
  require: Proptype.string,
  value: Proptype.any,
};

export default AddInput;
