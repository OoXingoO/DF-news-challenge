import HeadlineCard from '../Components/HeadlineCard/HeadlineCard';
import ArticlePage from './ArticlePage';

const HeadlinePage = ({ news }) => {

    const todaysNews = news.map(currentNews => {

        return <HeadlineCard key={currentNews.id} thumbnail={currentNews.fields.thumbnail} webTitle={currentNews.webTitle} />
    })

    return (
        <a href='/'>
            <div>
                {todaysNews}
            </div>
        </a>
    )
}

export default HeadlinePage
