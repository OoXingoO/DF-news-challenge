import HeadlineTitle from "./HeadlineCard/HeadlineTitle"
import Thumbnail from "./HeadlineCard/Thumbnail"

const Article = ({ webTitle, webUrl, thumbnail, bodyText }) => {
    return (
        <div>
            <Thumbnail src={thumbnail} alt={webTitle} />
            <a href={webUrl} target="_blank" rel="noreferrer">
                <HeadlineTitle title={webTitle} />
            </a>
            <p>{bodyText}</p>
        </div>
    )
}

export default Article