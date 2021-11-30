import React from "react";
import "./style.scss";

function App() {
  return (
    <div className="stu-drive">
      <div className="container-fluid">
        <div className="col-1"></div>
        <div className="col-10">
          <div class="landing_page_container_navigation">
            <div class="ShopTopUp_logo">
              <div>
                <img src="assets/svgs/Logo.svg" alt="ShopTopUp logo" />
              </div>
              <hr />
              <div>
                <img
                  src="assets/svgs/ShopTopUpDrive.svg"
                  alt="ShopTopUpDrive"
                />
              </div>
            </div>
            <div class="landing_page_mini_CTA">
              <a>
                <span> Get started now </span>
                <span>
                  {/* <img src="assets/svgs/Navigate-forward.svg" /> */}
                </span>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-6"></div>
            <div className="col-6"></div>
          </div>
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default App;
