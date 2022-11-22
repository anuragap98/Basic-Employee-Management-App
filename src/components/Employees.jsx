import femaleProfile from "../images/femaleProfile.jpg";
import maleProfile from "../images/maleProfile.jpg";

// Move the Employees `state` up into App Component for prop drilling

// Javascript destructuring to unpack the `prop` to revelent object
const Employees = ({employees,selectedTeam,handleSelectedTeam,handleEmployeeCardClick}) => {

  return (
    // React uses the Semantic HTML for layout
    <main className="container">
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-10 col-sm-12 col-md-12 col-lg-10">
          <select className="form-control form-select-md bg-primary text-center" id="dropdown-menu" value={selectedTeam} onChange={handleSelectedTeam}>
            <option value="TeamA">Team A</option>
            <option value="TeamB">Team B</option>
            <option value="TeamC">Team C</option>
            <option value="TeamD">Team D</option>
          </select>
        </div>
      </div>
      <div className="row justify-content-center mt-3 mb-3">
        <div className="col-10 col-sm-12 col-md-12 col-lg-10">
          <div className="card-collection">
            {
              employees.map((employee) => (
                <div key={employee.id} id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{cursor: "pointer"}} onClick={handleEmployeeCardClick}>
                  {/* card image */}
                  {(employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" alt=""/> 
                                                : <img src={femaleProfile} className="card-img-top" alt=""/>}
                  <div className="card-body">
                    <h5 className="card-title">Full Name: {employee.fullName}</h5>
                    <p className="card-text"><strong>Designation:</strong> {employee.designation}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </main>
  );
}

export default Employees