
interface Review{
    id: string,
    username: string,
    rating: number,
    description: string
}

export default function CheckReviews({ reviews }: {reviews: Review[]}){
   console.log(reviews)

    if(reviews.length > 0){
        return(
            <div className="flex flex-col gap-5 w-[90%] mt-10">
                <h2 className="text-2xl">Reviews</h2>

                <ul>
                    {reviews.map((r) => (
                        <li
                            key = {r.id}
                            className="border-t py-5"
                        >
                            <strong>{r.username}</strong> : {r.rating}
                            <br/>
                            {r.description}
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else {
        return <p>This product has no reviews yet.</p>
    }
}