// Development Components
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { APP_FOLDER_NAME } from '../globals/globals';

// Pages
import PageAbout from '../pages/PageAbout';
import PageFavs from '../pages/PageFavs';
import PageHome from '../pages/PageHome';
import PageSingleMovie from '../pages/PageSingleMovie';
import PageNotFound from '../pages/PageNotFound';

function App() {
  return (
    <BrowserRouter basename={APP_FOLDER_NAME}>
      <div className="wrapper">
        <Header />
          <main className="main-wrapper">
            <Routes>
              <Route path="/" element={<PageHome sort="popular" />} />
              <Route path="/sort/popular" element={<PageHome sort="popular" />} />
              <Route path="/sort/top-rated" element={<PageHome sort="top_rated" />} />
              <Route path="/sort/now-playing" element={<PageHome sort="now_playing" />} />
              <Route path="/sort/upcoming" element={<PageHome sort="upcoming" />} />
              <Route path="/movie/:id" element={<PageSingleMovie /> } />
              <Route path="about" element={<PageAbout />} />
              <Route path="favs" element={<PageFavs />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </main>
            <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
