import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../src/Components/Header&Footer/Header';
import Footer from '../src/Components/Header&Footer/Footer';
import HeadlinePage from './Components/HeadlinePage';
import ArticlePage from './Components/ArticlePage';

function App() {

  const [news, setNews] = useState([]);
  const [errorStatus, setErrorStatus] = useState();

  const getNews = async () => {
    try {
      const response = await axios.get(process.env.REACT_APP_NEWSDATA); //Get method retrieves information for given URI
      setNews(response.data.response.results);
    } catch (error) {
      setErrorStatus(error.message);
    }
  };

  useEffect(() => {
    getNews();
  }, []);


  return (
    <main>
      <Header />
      <div className='container'>
        <Router>
          {errorStatus && <p>There is an error: {errorStatus}</p>}
          {!errorStatus && news.length === 0 ? <p>Loading News...</p> :
            <>
              <Routes>
                <Route path="/" element={<HeadlinePage news={news} />} />
                <Route path="/articles/:id" element={<ArticlePage news={news} />} />
              </Routes>
            </>
          }
        </Router>
      </div>
      <br />
      <Footer />
    </main>
  );
}

export default App;
