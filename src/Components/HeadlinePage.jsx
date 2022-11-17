import sampleNews from '../mockNewsData.json';
import HeadlineCard from '../Components/HeadlineCard/HeadlineCard';

const HeadlinePage = () => {

    const todaysNews = sampleNews.response.results.map(currentNews => {

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
