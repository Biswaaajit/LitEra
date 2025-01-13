import Proptype from "prop-types";
import Star from "./Star";
import { Link } from "react-router-dom";

function CollectionList({ book }) {
  const { image, title, author, rating, id } = book;
  return (
    <Link
      to={`/books/${id}`}
      className="w-[28vw] sm:w-[12rem] lg:w-[14rem] hover:scale-110 transition-all space-y-2 cursor-pointer"
    >
      <img src={image} alt={title} className=" aspect-[1/1.5] " />

      <div className="flex flex-col items-center gap-1">
        <p className="text-center text-base lg:text-lg font-semibold">
          {title}
        </p>
        <p className="text-center lg:font-semibold text-slate-600">{author}</p>
        <Star rating={rating} />
      </div>
    </Link>
  );
}

//Prop Validation
CollectionList.propTypes = {
  book: Proptype.object,
};

export default CollectionList;
