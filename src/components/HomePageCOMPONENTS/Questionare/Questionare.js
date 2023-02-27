import React, { useState } from "react";
import Subscribe from "../../Subscribe";
import "./Questionare.css";

function Questionnaire() {
  const [options, setOptions] = useState([
    {
      id: 1,
      label: "Do you feel a weight on your chest that doesn’t let you sleep?",
      checked: false,
    },
    {
      id: 2,
      label:
        "Do you feel an increase in anger or frustration or irritability that was not there earlier?",
      checked: false,
    },
    {
      id: 3,
      label:
        "Do you feel like you have too many things to do or too many issues to cope with or you can’t rest or even breathe?",
      checked: false,
    },
    {
      id: 4,
      label:
        "Do you find yourself delaying some decisions that you know you eventually have to take?",
      checked: false,
    },
    {
      id: 5,
      label:
        "Do you just feel that you’ve not felt happy and at peace for some time now?",
      checked: false,
    },
    {
      id: 6,
      label:
        "Have you felt like you have lost control over your emotions, your ability to deal with stress or maybe lost control over your life?",
      checked: false,
    },
    { id: 7, label: "Have you ever felt helpless?", checked: false },
    {
      id: 8,
      label: "Do you feel lonely, lost or like no one understands you?",
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
        <h2 style={{textAlign: "center"}}>*Please check all the boxes where your answer is YES..</h2>
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
        <h2 style={{textAlign: "center", fontSize: '2rem', width: '90vw'}}>
          If you have checked ANY of the boxes above you are invited to take our first free 40 minutes session now 👇
        </h2>
      </div>
    </div>
  );
}

export default Questionnaire;
