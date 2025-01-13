import Proptype from "prop-types";

function BookDespcription({ description, dispatch }) {
  return (
    <textarea
      placeholder="Book's Description (Optional)"
      className="border-2 w-full rounded-lg py-1.5 px-3 focus:outline-none focus:shadow-md focus:shadow-amber-300 transition-all hover:shadow-md hover:shadow-amber-300 focus:mb-4 hover:mb-4"
      value={description}
      rows="4"
      onChange={(e) =>
        dispatch({ type: "addDescription", payload: e.target.value })
      }
    ></textarea>
  );
}

//Prop validation

BookDespcription.propTypes = {
  description: Proptype.string,
  dispatch: Proptype.func,
};

export default BookDespcription;
