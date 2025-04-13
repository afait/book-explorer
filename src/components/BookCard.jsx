import React, {useState} from "react";

// BookCard renders individual book details

const BookCard = ({id, title, author, description, onRemove}) => {
    // local state to toggle Read More / Show Less
    const [readMore, setReadMore] = useState(false);

    return (
        <article className="book-card">
        <h3>{title}</h3>
        <h5>{author}</h5>
        <p>
            {/* Show full description if readMore is true, other a slice */}
            {readMore ? description : `${description.substring(0, 80)}...`}
            <button onClick={() => setReadMore(!readMore)}>
                {/* Toggle button text */}
                {readMore ? "Show Less" : "Read More"}
            </button>
        </p>

        {/* Button to remove the book */}
        <button className="btn-remove" onClick={() => {
            onRemove(id)
        }}>Remove Book</button>
        </article>
    )
}
// Finished Creating Book Card
export default BookCard;