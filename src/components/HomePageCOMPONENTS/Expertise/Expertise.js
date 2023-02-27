import React, { useState } from "react";
import "./Expertise.css";
import image1 from '../../../assets/Expertise/personalGrowth.png'
import image2 from '../../../assets/Expertise/counselling.png'
import image3 from '../../../assets/Expertise/relationship.png'
import image4 from '../../../assets/Expertise/procastination.png'
import image5 from '../../../assets/Expertise/timeManagement.png'
import image6 from '../../../assets/Expertise/self-esteem.png'
import image7 from '../../../assets/Expertise/anxiety.png'
import image8 from '../../../assets/Expertise/emotions.png'
import image9 from '../../../assets/Expertise/expression.png'
import image10 from '../../../assets/Expertise/angry.png'


const expertiseData = [
  { id: 1, name: "Personal growth", image: image1 },
  { id: 2, name: "Anxiety management", image: image2 },
  { id: 3, name: "Relationship issues", image: image3 },
  { id: 4, name: "Time management", image: image4 },
  { id: 5, name: "Procrastination", image: image5 },
  { id: 6, name: "Self-esteem", image: image6 },
  { id: 7, name: "Stress management ", image: image7 },
  { id: 8, name: "Emotional intelligence and resilience", image: image8 },
  { id: 9, name: "Creative expression and finding purpose", image: image9 },
  { id: 10, name: "Anger management", image: image10 },
];

const Expertise = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleHover = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div className="expertiseDiv">
        <h1 style={{ paddingTop: '4rem', paddingBottom: '3rem'}}>We can help you with...</h1>
    <div className="expertise-list">
      {expertiseData.map((expertise) => (
        <div
          key={expertise.id}
          className={`expertise-item ${hoveredId === expertise.id ? "hovered" : ""}`}
          onMouseEnter={() => handleHover(expertise.id)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="expertise-icon">
          <img src={expertise.image} alt={expertise.name} />
          </div>
          <div className="expertise-name">{expertise.name}</div>
          <p>And much more...</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Expertise;
