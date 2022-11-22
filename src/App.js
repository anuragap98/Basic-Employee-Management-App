/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Employees from './components/Employees';
import { useState, useEffect} from "react";

function App() {
  // Getting the value of default selected team from local Storage if any or assign it (short circuit evalution)
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
    id: 1,
    fullName: "Bob Jones",
    designation: "JavaScript Developer",
    gender: "male",
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Jill Bailey",
    designation: "Node Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 3,
    fullName: "Gail Shepherd",
    designation: "Java Developer",
    gender: "female",
    teamName: "TeamA"
  },
  {
    id: 4,
    fullName: "Sam Reynolds",
    designation: "React Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 5,
    fullName: "David Henry",
    designation: "DotNet Developer",
    gender: "male",
    teamName: "TeamB"
  },
  {
    id: 6,
    fullName: "Sarah Blake",
    designation: "SQL Server DBA",
    gender: "female",
    teamName: "TeamB"
  },
  {
    id: 7,
    fullName: "James Bennet",
    designation: "Angular Developer",
    gender: "male",
    teamName: "TeamC"
  },
  {
    id: 8,
    fullName: "Jessica Faye",
    designation: "API Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 9,
    fullName: "Lita Stone",
    designation: "C++ Developer",
    gender: "female",
    teamName: "TeamC"
  },
  {
    id: 10,
    fullName: "Daniel Young",
    designation: "Python Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 11,
    fullName: "Adrian Jacobs",
    designation: "Vue Developer",
    gender: "male",
    teamName: "TeamD"
  },
  {
    id: 12,
    fullName: "Devin Monroe",
    designation: "Graphic Designer",
    gender: "male",
    teamName: "TeamD"
  }]);

  // useEffect will be used to Store the session of the change in `state` of objects
  // 1st argument - arrow function and 2nd argument - event(state change) that must occur to trigger the 1st argument
  useEffect(() => {

    localStorage.setItem('employeeList', JSON.stringify(employees));

  }, [employees]);

  useEffect(() => {

    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));

  }, [selectedTeam]);

  // handle the setTeam method when selected team from dropdown
  function handleSelectedTeam(event) {
    console.log(event.target.value);
    setTeam(event.target.value);
  }
  // const handleSelectedTeam = (e) => {
  //   console.log(e);
  //   setTeam(e);
  // }

  // handle the click function over card
  // condition1 ? someValue : (condition2 ? anotherValue : defaultValue);  {optional chaining} - [right associative]
  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => (employee.id === parseInt(event.currentTarget.id))
                                                            ? (employee.teamName === selectedTeam)
                                                            ? {...employee, teamName:''} : {...employee, teamName:selectedTeam} : employee);
    setEmployees(transformedEmployees);
  }

  return (
    <>
      <Header selectedTeam={selectedTeam}
        teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
      />
      {/* prop drilling */}
      <Employees employees={employees}
        selectedTeam={selectedTeam}
        handleSelectedTeam={handleSelectedTeam}
        handleEmployeeCardClick={handleEmployeeCardClick}
      />
      <Footer />
    </>
  );
}

export default App;
