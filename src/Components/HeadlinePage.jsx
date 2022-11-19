import { Link } from 'react-router-dom';
import HeadlineCard from '../Components/HeadlineCard/HeadlineCard';

const HeadlinePage = ({ news }) => {

    const todaysNews = news.map(currentNews => {

        // const newsId = currentNews.id.replaceAll('/', '-');

        return (
            <div key={currentNews.id}>
                < Link to={`/articles/${currentNews.id.replaceAll("/", "-")}`} >
                    < HeadlineCard thumbnail={currentNews.fields.thumbnail} webTitle={currentNews.webTitle} />
                </Link>
            </div>
        )

    })

    return (
        <div>
            {todaysNews}
        </div>
    )
}

export default HeadlinePage
