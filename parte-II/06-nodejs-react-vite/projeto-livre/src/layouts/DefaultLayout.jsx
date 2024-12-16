// src/layouts/DefaultLayout.jsx
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renderiza o componente correspondente à rota */}
      </main>
      <Footer />
    </>
  );
}

export default DefaultLayout;
