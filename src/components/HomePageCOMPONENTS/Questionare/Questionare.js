import React, { useState } from "react";
import Subscribe from "../../Subscribe";
import "./Questionare.css";

function Questionnaire() {
  const [options, setOptions] = useState([
    {
      id: 1,
      label: "Do you find yourself worrying excessively about things that are out of your control or unlikely to happen?",
      checked: false,
    },
    {
      id: 2,
      label:
        "Do you feel like you're lacking motivation or direction in your life, and don't know how to move forward or find purpose?",
      checked: false,
    },
    {
      id: 3,
      label:
        "Are you feeling anxious or nervous in social situations, around others, or just in general?",
      checked: false,
    },
    {
      id: 4,
      label:
        "Have you been experiencing problems in your relationships that are causing you emotional distress or pain?",
      checked: false,
    },
    {
      id: 5,
      label:
        "Are you struggling to start or complete tasks that you know you need to do, despite knowing their importance?",
      checked: false,
    },
    {
      id: 6,
      label:
        "Are you feeling more irritable or easily frustrated than usual, without knowing the reason why?",
      checked: false,
    },
    { id: 7, label: "Do you find yourself putting off important decisions or tasks until the last minute, causing you to feel more stress or pressure?", checked: false },
    {
      id: 8,
      label: "Are you feeling more irritable or easily frustrated than usual, without knowing the reason why?",
      checked: false,
    },
  ]);

  const handleOptionChange = (id) => {
    const newOptions = [...options];
    const optionIndex = newOptions.findIndex((option) => option.id === id);
    newOptions[optionIndex] = {
      ...newOptions[optionIndex],
      checked: !newOptions[optionIndex].checked,
    };
    setOptions(newOptions);
  };

  return (
    <div className="parent">
      <div>
        <h1 style={{fontSize: '3rem'}}>Are you wondering if our sessions are for you?</h1>
        <h2 style={{textAlign: "center", paddingBottom:'1.5rem'}}>*Please check all the boxes where your answer is YES..</h2>
      </div>
      <div className="questionnaire">
        {options.map((option) => (
          <label key={option.id}>
            <input
              className="checkbox"
              type="checkbox"
              checked={option.checked}
              onChange={() => handleOptionChange(option.id)}
            />
            {option.label}
          </label>
        ))}
      </div>
      <div>
        <h2 style={{textAlign: "center", fontSize: '2rem', width: '90vw', paddingTop:'2rem'}}>
          If you have checked ANY of the boxes above you are invited to take our first free 40 minutes session now 👇
        </h2>
      </div>
    </div>
  );
}

export default Questionnaire;
