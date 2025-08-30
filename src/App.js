import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import "./App.css";

import HeroSection from "./Components/HeroSection";
import TestimonialSlider from "./Components/TestimonialSlider";
import CustomNavbar from "./Components/navbar";
import Cards from "./Components/Cards.jsx";
import ProfileCard from "./Components/ProfileCard.jsx";
import Footer from "./Components/Footer.jsx";
import NotFound from "./Components/NotFound";
import Team from "./Components/Team.jsx";
import Sponsor from "./Components/Sponsor.jsx";
import Speaker from "./Components/Speaker.jsx";
import StatsOverview from "./Components/StatsOverview.jsx";
import Reveal from "./Components/Reveal"; // ✅ import preloader

// Scroll handler for /aboutus → testimonials
function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/aboutus") {
      const testimonials = document.getElementById("testimonials");
      if (testimonials) {
        testimonials.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show preloader for ~2s, then remove
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Reveal />; // ✅ Show preloader first
  }

  return (
    <div className="App">
      <CustomNavbar />
      <ScrollHandler />

      <Routes>
        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <header className="App-header">
                <HeroSection />
                <div id="testimonials"></div>
                <TestimonialSlider />
              </header>
              <StatsOverview />
              <Cards />
              <Footer />
            </>
          }
        />

        {/* Redirect /aboutus → home */}
        <Route path="/aboutus" element={<Navigate to="/" />} />

        {/* Optional direct component routes */}
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/cards" element={<Cards />} />
        <Route path="/profile" element={<ProfileCard />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/speakers" element={<Speaker />} />

        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
