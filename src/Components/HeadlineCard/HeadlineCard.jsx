import HeadlineTitle from "./HeadlineTitle"
import Thumbnail from "./Thumbnail"


const HeadlineCard = ({ webTitle, thumbnail }) => {

    return (
        <div className="card">
            <Thumbnail className="card-img-top" src={thumbnail} alt={webTitle} />
            <HeadlineTitle className="card-title" title={webTitle} />
        </div>
    )
}

export default HeadlineCard;

