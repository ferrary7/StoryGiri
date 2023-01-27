import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './AboutUsCard.css';

class AboutUsCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          teamMembers: [
            {
              name: "Shubham",
              position: "Position A",
              image: "https://media.istockphoto.com/id/1300512215/photo/headshot-portrait-of-smiling-ethnic-businessman-in-office.jpg?b=1&s=170667a&w=0&k=20&c=TXCiY7rYEvIBd6ibj2bE-VbJu0rRGy3MlHwxt2LHt9w="
            },
            {
              name: "Neel",
              position: "Position B",
              image: "https://img.freepik.com/free-photo/portrait-happy-young-woman-looking-camera_23-2147892777.jpg?w=2000"
            },
            {
                name: "Rajat",
                position: "Position C",
                image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
              name: "Aryan",
              position: "Position D",
              image: "https://images.unsplash.com/photo-1534614971-6be99a7a3ffd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            },
            {
              name: "Aditya",
              position: "Position E",
              image: "https://images.unsplash.com/photo-1499155286265-79a9dc9c6380?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60"
            },
            {
              name: "Raju",
              position: "Position F",
              image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_3ELUAraSJdzdVvyOYEfK2ow6D0v7vKjCFEfI_9PRxw8rJ76yPpc801zXcENooNy5Pc&usqp=CAU"
            }
          ],
          currentIndex: 0
        };
      }
    
      handlePreviousClick = () => {
        const { currentIndex, teamMembers } = this.state;
        if (currentIndex > 0) {
          this.setState({
            currentIndex: currentIndex - 1
          });
        } else {
          this.setState({
            currentIndex: teamMembers.length - 1
          });
        }
      }
    
      handleNextClick = () => {
        const { currentIndex, teamMembers } = this.state;
        if (currentIndex < teamMembers.length - 1) {
          this.setState({
            currentIndex: currentIndex + 1
          });
        } else {
          this.setState({
            currentIndex: 0
          });
        }
      }

  render() {
    const { teamMembers, currentIndex } = this.state;
    return (
      <div className="about-us-card">
        <h1>About Us</h1>
        <p className='aboutContent'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <div className="team-members">
            <button onClick={this.handlePreviousClick}>
                <FontAwesomeIcon className='arrow' icon={faArrowLeft} />
            </button>
          {teamMembers.slice(currentIndex, currentIndex + 3).map((member, index) => (
            <div className="team-member" key={index}>
              <img className="team-member-image" src={member.image} alt={`${member.name}`} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))}
            <button onClick={this.handleNextClick}>
                <FontAwesomeIcon className='arrow' icon={faArrowRight} />
            </button>
        </div>

        <div className='aboutContent'>
         <button>View More</button>
        </div>
      </div>
    );
  }
}

export default AboutUsCard;
