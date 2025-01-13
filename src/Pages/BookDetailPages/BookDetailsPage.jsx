import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Details from "./Details";

function BookDetailsPage() {
  const bookId = useParams().bookId;
  const navigate = useNavigate();
  const books = useSelector((store) => store.book.bookData);
  const book = books.filter((book) => book.id === Number(bookId)).at(0);
  const { image, title } = book;

  useEffect(
    function () {
      const nav = document.querySelector(".navigate");
      nav.scrollIntoView({ behavior: "auto", block: "center" });
    },
    [books]
  );
  if (!book.image) {
    navigate("*");
  }

  return (
    <div className="min-h-screen w-full lg:w-[95%] xl:w-[90%]  outlet flex flex-col lg:flex-row  items-start lg:items-center justify-start lg:justify-center gap-0 lg:gap-10 xl:gap-14  mx-0 lg:mx-auto mb-24 transition-all">
      <div className="w-full  lg:w-[45%] xl:w-[35%] imgCover  transition-all ">
        <img
          src={image}
          alt={title}
          className="w-[60%] sm:w-[50%] md:w-[40%] lg:w-[90%] mx-auto shadow-lg shadow-slate-400 transition-all img "
        />
      </div>
      <Details book={book} />
    </div>
  );
}

export default BookDetailsPage;
