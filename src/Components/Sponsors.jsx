import React from "react";
import "../Styles/Sponsor.css";

const Sponsors = () => {
  return (
    <div>
      <div className="sponsors">
        <h2>Over 32k+ software business growing with AR shakir.</h2>
        <div className="containerr">
          <div className="row">
            <div className="col-3">
              <div className="sponsor">
                <img
                  className="image"
                  src={
                    "https://www.logo.wine/a/logo/Oracle_Corporation/Oracle_Corporation-Logo.wine.svg"
                  }
                  alt={"Carlie Anglemire"}
                />
              </div>
            </div>
            <div className="col-3">
              <div className="sponsor">
                <img
                  className="image"
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/1024px-Samsung_Logo.svg.png?20211002073723"
                  }
                  alt={"Carlie Anglemire"}
                />
              </div>
            </div>
            <div className="col-3">
              <div className="sponsor">
                <img
                  className="image"
                  src={
                    "https://i0.wp.com/blog.openzeppelin.com/wp-content/uploads/2016/09/1_2uu_MNW3D-XUJ6jleukUug.png?resize=840%2C313&ssl=1"
                  }
                  alt={"Carlie Anglemire"}
                />
              </div>
            </div>
            <div className="col-3">
              <div className="sponsor">
                <img
                  className="image"
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/5/52/Morpheus_logo_horizontal_original.png"
                  }
                  alt={"Carlie Anglemire"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
