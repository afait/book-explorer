import React, {useState} from "react";

// BookCard renders individual book details

const TourList = ({tours, setTours, onRemove}) => {
    // local state to toggle Read More / Show Less
    const [error, setError] = useState(false);

    return (
        <article className="Tour-Card">
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
        }}>Remove Tour</button>
        </article>
    )
}
// Finished Creating Book Card
export default TourList;