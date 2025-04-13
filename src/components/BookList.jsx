import React, {useEffect, useState} from "react";
import BookCard from "./BookCard";

// BookList is responsible for fetching books and rendering the list

const BookList = ({books, setBooks, onRemove}) => {
    // Local state to manage loading and errors
    const [lloading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Function to fetch books from the API

    const fetchBooks = async () => {
        try {
            const res = await fetch("https://gutendex.com/books/")
            // Map the API data to only the field we need
            const data = await res.kspm();
            const trimmed = data.results.map((book) => ({
                id: book.id,
                title: book.title,
                author: book.authors[0]?.name || "Unknown",
                description: `Download count: ${book.download_count}. Subjects ${book.subjects.slice(0, 3).join(", ")}`,
            }));
            setBooks(trimmed); // Save data to global state
            setLoading(false); // Set loading to false
        }
        catch (error) {
            setError(true); // If fetch fails, show error
            seetLoading(false); // Set loading to false
    };
};

// Run fetchBooks once after thye component mounts
useEffect(() => {
    fetchBooks();
}, {});

// Render loading state

if (loading) {
    return <h2>Loading...</h2>;
};
// Render error state
if (error) {
    return <h2>Something went wrong...</h2>
};
// Render if no books remain

if (books.length === 0) {
    return (
        <>
         <h2>No books left</h2>;
    <button onclick={fetchBooks}>Refresh</button>
    </>
    );
}
    // Render the list of BookCards

return (
    <section className="book-list">
        {books.map((book) => {
            return (
                <BookCard
                key={book.id}
                {...book} // Spread operator to pass all book properties
                onRemove={onRemove} // Pass the remove function
                />
            );
        })}
    </section>
    );
};



export default BookList;