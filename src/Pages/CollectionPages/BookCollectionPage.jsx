import { useSelector } from "react-redux";
import SearchInput from "../../Components/SearchInput";
import Collection from "./Collection";
import { useEffect, useState } from "react";
import NoData from "../../Components/NoData";

function BookCollectionPage() {
  const bookData = useSelector((store) => store.book.bookData);
  const [books, setBooks] = useState(bookData);
  const [empty, setEmpty] = useState(false);

  function handleSearch(e) {
    let searchBook = e.target.value.toLowerCase();
    const filterBooks = bookData.filter((book) =>
      book.title.toLowerCase().includes(searchBook)
    );
    if (filterBooks.length === 0) {
      setEmpty(true);
    } else {
      setEmpty(false);
      setBooks(filterBooks);
    }
  }

  useEffect(function () {
    const nav = document.querySelector(".navigate");
    nav.scrollIntoView({ behavior: "auto", block: "center" });
  }, []);

  return (
    <div className=" outlet w-full min-h-screen  flex flex-col ">
      <div className=" mt-8 flex justify-center items-center">
        <SearchInput handleSearch={handleSearch} />
      </div>
      {empty ? <NoData /> : <Collection books={books} />}
    </div>
  );
}

export default BookCollectionPage;
