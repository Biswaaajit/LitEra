import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import SearchInput from "../../Components/SearchInput";
import NoData from "../../Components/NoData";
import Collection from "../CollectionPages/Collection";

function BookCategory() {
  const category = useParams().category;
  const bookData = useSelector((store) => store.book.bookData);
  const filterdata = bookData.filter((book) => book.genre.includes(category));
  const [books, setBooks] = useState(filterdata);
  const [empty, setEmpty] = useState(false);

  function handleSearch(e) {
    let searchBook = e.target.value.toLowerCase();
    const filterBooks = filterdata.filter((book) =>
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
    <div className="outlet min-h-screen flex flex-col">
      <div>
        <SearchInput handleSearch={handleSearch} />
      </div>
      {empty ? <NoData /> : <Collection books={books} />}
    </div>
  );
}

export default BookCategory;
