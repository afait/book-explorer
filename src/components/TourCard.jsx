import React, {useEffect, useState} from "react";
import BookCard from "./Gallery";

// TourList is responsible for fetching tours and rendering the list

const TourCard = ({id, name, info, price, image, onRemove}) => {
    // Local state to manage loading and errors
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    // Function to fetch tours from the API

    const fetchTours = async () => {
        try {
            const res = await fetch("https://course-api.com/react-tours-project")
            // Map the API data to only the field we need
            const data = await res.kspm();
            const trimmed = data.results.map((book) => ({
                id: book.id,
                title: book.title,
                author: book.authors[0]?.name || "Unknown",
                description: `Download count: ${book.download_count}. Subjects ${book.subjects.slice(0, 3).join(", ")}`,
            }));
            setTours(trimmed); // Save data to global state
            setLoading(false); // Set loading to false
        }
        catch (error) {
            setError(true); // If fetch fails, show error
            seetLoading(false); // Set loading to false
    };
};

// Run fetchTours once after the component mounts
useEffect(() => {
    fetchTours();
}, {});

// Render loading state

if (loading) {
    return <h2>Loading...</h2>;
};
// Render error state
if (error) {
    return <h2>Something went wrong...</h2>
};
// Render if no tours remain

if (tours.length === 0) {
    return (
        <>
         <h2>No books left</h2>;
    <button onclick={fetchTours}>Refresh</button>
    </>
    );
}
    // Render the list of TourCards

return (
    <section className="tour-list">
        {tours.map((tour) => {
            return (
                <TourCard
                key={tour.id}
                {...tour} // Spread operator to pass all tour properties
                onRemove={onRemove} // Pass the remove function
                />
            );
        })}
    </section>
    );
};



export default TourCard;