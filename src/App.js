import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../src/Components/Header&Footer/Header';
import Footer from '../src/Components/Header&Footer/Footer';
import HeadlinePage from './Components/HeadlinePage';
import ArticlePage from './Components/ArticlePage';

function App() {

  const [news, setNews] = useState([]);
  const [errorStatus, setErrorStatus] = useState();

  const getNews = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_NEWSDATA);
      setNews(response.data.results);
    } catch (error) {
      console.log(error);
      setErrorStatus(error.message);
    }
  };

  useEffect(() => {
    getNews();
  }, []);


  return (
    <main>
      {errorStatus && <p>There is an error: {errorStatus}</p>}
      {!errorStatus && news.length === 0 ? <p>Data is loading</p> :
        <>
          <Header />
          <div className='container'>
            <HeadlinePage news={news} />
            <ArticlePage news={news} />
          </div>
          <Footer />
        </>
      }
    </main>
  );
}

export default App;
