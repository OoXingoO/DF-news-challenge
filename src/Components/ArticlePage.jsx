import HeadlineTitle from '../Components/HeadlineCard/HeadlineTitle';
import Thumbnail from '../Components/HeadlineCard/Thumbnail';

const ArticlePage = ({ news }) => {

    return (
        <div>
            {news.map(currentNews => (
                <>
                    <Thumbnail src={currentNews.fields.thumbnail} alt={currentNews.webTitle} />
                    <HeadlineTitle title={currentNews.webTitle} />
                    <p>{currentNews.fields.bodyText}</p>
                </>
            ))}

        </div>
    )
}

export default ArticlePage


