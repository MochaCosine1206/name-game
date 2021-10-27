import React, { useEffect, useContext, Fragment } from "react";
import { Context as DataContext } from "../context/employeeContext";
import NavBar from "../components/NavBar";
import Button from "../components/Button";
import match from "../match.svg"
import nomatch from "../nomatch.svg"
import "../styles/GameStyles.css";

const GameNormal = ({ changeGameMode }) => {
  const { state, getEmployees, setEmployee } = useContext(DataContext);
  const {
    employeeList,
    randomEmployee,
    selectedEmployee,
    employeeMatch,
    incorrectEmployees,
  } = state;
  useEffect(() => {
    getEmployees();
  }, []);

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
          <div className="imageContainer">
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
              key={employee.id}
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
      <Button disabled={employeeMatch !== "" ? false : true} onClick="">
        Continue
      </Button>
    </div>
    </Fragment>
  );
};

export default GameNormal;
