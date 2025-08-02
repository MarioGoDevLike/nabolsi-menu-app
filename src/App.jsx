import { useState } from 'react'
import './App.css'

import menu1 from './assets/menu1.jpg'
import menu2 from './assets/menu2.jpg'
import menu3 from './assets/menu3.jpg'
import menu4 from './assets/menu4.jpg'

function App() {
  const images = [menu1, menu2, menu3, menu4]
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="menu-app">
      {/* Header */}
      <header className="header">
        <h1 className="restaurant-name">Nabolsi Al Shahira</h1>
        <p className="restaurant-tagline">Authentic Middle Eastern Cuisine Since 1982</p>
      </header>

      {/* Slider with arrows inside buttons */}
      <div className="slider-container">
        <button className="nav-button left" onClick={prevImage} aria-label="Previous Image">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        <div className="image-wrapper">
          <img
            src={images[currentIndex]}
            alt={`Menu ${currentIndex + 1}`}
            className="slide-image"
          />
        </div>

        <button className="nav-button right" onClick={nextImage} aria-label="Next Image">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
          </svg>
        </button>
      </div>

      {/* Thumbnails */}
      <div className="thumbnails">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>📍 Beirut, Lebanon — Open Daily 11AM–11PM</p>
        <p>📞 +961 1 234 567 | Follow us on Instagram <strong>@nabolsi.shahira</strong></p>
      </footer>
    </div>
  )
}

export default App
