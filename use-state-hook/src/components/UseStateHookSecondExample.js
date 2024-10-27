import { useState } from "react";

const UseStateHookSecondExample = () => {
  var [car, setCar] = useState({
    brand: "Toyota",
    model: "GLI Automatic",
    color: "white",
    year: 2018,
  });

  var updateCarColor = () => {
    setCar((currentCarState) => {
      return { ...currentCarState, color: "red" };
    });
  };

  return (
    <div>
      <button onClick={updateCarColor}> change car color </button>
      <p> car color : {car.color}</p>
    </div>
  );
};

export default UseStateHookSecondExample;
