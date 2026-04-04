import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SmoothScroller from './components/SmoothScroller';
import CustomCursor from './components/CustomCursor';
import PageLoader from './components/PageLoader';
import Navbar from './sections/Navbar';
import Footer from './sections/Footer';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import { ModalProvider } from './context/ModalContext';
import ContactModal from './components/ContactModal';

function App() {
  return (
    <ModalProvider>
      <BrowserRouter>
      <SmoothScroller>
        <div className="grain-overlay"></div>
        <CustomCursor />
        <PageLoader />
        
        <main className="app-main">
          <Navbar />
          <ContactModal />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/service/:slug" element={<ServiceDetail />} />
          </Routes>
          <Footer />
        </main>
      </SmoothScroller>
    </BrowserRouter>
    </ModalProvider>
  );
}

export default App;
