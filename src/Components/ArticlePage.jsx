import { useParams, Link } from 'react-router-dom';

import HeadlineTitle from '../Components/HeadlineCard/HeadlineTitle';
import Thumbnail from '../Components/HeadlineCard/Thumbnail';

const ArticlePage = ({ news }) => {

    const { id } = useParams();

    const displayArticle = news.map(currentNews => {
        const newsId = currentNews.id.replaceAll("/", "-");
        if (newsId === id) {
            return (
                <div key={id}>
                    <>
                        <Thumbnail src={currentNews.fields.thumbnail} alt={currentNews.webTitle} />
                        <HeadlineTitle title={currentNews.webTitle} />
                        <p>{currentNews.fields.bodyText}</p>
                    </>
                </div>
            )
        }
        return <Link to="/">Go back</Link>
    })

    return (
        <div>
            {displayArticle}
        </div>
    )
}

export default ArticlePage


