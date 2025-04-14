import React, {useState} from "react";
import BookList from "./components/TourCard";

// Root component of the app
function App(){
  // Global state to hold the list of books
  const [books, setBooks] = useState([]);

  // Functino to remove a book by its ID
  const removeBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  };


return (
  <main>
    <h1>Book Explorer</h1>
    {/* Pass state and handlers down to the BookList componenet */}
    <TourList books={books} setBooks={setBooks} onRemove={removeBook} />
  </main>
)
}

export default App;