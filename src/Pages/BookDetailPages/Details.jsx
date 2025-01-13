import Proptype from "prop-types";
import Star from "../../Components/Star";

function Details({ book }) {
  const { author, description, genre, title, year, rating } = book;
  const genres = genre.join(" , ");

  return (
    <div className="w-full grow  space-y-8 px-4 md:px-8 lg:px-4 pt-8 pb-16">
      <div className="space-y-2">
        <p className="text-4xl font-bold">{title}</p>
        <p className="space-x-5">
          <span className="text-base sm:text-lg text-slate-400">Author :</span>
          <span className="text-amber-600 font-semibold text-base sm:text-lg">
            {author}
          </span>
        </p>
        <Star rating={rating} className="text-xl sm:text-2xl gap-0.5" />
      </div>
      <p className="italic text-xl font-light text-justify">
        &ldquo;{description ? description : "Description not available"}&rdquo;
      </p>
      <div className="space-y-4">
        <DetailList name="Genre" value={genres} />
        <DetailList name="Year" value={year} />
      </div>
    </div>
  );
}

function DetailList({ name, value }) {
  return (
    <div className="grid grid-cols-4 ">
      <p className=" col-span-1 text-slate-500 text-lg ">{name}</p>
      <p className=" col-span-2 text-lg font-semibold">
        {value ? value : "No data"}
      </p>
    </div>
  );
}

//Prop validation
Details.propTypes = {
  book: Proptype.object,
};
DetailList.propTypes = {
  name: Proptype.string,
  value: Proptype.any,
};

export default Details;
