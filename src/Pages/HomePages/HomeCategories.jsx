import Category from "../../Components/Category";
import Heading from "../../Components/Heading";
import data from "../../utils/data";

const genres = [
  {
    name: "Adventure",
    pic: "/adventure.jpg",
  },
  {
    name: "Fantasy",
    pic: "/fantasy.jpg",
  },
  {
    name: "Classic",
    pic: "/classic.jpg",
  },
  {
    name: "Fiction",
    pic: "/science.jpg",
  },
];

function HomeCategories() {
  console.log(data.filter((book) => book.genre.includes("Comedy")));
  return (
    <div className="w-full min-h-fit space-y-16 lg:space-y-20 my-20">
      <Heading name="Choose Your Categories" width="40%" />
      <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-y-4 gap-x-2">
        {genres.map((genre) => (
          <Category key={genre.name} genre={genre} />
        ))}
      </div>
    </div>
  );
}

export default HomeCategories;
