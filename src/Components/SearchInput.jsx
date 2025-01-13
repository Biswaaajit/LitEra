import { IoSearch } from "react-icons/io5";
import Proptype from "prop-types";

function SearchInput({ handleSearch }) {
  return (
    <div className="flex w-[70%] sm:w-[60%]  md:w-[55%] lg:w-[50%] xl:w-[40%]  mx-auto items-center border-2  border-heading rounded-full transition-all">
      <div className="w-fit pl-3 md:pl-4 pr-0 lg:pr-1">
        <IoSearch className="text-heading text-xl sm:text-2xl" />
      </div>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search your Book"
        className="text-base md:text-lg grow px-2 py-1.5 md:py-2 focus:outline-none  rounded-full"
      />
    </div>
  );
}

// Prop validation
SearchInput.propTypes = {
  handleSearch: Proptype.func,
};

export default SearchInput;
