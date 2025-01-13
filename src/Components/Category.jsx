import Proptype from "prop-types";
import { Link } from "react-router-dom";

function Category({ genre }) {
  const { name, pic } = genre;
  return (
    <Link to={`/categories/${name}`} className="w-fit h-fit relative ">
      <img
        src={pic}
        alt={name}
        className="w-[10rem] sm:w-[12rem] lg:w-[14rem] rounded-lg xl:w-[16rem] aspect-[1/1.5] transition-all"
      />
      <div className="w-full h-full flex justify-center rounded-lg items-end hover:items-center bg-transparent hover:bg-neutral-900/80 absolute top-0 text-slate-100 font-semibold text-lg hover:text-xl md:hover:text-2xl pb-2 transition-all">
        {name}
      </div>
    </Link>
  );
}

//Prop validation
Category.propTypes = {
  genre: Proptype.object,
};
export default Category;
