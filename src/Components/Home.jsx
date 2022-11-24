import React from "react";
import "../Styles/Home.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Home = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner_content">
          <div className="container">
            <h1>
              Managing FreeLance <br></br>Payment has never<br></br> been easier
            </h1>
            <p>
              Yet bed any for travelling assistance indugence<br></br>{" "}
              unpleasing.Not thought all exercise blessing.
            </p>
            <i className="bi bi-caret-right-square-fill"></i>
            <div className="banner__btn">
              <a href="#" className=" btn btn-smart">
                GetStarted
              </a>
            </div>
          </div>{" "}
          <div className="banner__btn">
            <a href="https://www.youtube.com" className=" ctn btn-smart">
              {" "}
              <PlayArrowIcon />
              See How it Works
            </a>
          </div>
          <div className="icon">
            <CheckBoxIcon />
            Free Register
            <CheckBoxIcon style={{ marginLeft: 30 }} />
            Great Service
          </div>
          <img
            className="bannera"
            src={
              "https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png"
            }
            alt={"Carlie Anglemire"}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
