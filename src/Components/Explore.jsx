import React from "react";
import "../Styles/Exolore.css";
import { Button } from "@mui/material";
const Explore = () => {
  return (
    <div>
      <div className="featured">
        <div className="featuredItem">
          <h1 className="featuredTitle">
            Discover a better way to<br></br> Manage Spending<br></br>
            <Button className="btn" variant="contained">
              Get Started Now
            </Button>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Explore;
