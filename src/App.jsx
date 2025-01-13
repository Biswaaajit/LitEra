import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./AppLayout";
import HomePage from "./Pages/HomePages/HomePage";
import BookCollectionPage from "./Pages/CollectionPages/BookCollectionPage";
import BookAddPage from "./Pages/BookAddPage";
import NotFoundPage from "./Pages/NotFoundPage";
import BookCategory from "./Pages/CategoryPages/BookCategory";
import BookDetailsPage from "./Pages/BookDetailPages/BookDetailsPage";
import ErrorElement from "./Pages/ErrorElement";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "books/:bookId",
        element: <BookDetailsPage />,
        errorElement: <ErrorElement />,
      },
      {
        path: "categories/:category",
        element: <BookCategory />,
      },
      {
        path: "/collection",
        element: <BookCollectionPage />,
      },
      {
        path: "/add",
        element: <BookAddPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
