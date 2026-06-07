import { useState, useEffect } from 'react';

const galleryImages = [
  { url: '/images/gallery/IMG_3568.jpg' },
  { url: '/images/gallery/IMG_5069.jpg' },
  { url: '/images/gallery/IMG_5676.jpg' },
  { url: '/images/gallery/IMG_6502.jpg' },
  { url: '/images/gallery/IMG_7116.jpg' },
  { url: '/images/gallery/IMG_7357.jpg' },
  { url: '/images/gallery/IMG_7612.jpg' },
  { url: '/images/gallery/IMG_6919.jpg' },
  { url: '/images/gallery/39f0b7f8-3b44-415d-9446-f9becc6ed314.jpg' },
  { url: '/images/gallery/c186295c-a66b-43ae-87b1-f62b24fab9d1.jpg' }
];

export default function Memories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const nextIndex = (currentIndex + 1) % galleryImages.length;

  useEffect(() => {
    const interval = setInterval(() => {
      // Trigger flip
      setIsFlipped(true);

      // Halfway through transition (400ms), change index and unflip
      setTimeout(() => {
        setCurrentIndex(nextIndex);
        setIsFlipped(false);
      }, 400);

    }, 4000); // 4-second auto rotation

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="section memories-section" id="memories">
      <div className="container">
        <div className="section-header">
          <span className="section-label">Moments</span>
          <h2 className="section-title">Memories</h2>
          <p className="section-subtitle">
            A glimpse into my engineering journey, university life, hands-on lab sessions, and robotics projects.
          </p>
        </div>

        <div className="memories-container">
          {/* Main Showcase: 3D Auto-Flipping Card */}
          <div className="showcase-wrapper">
            <div className="flip-card-container">
              <div className={`flip-card-inner ${isFlipped ? 'flipped' : ''}`}>
                
                {/* Front Side (Current Image) */}
                <div className="flip-card-front">
                  <img src={galleryImages[currentIndex].url} alt="Engineering Memory" className="gallery-img" />
                </div>

                {/* Back Side (Next Image) */}
                <div className="flip-card-back">
                  <img src={galleryImages[nextIndex].url} alt="Engineering Memory" className="gallery-img" />
                </div>

              </div>
            </div>
          </div>

          {/* Side Grid: Elegant thumbnails of other moments */}
          <div className="gallery-grid">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className={`gallery-grid-item ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  if (idx === currentIndex) return;
                  setIsFlipped(true);
                  setTimeout(() => {
                    setCurrentIndex(idx);
                    setIsFlipped(false);
                  }, 400);
                }}
              >
                <img src={img.url} alt="Memory Thumbnail" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
