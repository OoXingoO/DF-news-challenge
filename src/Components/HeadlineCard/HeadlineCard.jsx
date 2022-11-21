import HeadlineTitle from "./HeadlineTitle"
import Thumbnail from "./Thumbnail"

const HeadlineCard = ({ webTitle, thumbnail }) => {

    return (
        <div className="card">
            <Thumbnail className="card-img-top mx-auto" src={thumbnail} alt={webTitle} />
            <HeadlineTitle className="card-title" title={webTitle} />
            <details>
                <summary>Click here to read more</summary>
            </details>
        </div>
    )
}

export default HeadlineCard;

