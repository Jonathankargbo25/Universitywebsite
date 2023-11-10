import React, { useState } from 'react';
import './Styles/Faculties.css';

const Faculties = () => {
  // Define faculty and department data
  const facultyData = [
    {
      id: 1,
      name: 'Faculty of Engineering',
      departments: ['Electrical Engineering', 'Mechanical Engineering', 'Civil Engineering', 'Computer Engineering'],
    },
    {
      id: 2,
      name: 'Faculty of Computer Science',
      departments: ['Computer Science', 'Information Technology', 'Software Engineering'],
    },
    {
      id: 3,
      name: 'Faculty of Business',
      departments: ['Business Administration', 'Accounting', 'Marketing'],
    },
    // Add more faculty objects as needed
  ];

  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const handleFacultyChange = (event) => {
    const facultyId = parseInt(event.target.value);
    setSelectedFaculty(facultyData.find((faculty) => faculty.id === facultyId));
  };

  return (
    <div className="faculties">
      <h1>Faculties and Departments</h1>
      <div className="faculty-dropdown">
        <label htmlFor="faculty-select">Select Faculty:</label>
        <select id="faculty-select" onChange={handleFacultyChange}>
          <option value="">Select a faculty</option>
          {facultyData.map((faculty) => (
            <option key={faculty.id} value={faculty.id}>
              {faculty.name}
            </option>
          ))}
        </select>
      </div>
      {selectedFaculty && (
        <div className="department-list">
          <h2>{selectedFaculty.name}</h2>
          <ul>
            {selectedFaculty.departments.map((department, index) => (
              <li key={index}>{department}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Faculties;
