import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Katalog from "./components/katalog";
import Customhero from "./components/CustomHero";
import Category from "./components/Category/Category";
import Custom from "./components/Custom";
import MedicalFacilities from "./components/MedicalFacilities";
import Custom2 from "./components/Custom2";
import DostavkaPage from "./components/DostavkaPage";
import ProductDetailsPage from "./components/ProductDetailsPage";
import UslugiPage from "./components/UslugiPage";
import StatyaPage from "./components/StatyaPage";
import OplataPage from "./components/OplataPage";
import ClientData from "./components/ClientData";
import Brand from "./components/Brand";
import Information from "./components/Information";
import CompanyNews from "./components/CompanyNews";
import Location from "./components/Location";
import FotterTop from "./components/footerTop";
import Products from "./components/ProductDetailsPage";



const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <main className="app__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/katalog" element={<Katalog />} />
            <Route path="/dostavka" element={<DostavkaPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<ProductDetailsPage />} />
            <Route path="/uslugi" element={<UslugiPage />} />
            <Route path="/statya" element={<StatyaPage />} />
            <Route path="/oplata" element={<OplataPage />} />
          </Routes>
          <Customhero />
          <Products />
          <MedicalFacilities />
          <Custom />
          <Category/>
          <Custom2 />
          <ClientData />
          <Brand />
          <Information />
          <CompanyNews />
          <Location />
          <FotterTop />
        </main>
        <Footer />
      </BrowserRouter>
      <style jsx>{`
        .app {
          font-family: "Arial, sans-serif";
        }
        .app__content {
          padding: 20px;
          background-color: #f9f9f9;
          min-height: calc(100vh - 200px); /* Adjust based on header/footer height */
        }
        .app__footer {
          padding: 20px;
          background-color: #333;
          color: #fff;
          text-align: center;
        }
      `}</style>
    </div>
  );
};

export default App;
