import HomeCategories from "./HomeCategories";
import HomeFornt from "./HomeFornt";
import HomePopular from "./HomePopular";

function HomePage() {
  return (
    <div className="w-full h-fit">
      <HomeFornt />
      <HomeCategories />
      <HomePopular />
    </div>
  );
}

export default HomePage;
