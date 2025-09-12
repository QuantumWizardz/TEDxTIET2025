import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import Image9 from '../assets/gridimages/Image9.webp';
import Image3 from '../assets/gridimages/Image3.webp';
import Image4 from '../assets/gridimages/Image4.webp';
import Image5 from '../assets/gridimages/Image5.webp';
import Image1 from '../assets/gridimages/Image1.webp';
import Image6 from '../assets/gridimages/Image6.webp';
import Image7 from '../assets/gridimages/Image7.webp';
import Image8 from '../assets/gridimages/Image8.webp';
import Image2 from '../assets/gridimages/Image2.webp';
import Image10 from '../assets/gridimages/Image10.webp';
import EcGrid from './EcGrid.jsx';
const placeholderImages = [
  Image9,
  Image7,
  Image10,
  Image8,
  Image2,
  Image6,
  Image3,
  Image5,
  Image1,
  Image4
];

const teamMembers = [
  { name: "Japneet Khanna", position: "Lead Organizer" },
  { name: "Pranjal Batish", position: "Joint Lead" },
  { name: "Tanay Mukker", position: "Joint Lead" },
  { name: "Aman", position: "Co Lead Organizer" },
  { name: "Shambhavi Sharma", position: "Marketing and EC Lead" },
  { name: "Amit Katoch", position: "Events and Outreach Lead" },
  { name: "Raghav Jindal", position: "Marketing and Operations Lead" },
  { name: "Rohit Arora", position: "Social Media Lead" },
  { name: "Priyam Ganguli", position: "Design and EC Lead" },
  { name: "Bhavya Arora", position: "Fin and Doc Lead" },
];

export const EbGrid = ({
  items,
  className = "",
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
  title = "Executive Board",
}) => {
  const rootRef = useRef(null);
  const fadeRef = useRef(null);
  const setX = useRef(null);
  const setY = useRef(null);
  const pos = useRef({ x: 0, y: 0 });

  const demo = teamMembers.map((member, index) => ({
    image: placeholderImages[index],
    title: member.name,
    position: member.position,
    borderColor: [
      "#e54646ff",
      "#b91024ff",
      "#f50b3aff",
      "#EF4444",
      "#be3535ff",
      "#f15757ff",
    ][index % 6],
    gradient: `linear-gradient(${135 + ((index * 15) % 360)}deg, ${[
      "#f50b3aff",
      "#e54646ff",
      "#EF4444",
      "#be3535ff",
      "#f15757ff",
      "#b91024ff",
    ][index % 6]
      }, #000)`,
    url: "https://example.com",
  }));

  const data = items?.length ? items : demo;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    setX.current = gsap.quickSetter(el, "--x", "px");
    setY.current = gsap.quickSetter(el, "--y", "px");

    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };

    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x, y) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
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

  const handleCardClick = (url) => {
    if (url && url !== "https://example.com") {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const handleCardMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--mouse-x", `${x}%`);
    card.style.setProperty("--mouse-y", `${y}%`);
  };

  const handleCardLeave = (e) => {
    const card = e.currentTarget;
    card.style.setProperty("--mouse-x", "50%");
    card.style.setProperty("--mouse-y", "50%");
  };

  return (
    <>
      {/* Global style to set body background to black */}
      <style jsx global>{`
        body {
          background-color: black;
          margin: 0;
          padding: 0;
        }
      `}</style>

      <style jsx>{`
      @media (max-width: 1000px) {
  .chroma-card {
    animation: float 3s ease-in-out infinite;
    background: rgba(229, 70, 70, 0.15) !important;
    /* keep red background */
    border-color: #e54646;
  }

  /* Disable spotlight hover effect for mobile */
  .chroma-card::before,
  .chroma-overlay,
  .chroma-fade {
    display: none !important;
  }
}
        .team-section {
          padding: 2rem 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .team-header {
          text-align: center;
          margin-bottom: 2rem;
        }
        .team-title {
          color: white;
          font-size: 2.5rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin: 0 0 0.5rem 0;
        }
        .team-subtitle {
          color: #aaa;
          font-size: 1rem;
          margin: 0 0 1.5rem 0;
        }

        .chroma-grid {
          position: relative;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: repeat(3, 190px);
          grid-template-rows: repeat(5, auto);
          justify-content: center;
          gap: 0.75rem;
          max-width: 1440px;
          margin: 0 auto;
          padding: 1rem;
          box-sizing: border-box;

          --x: 50%;
          --y: 50%;
          --r: 220px;
        }

        /* Updated Grid positions */

        /* Row 1: 1 card centered in middle column */
        .chroma-grid > article:nth-child(1) {
          grid-column: 2 / 3;
          justify-self: center;
          grid-row: 1;
        }

        /* Row 2: 2 cards in columns 1 and 3 */
        .chroma-grid > article:nth-child(2) {
          grid-column: 1 / 2;
          grid-row: 2;
        }
        .chroma-grid > article:nth-child(3) {
          grid-column: 3 / 4;
          grid-row: 2;
        }

        /* Row 3: 1 card centered in middle column */
        .chroma-grid > article:nth-child(4) {
          grid-column: 2 / 3;
          justify-self: center;
          grid-row: 3;
        }

        /* Row 4: 3 cards in columns 1, 2, 3 */
        .chroma-grid > article:nth-child(5) {
          grid-column: 1 / 2;
          grid-row: 4;
        }
        .chroma-grid > article:nth-child(6) {
          grid-column: 2 / 3;
          grid-row: 4;
        }
        .chroma-grid > article:nth-child(7) {
          grid-column: 3 / 4;
          grid-row: 4;
        }

        /* Row 5: 3 cards in columns 1, 2, 3 */
        .chroma-grid > article:nth-child(8) {
          grid-column: 1 / 2;
          grid-row: 5;
        }
        .chroma-grid > article:nth-child(9) {
          grid-column: 2 / 3;
          grid-row: 5;
        }
        .chroma-grid > article:nth-child(10) {
          grid-column: 3 / 4;
          grid-row: 5;
        }

        @media (max-width: 1124px) {
          .chroma-grid {
            grid-template-columns: repeat(auto-fit, minmax(190px, 190px));
            gap: 0.5rem;
            padding: 0.5rem;
            max-width: 100%;
          }
        }

        @media (max-width: 480px) {
          .chroma-grid {
            grid-template-columns: 190px;
            gap: 0.75rem;
            padding: 1rem;
          }
          .chroma-grid > article {
            grid-column: auto !important;
            grid-row: auto !important;
          }
        }

        .chroma-card {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 190px;
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid #333;
          transition: border-color 0.3s ease;
          background: var(--card-gradient);

          --mouse-x: 50%;
          --mouse-y: 50%;
          --spotlight-color: rgba(255, 255, 255, 0.3);
          cursor: pointer;
        }

        .chroma-card:hover {
          border-color: var(--card-border);
        }

        .chroma-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 70%);
          pointer-events: none;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 2;
        }

        .chroma-card:hover::before {
          opacity: 1;
        }

        .chroma-img-wrapper {
          position: relative;
          z-index: 1;
          max-height: 160px;
          background: transparent;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 10px;
          box-sizing: border-box;
          border-radius: 10px 10px 0 0;
          overflow: hidden;
        }

        .chroma-img-wrapper img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          display: block;
          border-radius: 10px;
        }

.chroma-info {
  position: relative;
  z-index: 1;
  padding: 0.75rem 1rem;
  color: #fff;
  font-family: system-ui, sans-serif;
  display: block; /* stack vertically */
}

.chroma-info .role {
  color: #e54646; /* red */
  font-weight: bold;
  font-size: 1.2rem; /* increased size */
  white-space: nowrap;
}


.chroma-info .handle {
  color: #aaa;
  margin-top: 0.25rem;
}


        .chroma-overlay {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 3;
          backdrop-filter: grayscale(1) brightness(0.78);
          -webkit-backdrop-filter: grayscale(1) brightness(0.78);
          background: rgba(0, 0, 0, 0.001);

          mask-image: radial-gradient(
            circle var(--r) at var(--x) var(--y),
            transparent 0%,
            transparent 15%,
            rgba(0, 0, 0, 0.1) 30%,
            rgba(0, 0, 0, 0.22) 45%,
            rgba(0, 0, 0, 0.35) 60%,
            rgba(0, 0, 0, 0.5) 75%,
            rgba(0, 0, 0, 0.68) 88%,
            white 100%
          );
          -webkit-mask-image: radial-gradient(
            circle var(--r) at var(--x) var(--y),
            transparent 0%,
            transparent 15%,
            rgba(0, 0, 0, 0.1) 30%,
            rgba(0, 0, 0, 0.22) 45%,
            rgba(0, 0, 0, 0.35) 60%,
            rgba(0, 0, 0, 0.5) 75%,
            rgba(0, 0, 0, 0.68) 88%,
            white 100%
          );
        }

        .chroma-fade {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 4;
          backdrop-filter: grayscale(1) brightness(0.78);
          -webkit-backdrop-filter: grayscale(1) brightness(0.78);
          background: rgba(0, 0, 0, 0.001);

          mask-image: radial-gradient(
            circle var(--r) at var(--x) var(--y),
            white 0%,
            white 15%,
            rgba(255, 255, 255, 0.9) 30%,
            rgba(255, 255, 255, 0.78) 45%,
            rgba(255, 255, 255, 0.65) 60%,
            rgba(255, 255, 255, 0.5) 75%,
            rgba(255, 255, 255, 0.32) 88%,
            transparent 100%
          );
          -webkit-mask-image: radial-gradient(
            circle var(--r) at var(--x) var(--y),
            white 0%,
            white 15%,
            rgba(255, 255, 255, 0.9) 30%,
            rgba(255, 255, 255, 0.78) 45%,
            rgba(255, 255, 255, 0.65) 60%,
            rgba(255, 255, 255, 0.5) 75%,
            rgba(255, 255, 255, 0.32) 88%,
            transparent 100%
          );

          opacity: 1;
          transition: opacity 0.25s ease;
        }
      `}</style>
      <section className="team-section">
        <div className="team-header">
          <h2 className="team-title">{title}</h2>
          <p className="team-subtitle">OUR TEAM</p>
        </div>
        <div
          className={`chroma-grid ${className}`}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          ref={rootRef}
        >
          {data.map(({ image, title, position, borderColor, gradient, url }, i) => (
            <article
              key={i}
              className="chroma-card"
              style={{
                "--card-border": borderColor,
                "--card-gradient": gradient,
              }}
              onClick={() => handleCardClick(url)}
              onMouseMove={handleCardMove}
              onMouseLeave={handleCardLeave}
            >
              <div className="chroma-img-wrapper">
                <img src={image} alt={title} />
              </div>
              <div className="chroma-info">
                <div className="role">{title}</div>
                <div className="handle">{position}</div>
              </div>
            </article>
          ))}
          <div className="chroma-fade" ref={fadeRef}></div>
          <div className="chroma-overlay"></div>
        </div>
      </section>
      <EcGrid />

    </>
  );
};



export default EbGrid;