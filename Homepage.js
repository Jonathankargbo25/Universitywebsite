import React from 'react';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Styles/Homepage.css';

// Import placeholder images
// import sliderImage1 from './images/slider-image-1.jpg';
// import sliderImage2 from './images/slider-image-2.jpg';
// import vcImage from './images/vc-image.jpg';
// import event1Image from './images/event1.jpg';
// import event2Image from './images/event2.jpg';
// import event3Image from './images/event3.jpg';

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Image Slider
      <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={"sliderImage1"} alt="Slider 1" />
        </div>
        <div>
          <img src={"sliderImage2"} alt="Slider 2" />
        </div>
      </Carousel>

      {/* Vice Chancellor's Introduction */}
      {/* <section className="vc-intro"> */}
        {/* <div className="container">
          <div className="vc-intro-content">
            <div className="vc-intro-image">
              <img src={"vcImage"} alt="Vice Chancellor" />
            </div>
            <div className="vc-intro-text">
              <h2>Vice Chancellor's Introduction</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod eget dui eu dignissim. Integer euismod arcu vel metus
                convallis, at fringilla odio tincidunt.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Recent Events Slider */}
      {/* <section className="recent-events">
        <div className="container">
          <h2>Recent Events</h2>
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
            <div>
              <img src={"event1Image"} alt="Event 1" />
            </div>
            <div>
              <img src={"event2Image"} alt="Event 2" />
            </div>
            <div>
              <img src={"event3Image"} alt="Event 3" />
            </div>
          </Carousel>
        </div>
      </section> */}

      {/* Team of Staff Section */}
      <section className="team-section">
        <div className="container">
          <h2>Our Team of Staff</h2>
          {/* Add your staff members' information and images here */}
        </div>
      </section> 
    </div>
  );
};

export default HomePage;
