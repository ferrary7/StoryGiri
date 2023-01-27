import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css'

const Features = () => {
  return (
    <div style={{padding: '10rem'}}>
      <div className='featuresContainer' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10rem', paddingBottom: '10rem' }}>
        <div style={{ borderRadius: '50%', width: '200px', height: '200px' }}>
            <Link to='/ooo'>
             <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="Circle 1" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </Link>
          <h2 style={{textAlign: 'center'}}>Book a 1-1 Call</h2>
        </div>
        <div style={{ borderRadius: '50%', width: '200px', height: '200px' }}>
          <Link to='/blogs'>
             <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="Circle 2" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </Link>
          <h2 style={{textAlign: 'center'}}>Blogs</h2>
        </div>
        <div style={{ borderRadius: '50%', width: '200px', height: '200px' }}>
          <Link to='/events'>
             <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="Circle 3" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </Link>
          <h2 style={{textAlign: 'center'}}>Events</h2>
        </div>
      </div>
      <div className='featuresContainer' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10rem' }}>
        <div style={{ borderRadius: '50%', width: '200px', height: '200px' }}>
          <Link to='/videos'>
             <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="Circle 4" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </Link>
          <h2 style={{textAlign: 'center'}}>Videos</h2>
        </div>
        <div style={{ borderRadius: '50%', width: '200px', height: '200px' }}>
          <Link to='/courses'>
             <img src="https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000" alt="Circle 5" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
            </Link>
          <h2 style={{textAlign: 'center'}}>Courses</h2>
        </div>
      </div>
    </div>
  );
};

export default Features;



