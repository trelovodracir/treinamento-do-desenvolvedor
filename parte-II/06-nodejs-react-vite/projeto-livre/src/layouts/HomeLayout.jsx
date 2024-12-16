// src/layouts/HomeLayout.jsx
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

function HomeLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renderiza o componente correspondente à rota */}
      </main>
    </>
  );
}

export default HomeLayout;