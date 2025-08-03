import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
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

  const handlers = useSwipeable({
    onSwipedLeft: () => nextImage(),
    onSwipedRight: () => prevImage(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  })

  return (
    <div className="slider-container">
      <h1 className="restaurant-title">Nabolsi Al Shahira</h1>

      <div className="image-wrapper" {...handlers}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slide-image"
        />
      </div>
    </div>
  )
}

export default App
