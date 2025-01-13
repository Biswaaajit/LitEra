import { useReducer } from "react";
import AddInput from "../Components/AddInput";
import Heading from "../Components/Heading";
import BookRating from "./BookRating";
import BookDespcription from "./BookDespcription";
import { useDispatch, useSelector } from "react-redux";
import { addBook } from "../utils/dataSlice";
import { useNavigate } from "react-router-dom";

const initial = {
  title: "",
  author: "",
  year: "",
  genre: "",
  rating: 1,
  description: "",
  image: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "addTitle":
      return { ...state, title: action.payload };
    case "addAuthor":
      return { ...state, author: action.payload };
    case "addYear":
      return { ...state, year: action.payload };
    case "addGenre":
      return { ...state, genre: action.payload };
    case "addRating":
      return { ...state, rating: action.payload };
    case "addDescription":
      return { ...state, description: action.payload };
    case "addImage":
      return { ...state, image: action.payload };
    case "reset":
      return initial;
  }
}

function BookAddPage() {
  const [formData, dispatch] = useReducer(reducer, initial);
  const { title, author, genre, rating, year, description, image } = formData;
  const bookData = useSelector((store) => store.book.bookData);
  const reduxDispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(actionType, actionValue) {
    dispatch({ type: actionType, payload: actionValue });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newGenre = genre.split(",").map((el) => el.trim());
    const newImage = image.startsWith("https://")
      ? image
      : "https://i.pinimg.com/736x/14/96/2b/14962b09306ec0539796755f9b94a9fc.jpg";
    const id = bookData.at(bookData.length - 1).id + 1;

    const newBook = {
      id,
      title,
      author,
      genre: newGenre,
      rating,
      year: Number(year),
      description,
      image: newImage,
    };
    reduxDispatch(addBook(newBook));
    dispatch({ type: "reset" });
    navigate(`/books/${id}`);
  }

  return (
    <div className="outlet min-h-screen flex flex-col ">
      <Heading name="Adding Book" width="50%" />
      <div className=" grow flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className=" w-[75%] sm:w-[60%] md:w-[90%] lg:w-[80%] xl:w-[65%] my-auto grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-y-4 lg:gap-y-6 gap-x-0 md:gap-x-4 lg:gap-x-10 xl:gap-x-16 transition-all"
        >
          <AddInput
            label="Book Title"
            type="text"
            value={title}
            require="true"
            setFunc={(value) => handleChange("addTitle", value)}
          />
          <AddInput
            label="Book Author"
            type="text"
            value={author}
            require="true"
            setFunc={(value) => handleChange("addAuthor", value)}
          />
          <AddInput
            label="Publication Year"
            type="number"
            value={year}
            require="true"
            setFunc={(value) => handleChange("addYear", value)}
          />
          <BookRating rating={rating} dispatch={dispatch} />
          <AddInput
            label="Book Genre (Optional)"
            type="text"
            value={genre}
            setFunc={(value) => handleChange("addGenre", value)}
          />

          <AddInput
            label="Image Address (Optional)"
            type="text"
            value={image}
            setFunc={(value) => handleChange("addImage", value)}
          />
          <BookDespcription description={description} dispatch={dispatch} />
          <button
            type="submit"
            className="col-span-1 md:col-span-2 border-2 px-9 lg:px-12 py-2 border-heading hover:bg-heading font-normal lg:font-semibold hover:text-slate-100 rounded-xl transition-all mt-4"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default BookAddPage;
