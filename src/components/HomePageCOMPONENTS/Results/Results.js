import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './Results.css';

const Results = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [numOfImages, setNumOfImages] = useState(images.length);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoplay) {
        setCurrentImage((currentImage + 1) % numOfImages);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [currentImage, autoplay, numOfImages]);

    
  const handlePrevClick = () => {
    setAutoplay(false);
    setCurrentImage((currentImage - 1 + numOfImages) % numOfImages);
  };

  const handleNextClick = () => {
    setAutoplay(false);
    setCurrentImage((currentImage + 1) % numOfImages);
  };

  return (<>
    <div className='overContainer'>
      <h1 style={{paddingBottom: '4rem', fontFamily: 'Poppins', fontWeight: '500'}}>Changes after our 1-1's👇</h1>
    <div className="result-container">
      <div className="left-arrow" onClick={handlePrevClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
      <div className="result">
        {images.map((image, index) => (
          <img
            key={index}
            className={index === currentImage ? 'active' : ''}
            src={image}
            alt={`Imagse ${index + 1}`}
          />
        ))}
      </div>
      <div className="right-arrow" onClick={handleNextClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    </div>
    </div>
    </>
  );
};

export default Results;
