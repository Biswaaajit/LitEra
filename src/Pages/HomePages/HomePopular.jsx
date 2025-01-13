import { useNavigate } from "react-router-dom";
import Heading from "../../Components/Heading";
import PopularBook from "../../Components/PopularBook";
import data from "../../utils/data";

function HomePopular() {
  let popularBook = data.filter((book) => book.rating === 5);
  const navigate = useNavigate();

  return (
    <div className=" w-full min-h-screen pt-14 pb-20   flex flex-col items-center ">
      <Heading name="Discover Our Popular" width="40%" />
      <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 justify-items-center gap-y-8 md:gap-y-16 pt-16 pb-10 transition-all">
        {popularBook.map((book) => (
          <PopularBook key={book.id} book={book} />
        ))}
      </div>
      <button
        onClick={() => navigate("/collection")}
        className="w-fit px-7 py-2 rounded-xl border-2 text-lg border-heading hover:bg-heading  hover:text-slate-100 transition-all"
      >
        Discover More
      </button>
    </div>
  );
}

export default HomePopular;
