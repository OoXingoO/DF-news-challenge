import { Link } from 'react-router-dom';
import HeadlineCard from '../Components/HeadlineCard/HeadlineCard';

const HeadlinePage = ({ news }) => {

    const todaysNews = news?.map(currentNews => {

        const newsId = currentNews.id.replaceAll('/', '-');

        return (
            <div key={newsId}>
                < Link to={`/articles/${newsId}`} className='headline-link'>
                    < HeadlineCard thumbnail={currentNews.fields.thumbnail} webTitle={currentNews.webTitle} />
                </Link>
            </div>
        )
    })

    return (
        <div>
            <h2 className='welcome-text'>Welcome to DF News</h2>
            {todaysNews}
        </div>
    )
}

export default HeadlinePage
