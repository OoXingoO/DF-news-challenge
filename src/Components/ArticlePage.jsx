import { useParams, Link } from 'react-router-dom';

import HeadlineTitle from '../Components/HeadlineCard/HeadlineTitle';
import Thumbnail from '../Components/HeadlineCard/Thumbnail';

const ArticlePage = ({ news }) => {

    const { id } = useParams();

    // eslint-disable-next-line
    const displayArticle = news?.map(currentNews => {
        const newsId = currentNews.id.replaceAll("/", "-");
        if (newsId === id) {
            return (
                <div key={newsId} className='row'>
                    <Thumbnail src={currentNews.fields.thumbnail} alt={currentNews.webTitle} className="img-fluid" />
                    <HeadlineTitle title={currentNews.fields.headline} />
                    <p className='article-body'>{replaceEveryNth(currentNews.fields.bodyText, ". ", "\n", 3).split('\n').map(e => <>{e}<br /><br /></>)}</p>
                    <Link to="/" className="article-link">Go back</Link>&nbsp;
                    <a href={currentNews.webUrl} className="article-link" target='_blank' rel='noreferrer'>Read on guardian news here</a>
                </div >
            )
        }
    })

    function replaceEveryNth(value, search, replacement, nthCount = 1) {
        let matchCount = 0;

        return String(value)
            .split(
                RegExp(`(${search})`)
            )
            .map(str =>
                ((str === search) && (++matchCount % nthCount === 0))
                    ? replacement
                    : str
            )
            .join('');
    }

    return (
        <div>
            {displayArticle}
        </div>
    )
}

export default ArticlePage


