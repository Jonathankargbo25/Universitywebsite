import React, { useState, useEffect } from 'react';
import './Styles/Coursespage.css';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  // Simulated course data (replace with actual data from an API or database)
  const sampleCourses = [
    {
      id: 1,
      title: 'Computer Science',
      description: 'Learn the fundamentals of computer science and programming.',
    },
    {
      id: 2,
      title: 'Electrical Engineering',
      description: 'Explore the world of electrical engineering and technology.',
    },
    {
      id: 3,
      title: 'Mechanical Engineering',
      description: 'Master the principles of mechanical engineering and design.',
    },
    // Add more course objects as needed
  ];

  useEffect(() => {
    // Fetch course data from an API here and set it using setCourses
    // Example: fetchCourses().then(data => setCourses(data));
    setCourses(sampleCourses); // For demonstration purposes
  }, []);

  return (
    <div className="courses">
      <h1>Our Courses</h1>
      <div className="course-list">
        {courses.map((course) => (
          <div className="course" key={course.id}>
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
