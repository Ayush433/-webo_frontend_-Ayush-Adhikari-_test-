import React from "react";
import "../Styles/Features.css";
import DescriptionIcon from "@mui/icons-material/Description";

const Features = () => {
  return (
    <div>
      <div id="product" className="features">
        <div className="title">
          <h1>Features That blows mind</h1>
          <p>
            we so openion and message delight.whole font do of plate heard{" "}
            <br></br> oh ought. His defective nor convinced own.
          </p>
        </div>
        <div className="box">
          <div className="cards">
            <DescriptionIcon />
            <h5>Really bow law country she unable her sister</h5>
            <div className="pra">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, nesciunt quibusdam dignissimos quia nulla ratione.
              </p>
            </div>
          </div>

          <div className="cards">
            <DescriptionIcon />
            <h5>Among sex are leave law build now</h5>
            <div className="pra">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, nesciunt quibusdam dignissimos quia nulla ratione.
              </p>
            </div>
          </div>

          <div className="card-1">
            <DescriptionIcon />
            <h5>Merits behind on afraid or warmly</h5>
          </div>
          <div className="card-2">
            <DescriptionIcon />
            <h5>Believing neglected so so allowance existence</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
