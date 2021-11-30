import React from "react";
import "./style.scss";
import Logo from "./assets/svgs/Logo.svg";
import ForwardIcon from "./assets/svgs/Navigate-forward.svg";
import User from "./assets/svgs/user.svg";
import Doc from "./assets/svgs/doc.svg";
import Training from "./assets/svgs/train.svg";
import Vehicle from "./assets/svgs/vehicle.svg";
import Money from "./assets/svgs/money.svg";
import MoneyWhite from "./assets/svgs/money-white.svg";
import VehicleWhite from "./assets/svgs/vehicle-white.svg";
import Services from "./assets/svgs/services.svg";
import Cancel from "./assets/svgs/cancel.svg";
import Renault from "./assets/imgs/renault.png";
import Megane from "./assets/imgs/megane.png";
import ArrowUps from "./assets/imgs/logo-placeholder-white.png";
// import Mercedes from "./assets/imgs/Mercedes.png";
import { CarType } from "./car";

function App() {
  return (
    <div className="stu-drive">
      <div className="container-fluid stu-drive_top-section">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 col-12">
            <div class="stu-drive_top-section_navigation">
              <img src={Logo} alt="ShopTopUp logo" />
              <a href="/" className="stu-drive_top-section_navigation_button">
                Get Started now <img src={ForwardIcon} alt="forward-icon" />
              </a>
            </div>
            <div className="stu-drive_top-section_body">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="stu-drive_top-section_body_left">
                    <h1>Drive. Earn. Own.</h1>
                    <h5>
                      We have a van with your name on it. Earn money weekly for
                      driving to own your van.
                    </h5>
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="stu-drive_top-section_body_right">
                    <h4>Start Driving</h4>
                    <hr />
                    <form id="landing-form">
                      <div className="row">
                        <div className="col-6">
                          <label for="firstName">First name</label>
                          <input
                            placeholder="Abu"
                            className="form-control"
                            type="text"
                            required
                          />
                        </div>
                        <div className="col-6">
                          <label for="lastName">Last name</label>
                          <input
                            placeholder="Peter"
                            className="form-control"
                            type="text"
                            required
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <label for="email" name="email">
                            Email Address
                          </label>
                          <input
                            name="email"
                            className="form-control"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <label for="phoneNumber" name="phoneNumber">
                            Phone number
                          </label>
                          <input
                            name=""
                            className="form-control"
                            placeholder="name@example.com"
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <label for="city" name="city">
                            Select City
                          </label>
                          <select
                            name="email"
                            type="select"
                            className="form-control"
                            placeholder="name@example.com"
                          >
                            <option value="lagos">Lagos</option>
                            <option value="ibadan">Ibadan</option>
                            <option value="abuja">Abuja</option>
                            <option value="ilorin">Ilorin</option>
                            <option value="kano">Kano</option>
                            <option value="port harcourt">Port Harcourt</option>
                            <option value="calabar">Calabar</option>
                            <option value="jos">Jos</option>
                          </select>
                        </div>
                        <div className="col-6"></div>
                      </div>
                      <button
                        type="submit"
                        className="stu-drive_top-section_body_right_form-button"
                      >
                        Get Started <img src={ForwardIcon} alt="forward-icon" />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>
      <div className="container-fluid stu-drive_section-two">
        <div className="container">
          <h4 className="stu-drive_section-two_title">
            How ShopTopUp Drive-to-Own works
          </h4>
          <div className="row">
            <div className="col-md-4 col-12 stu-drive_section-two_howto">
              <div className="stu-drive_section-two_howto_icon-wrapper">
                <img src={User} alt="user" className="img-fluid" />
              </div>
              <p className="stu-drive_section-two_howto_point-title">Signup</p>
              <p className="stu-drive_section-two_howto_point-text">
                Create an account and complete your registration to kick off
                your journey to becoming a vehicle owner.
              </p>
            </div>
            <div className="col-md-4 col-12 stu-drive_section-two_howto">
              <div className="stu-drive_section-two_howto_icon-wrapper">
                <img src={Doc} alt="user" className="img-fluid" />
              </div>
              <p className="stu-drive_section-two_howto_point-title">
                Get verified
              </p>
              <p className="stu-drive_section-two_howto_point-text">
                Create an account and complete your registration to kick off
                your journey to becoming a vehicle owner.
              </p>
            </div>
            <div className="col-md-4 col-12 stu-drive_section-two_howto">
              <div className="stu-drive_section-two_howto_icon-wrapper">
                <img src={Training} alt="user" className="img-fluid" />
              </div>
              <p className="stu-drive_section-two_howto_point-title">
                Get trained
              </p>
              <p className="stu-drive_section-two_howto_point-text">
                The next step is to take you through our driver onboarding
                programme so that you understand the good work you will help us
                accomplish.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-12 stu-drive_section-two_howto">
              <div className="stu-drive_section-two_howto_icon-wrapper">
                <img src={Vehicle} alt="user" className="img-fluid" />
              </div>
              <p className="stu-drive_section-two_howto_point-title">
                Get your vehicle
              </p>
              <p className="stu-drive_section-two_howto_point-text">
                Congratulations! Sign your contract, collect your vehicle and
                start driving.
              </p>
            </div>
            <div className="col-md-4 col-12 stu-drive_section-two_howto">
              <div className="stu-drive_section-two_howto_icon-wrapper">
                <img src={Money} alt="user" className="img-fluid" />
              </div>
              <p className="stu-drive_section-two_howto_point-title">
                Get paid weekly
              </p>
              <p className="stu-drive_section-two_howto_point-text">
                Earn money weekly for completing delivery trips to ShopTopUp
                customers. Your agreed weekly repayment will be deducted from
                your weekly salary.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container stu-drive_section-three">
        <h4 className="stu-drive_section-three_title">Our Vans</h4>
        <div className="stu-drive_section-three_cars">
          <CarType img={Megane} carname="Renault Megane RS" />
          <CarType img={Renault} carname="Tesla" />
          <CarType img={Megane} carname="Renault Megane RS" />
          <CarType img={Renault} carname="Tesla" />
        </div>
      </div>
      <div className="container-fluid stu-drive_section-four">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-12">
              <h2 className="stu-drive_section-four_title">
                Explore our Benefits
              </h2>
              <img
                src={ArrowUps}
                className="img-fluid stu-drive_section-four_arrowups"
                alt="arrow-ups"
              />
            </div>
            <div className="col-md-2" />
            <div className="col-md-7 col-12 stu-drive_section-four_benefits">
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="stu-drive_section-four_benefits_icon-wrapper">
                    <img src={VehicleWhite} alt="user" className="img-fluid" />
                  </div>
                  <p className="stu-drive_section-four_benefits_title">
                    Own your Vehicle
                  </p>
                  <p className="stu-drive_section-four_benefits_text">
                    We have a van with your name on it. Earn money weekly for
                    driving to own your van.
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <div className="stu-drive_section-four_benefits_icon-wrapper">
                    <img src={Services} alt="user" className="img-fluid" />
                  </div>
                  <p className="stu-drive_section-four_benefits_title">
                    Free basic services
                  </p>
                  <p className="stu-drive_section-four_benefits_text">
                    Get free vehicle servicing, fuel, road side assistance and
                    insurance.
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 col-12">
                  <div className="stu-drive_section-four_benefits_icon-wrapper">
                    <img src={MoneyWhite} alt="user" className="img-fluid" />
                  </div>
                  <p className="stu-drive_section-four_benefits_title">
                    Earn a living
                  </p>
                  <p className="stu-drive_section-four_benefits_text">
                    We have a van with your name on it. Earn money weekly for
                    driving to own your van.
                  </p>
                </div>
                <div className="col-md-6 col-12">
                  <div className="stu-drive_section-four_benefits_icon-wrapper">
                    <img src={Cancel} alt="user" className="img-fluid" />
                  </div>
                  <p className="stu-drive_section-four_benefits_title">
                    No hidden charges
                  </p>
                  <p className="stu-drive_section-four_benefits_text">
                    You pay no extra fees to us when driving for us and after
                    you own your vehicle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid stu-drive_section-five">
        <h2 className="stu-drive_section-five_title">Own your vehicle</h2>
        <p className="stu-drive_section-five_text">
          We have a van with your name on it. Earn money weekly for driving to
          own your van.
        </p>
        <a href="/" className="stu-drive_section-five_button">
          Get Started <img src={ForwardIcon} alt="forward-icon" />
        </a>
      </div>
      <div className="container stu-drive_footer">
        <div className="row">
          <div className="col-md-4 col-12">
            <div className="stu-drive_footer_left">
              <div className="stu-drive_footer_left-brand">
                <img src={Logo} alt="stu-logo" className="img-fluid" />
                <span className="breaker"></span>
                <h4>ShopTopUp Drive</h4>
              </div>
              <div className="stu-drive_footer_left_links">
                <a href="/">How it works</a>
                <a href="/">Terms</a>
                <a href="/">Contact Us</a>
              </div>
            </div>
          </div>
          <div className="col-4"></div>
          <div className="col-md-4 col-12">
            <p className="stu-drive_footer_right">
              For further questions and assistance, contact us.
              <br />
              0800 555 0000
              <br />
              3/4 Adewunmi Industrial Estate,
              <br />
              Kudirat Abiola Way, Oregun, Lagos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
