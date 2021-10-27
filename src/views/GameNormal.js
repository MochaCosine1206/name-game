import React, { useEffect, useContext, Fragment } from "react";
import { Context as DataContext } from "../context/employeeContext";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import match from "../match.svg"
import nomatch from "../nomatch.svg"
import "../styles/GameStyles.css";

// TODO, move employee photos and container to own components
// TODO, when button is clicked, run getEmployees, add to arrays for scoring and reset employeeMatch and incorrectEmployees 

const GameNormal = ({ changeGameMode }) => {
  const { state, getEmployees, setEmployee } = useContext(DataContext);
  const {
    employeeList,
    randomEmployee,
    employeeMatch,
    incorrectEmployees,
  } = state;
  useEffect(() => {
    getEmployees();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNewEmployees = () => {
    console.log("moving to new round...")
    // clear employeeMatch and incorrectEmployees
    // increment correct or incorrect round
    // increment round
    // getEmployees
  }

  return (
    <Fragment>
    <NavBar changeGameMode={changeGameMode} />
    <div className="container">
      <h2>Which one of these good looking photos is the real</h2>
      <h1>
        {randomEmployee.firstName} {randomEmployee.lastName}
      </h1>
      </div>
      <div className="flexImageContainer">
        {employeeList.map((employee) => (
          <div className="imageContainer" key={employee.id}>
            {incorrectEmployees.includes(employee.id)
              ? <div id="overlay" style={{ backgroundImage: `url(${nomatch})`}} alt="No match" />
              : employeeMatch === employee.id
              ? <div id="overlay" style={{ backgroundImage: `url(${match})`}} alt="match" />
              : null}
            <div
              className={
                incorrectEmployees.includes(employee.id)
                  ? "incorrectMatch"
                  : employeeMatch === employee.id
                  ? "correctMatch"
                  : null
              }
              onClick={(e) =>
                setEmployee({
                  selectedEmployeeId: employee.id,
                  randomEmployeeId: randomEmployee.id,
                })
              }
              style={{ backgroundImage: `url(${employee.headshot.url})` }}
              alt={employee.headshot.alt}
            />
          </div>
        ))}
      </div>
      <div className="container">
      <Button disabled={employeeMatch !== "" ? false : true} onClick={e => getNewEmployees(e)}>
        Continue
      </Button>
    </div>
    </Fragment>
  );
};

export default GameNormal;
