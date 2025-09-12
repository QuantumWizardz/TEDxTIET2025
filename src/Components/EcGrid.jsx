import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./EcGrid.css";
import Img1 from "../assets/gridimages/img1.webp";
import Img3 from "../assets/gridimages/img3.webp";
import Img4 from "../assets/gridimages/img4.webp";
import Img5 from "../assets/gridimages/img5.webp";
import Img6 from "../assets/gridimages/img6.webp";
import Img7 from "../assets/gridimages/img7.webp";
import Img8 from "../assets/gridimages/Img8.webp";
import Img9 from "../assets/gridimages/Img9.webp";

import Img12 from "../assets/gridimages/Img12.webp";
import Img13 from "../assets/gridimages/Img13.webp";
import Img14 from "../assets/gridimages/Img14.webp";
import Img15 from "../assets/gridimages/Img15.webp";
import Img16 from "../assets/gridimages/Img16.webp";
import Img17 from "../assets/gridimages/Img17.webp";
import Img18 from "../assets/gridimages/Img18.webp";
import Img19 from "../assets/gridimages/Img19.webp";
import Img20 from "../assets/gridimages/Img20.webp";
import Img21 from "../assets/gridimages/Img21.webp";
import Im from "../assets/gridimages/im.webp";

const dummyimages = [
  Img5, Img6, Img7, Img8, Img9, Im, Img12, Img13, Img14,
  Img15, Img16, Img17, Img18, Img19, Img20, Img21,
];

const titles = [
  "Puneet Kumar", "Rohan Sharma", "Poorva", "Mehul Kujur",
  "Pavni Goel", "Khyati Goyal", "Kaushik Arora", "Daksh Sachdeva",
  "Disha Verma", "Anushka Pandey", "Birapar Singh", "Aniket Gupta",
  "Aanya Garg", "Atishay Jain", "Aastha Mahajan", "Sanya",
];

export const EcGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  // Original 3 cards + 16 dummy cards = 19 total
  const demo = [
    {
      image: Img1,
      title: "Vrinda Chhabra",
      borderColor: "#e54646ff",
      gradient: "linear-gradient(145deg, #f15757ff, #000)",
      url: "https://github.com/",
    },
    {
      image: Img3,
      title: "Surya Partap Singh",
      borderColor: "#EF4444",
      gradient: "linear-gradient(195deg, #EF4444, #000)",
      url: "https://kaggle.com/",
    },
    {
      image: Img4,
      title: "Shardool",
      borderColor: "#be3535ff",
      gradient: "linear-gradient(225deg, #b63e3eff, #000)",
      url: "https://github.com/",
    },
    // Generate 16 more dummy cards
    ...Array.from({ length: 16 }, (_, i) => ({
      image: dummyimages[i],
      title: titles[i],
      borderColor: ["#e54646ff", "#b91024ff", "#f50b3aff", "#f50b3aff", "#f50b3aff", "#f50b3aff"][i % 6],
      gradient: `linear-gradient(${135 + (i * 10) % 360}deg, ${["#f50b3aff", "#f50b3aff", "#f50b3aff", "#EF4444", "#f50b3aff", "#f50b3aff"][i % 6]
        }, #000)`,
      url: "https://example.com",
    })),
  ];

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        if (rootRef.current) {
          rootRef.current.style.setProperty("--x", `${pos.current.x}px`);
          rootRef.current.style.setProperty("--y", `${pos.current.y}px`);
        }
      },
      overwrite: true,
    });
  };

  const handleMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    moveTo(e.clientX - r.left, e.clientY - r.top);
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleLeave = () => {
    gsap.to(fadeRef.current, {
      opacity: 1,
      duration: fadeOut,
      overwrite: true,
    });
  };

  // --- New combined event handlers for spotlight on cards ---
  const handleGridMouseMove = (e) => {
    const r = rootRef.current.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;

    // Find the hovered card
    const targetCard = e.target.closest(".chromaa-card");
    if (!targetCard || !rootRef.current.contains(targetCard)) return;

    // Calculate spotlight position inside hovered card
    const rect = targetCard.getBoundingClientRect();
    const mouseX = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseY = ((e.clientY - rect.top) / rect.height) * 100;

    // Update spotlight position for hovered card
    targetCard.style.setProperty("--mouse-x", `${mouseX}%`);
    targetCard.style.setProperty("--mouse-y", `${mouseY}%`);

    // Reset spotlight for other cards
    rootRef.current.querySelectorAll(".chromaa-card").forEach(card => {
      if (card !== targetCard) {
        card.style.setProperty("--mouse-x", "50%");
        card.style.setProperty("--mouse-y", "50%");
      }
    });

    // Fade overlay on grid as before
    gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
  };

  const handleGridMouseLeave = () => {
    // Reset spotlight on all cards to center
    rootRef.current.querySelectorAll(".chromaa-card").forEach(card => {
      card.style.setProperty("--mouse-x", "50%");
      card.style.setProperty("--mouse-y", "50%");
    });
    // Fade overlay back in
    gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut, overwrite: true });
  };

  const handleCardClick = (url) => {
    // if (url) {
    //   window.open(url, "_blank", "noopener,noreferrer");
    // }
  };

  return (
    <>
      <h1 className="committee-heading">EXECUTIVE COMMITTEE</h1>
      <div
        ref={rootRef}
        className={`chromaa-grid ${className}`}
        onMouseMove={handleGridMouseMove}
        onMouseLeave={handleGridMouseLeave}
        onPointerMove={handleMove}
        onPointerLeave={handleLeave}
        style={{ "--r": `${radius}px` }}
      >
        {data.map((c, i) => (
          <article
            key={i}
            className="chromaa-card"
            onClick={() => handleCardClick(c.url)}
            style={{
              "--card-border": c.borderColor || "transparent",
              "--card-gradient": c.gradient,
              cursor: c.url ? "pointer" : "default",
              // Initialize spotlight center
              "--mouse-x": "50%",
              "--mouse-y": "50%",
            }}
          >
            <div className="chromaa-img-wrapper">
              <img src={c.image} alt={c.title} loading="lazy" />
            </div>
            <footer className="chromaa-info">
              <h3 className="name">{c.title}</h3>
              {c.handle && <span className="handle">{c.handle}</span>}
              <p className="role">{c.subtitle}</p>
              {c.location && <span className="location">{c.location}</span>}
            </footer>
          </article>
        ))}
        <div className="chromaa-overlay" />
        <div ref={fadeRef} className="chromaa-fade" />
      </div>
    </>
  );
};

export default EcGrid;