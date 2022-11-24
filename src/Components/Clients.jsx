import React from "react";
import "../Styles/Clients.css";

const Clients = () => {
  return (
    <div>
      <div className="clients">
        <div className="containerr">
          <div className="row">
            <div className="col-3">
              <div className="client">
                <h1>1M</h1>
                <p>Active Users </p>
              </div>
            </div>
            <div className="col-3">
              <div className="client">
                <h1>300K</h1>
                <p>Five Start Review </p>
              </div>
            </div>
            <div className="col-3">
              <div className="client">
                <h1>$252M</h1>
                <p>Transaction </p>
              </div>
            </div>
            <div className="col-3">
              <div className="client">
                <h1>12M</h1>
                <p>Satisfied Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
