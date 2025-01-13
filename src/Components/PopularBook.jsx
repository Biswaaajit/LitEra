import Proptype from "prop-types";
import { Link } from "react-router-dom";
function PopularBook({ book }) {
  const { id, image, title, author } = book;
  return (
    <Link
      to={`/books/${id}`}
      className="w-[10rem] sm:w-[13rem] md:w-[11rem] lg:w-[14rem] xl:w-[13vw] hover:scale-105 sm:hover:scale-110 space-y-1 xl:space-y-2  transition-all  cursor-pointer"
    >
      <img src={image} alt={title} className="aspect-[1/1.3]" />
      <p className="text-center font-semibold text-base md:font-bold md:text-lg">
        {title}
      </p>
      <p className="text-amber-600 text-center md:font-semibold ">{author}</p>
    </Link>
  );
}

//Prop validation
PopularBook.propTypes = {
  book: Proptype.object,
};

export default PopularBook;
