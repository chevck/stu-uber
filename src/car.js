import React from "react";
import Steering from "./assets/imgs/steering.png";
import CarSeats from "./assets/imgs/car-seat.png";
import Gas from "./assets/imgs/gas.png";
import ForwardIcon from "./assets/svgs/Navigate-forward.svg";

export const CarType = ({ img, carname }) => {
  return (
    <div className="stu-drive_section-three_cars_wrapper">
      <h5 className="stu-drive_section-three_cars_wrapper_name">{carname}</h5>
      <img src={img} className="img-fluid" alt="megane-car" />
      <div className="stu-drive_section-three_cars_wrapper_perks">
        <div className="stu-drive_section-three_cars_wrapper_perks-type">
          <img src={Steering} className="img-fluid" alt="steering-wheels" />
          <p>Manual</p>
        </div>
        <div className="stu-drive_section-three_cars_wrapper_perks-type">
          <img src={CarSeats} className="img-fluid" alt="car-seat" />
          <p>4 seats</p>
        </div>
        <div className="stu-drive_section-three_cars_wrapper_perks-type">
          <img src={Gas} className="img-fluid" alt="gas" />
          <p>56 MPG</p>
        </div>
      </div>
      <button className="stu-drive_section-three_cars_wrapper_btn-view">
        View Details <img src={ForwardIcon} alt="forward-icon" />{" "}
      </button>
    </div>
  );
};
