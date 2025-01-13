import Proptype from "prop-types";
import { FaStar } from "react-icons/fa";

function BookRating({ rating, dispatch }) {
  return (
    <div className="flex items-center gap-4  w-full ">
      <input
        className="w-[50%]"
        type="range"
        min="1"
        max="5"
        value={rating}
        onChange={(e) =>
          dispatch({ type: "addRating", payload: Number(e.target.value) })
        }
      />

      <p className="flex items-center gap-0.5">
        <span className="text-lg">{rating}</span>
        <FaStar className="text-amber-600" />
      </p>
    </div>
  );
}

//Prop validation

BookRating.propTypes = {
  rating: Proptype.number,
  dispatch: Proptype.func,
};

export default BookRating;
