import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import HomeLayout from './layouts/HomeLayout';
import MyTimeline from './pages/MyTimeline';
import Portfolio from './pages/Portfolio';
import DefaultLayout from './layouts/DefaultLayout';

function App() {

  return (
    <Router>
      <Routes>
        {/* Rota para a Home */}
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>

        {/* Rotas para as demais páginas */}
        <Route path="/" element={<DefaultLayout />}>
          <Route path="about-me" element={<AboutMe />} />
          <Route path="my-timeline" element={<MyTimeline />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App