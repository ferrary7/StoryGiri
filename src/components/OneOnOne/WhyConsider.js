import React from 'react'
import './OneOnOne.css'

function WhyConsider(props) {
  return (
    <div className="whyconsider">
        <div className={props.align}>
            <div className='whyimage' style={{backgroundImage: "url(" + props.image + ")"}}></div>
            <div className='whycontent'>
                <h3>{props.title}</h3>
                <p className='why'>{props.text}</p>
            </div>
        </div>
    </div>
  )
}

export default WhyConsider
