import { FaRegStar, FaStar } from "react-icons/fa";
import Proptype from "prop-types";

function Star({ rating, className }) {
  return (
    <div className={`flex ${className ? className : ""}`}>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((num) =>
        rating < num ? (
          <FaRegStar className="text-amber-600" key={num} />
        ) : (
          <FaStar key={num} className="text-amber-600" />
        )
      )}
    </div>
  );
}

//prop valiadtion
Star.propTypes = {
  rating: Proptype.number,
  className: Proptype.string,
};

export default Star;
