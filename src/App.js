import './App.css';
import Header from '../src/Components/Header&Footer/Header';
import Footer from '../src/Components/Header&Footer/Footer';
import HeadlinePage from './Components/HeadlinePage';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <HeadlinePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
