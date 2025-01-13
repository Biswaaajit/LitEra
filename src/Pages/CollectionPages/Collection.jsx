import CollectionList from "../../Components/CollectionList";
import Proptype from "prop-types";

function Collection({ books }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-16 py-16 ">
      {books.map((book) => (
        <CollectionList key={book.id} book={book} />
      ))}
    </div>
  );
}

//Prop Validation
Collection.propTypes = {
  books: Proptype.array,
};

export default Collection;
