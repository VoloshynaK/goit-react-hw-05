export default function MovieReviews ({reviews}) {
    return (
        <ul>
            {reviews.map((review) => {
                return (
                    <li key={review.id}>
                        <p>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>
                )
            })}
        </ul>
      )
}