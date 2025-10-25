import React, { useEffect } from "react";
import "./EventDetails.css";

const EventDetails = () => {
  useEffect(() => {
    const cursor = document.querySelector(".cursor-circle");
    const section = document.querySelector(".event-details");

    if (!cursor || !section) return;

    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    const moveCursor = (e) => {
      const rect = section.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const animate = () => {
      // Smooth easing for natural movement
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;
      cursor.style.transform = `translate(${currentX - 110}px, ${currentY - 160}px)`; 
      // 60 = half of 120px (cursor size)
      requestAnimationFrame(animate);
    };

    section.addEventListener("mousemove", moveCursor);
    animate();

    return () => {
      section.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <section className="event-details" id="event">
      <div className="cursor-circle"></div>

      <div className="event-container">
        <h2 className="event-title">TEDx Conference 2025</h2>
        <p className="event-tagline">Ideas Worth Spreading</p>

        <div className="event-info">
          <p><strong>Date:</strong> Coming Soon</p>
          <p><strong>Time:</strong> Revealing Soon</p>
          <p><strong>Venue:</strong> To Be Announced</p>
        </div>

        <div className="speakers">
          <h3>Featured Speakers</h3>
          <p>Speaker lineup will be revealed soon — stay tuned!</p>
        </div>

        <a
          href="https://www.instagram.com/reel/DQMF8zeidDn/"
          target="_blank"
          rel="noopener noreferrer"
          className="register-btn"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default EventDetails;
