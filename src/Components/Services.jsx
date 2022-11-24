import React from "react";
import DescriptionIcon from "@mui/icons-material/Description";
import "../Styles/Service.css";
import CheckBoxIcon from "@mui/icons-material/CheckBox";

const Services = () => {
  return (
    <div>
      <div id="product" className="service">
        <div className="title">
          <h1>
            Automated <br></br> Portfolio tracking
          </h1>
          <p>
            yet bed any for travelling assistance indulgence unpleasing.
            <br></br> Not thought all exercise blessing
          </p>
        </div>
        <div className="box">
          <div className="cards">
            <DescriptionIcon />
            <h5>Connect Wallets and companies</h5>
            <div className="pra">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, nesciunt quibusdam dignissimos quia nulla ratione.
              </p>
            </div>
          </div>

          <div className="cards">
            <DescriptionIcon />
            <h5>Connect Wallets and companies</h5>
            <div className="pra">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, nesciunt quibusdam dignissimos quia nulla ratione.
              </p>
            </div>
          </div>

          <div className="cards">
            <DescriptionIcon />
            <h5>Connect Wallets and companies</h5>
            <div className="pra">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur, nesciunt quibusdam dignissimos quia nulla ratione.
              </p>
            </div>
          </div>
        </div>
        <div className="choose">
          <a href="">Why Choose Us</a>
          <h1>
            Track your payments <br></br>on the go with the <br></br> best way
            possible
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
            maiores.
          </p>
          <hr />
          <CheckBoxIcon />
          get overview at a glance
          <br></br>
          <CheckBoxIcon />
          Deposit funds easily,security
          <br></br>
          <CheckBoxIcon />
          Get Live Support
        </div>
        <div className="images">
          <img
            className="im"
            src={
              "https://img.freepik.com/free-vector/contract-billing-deal-terms-fulfillment-successful-transaction-money-transfer-rent-lease-payment-payer-cash-receiver-cartoon-characters_335657-2985.jpg?w=2000"
            }
            alt={"Carlie Anglemire"}
          />
        </div>
        <div className="choose1">
          <a href="">Why Choose Us</a>
          <h1>
            Save money with <br></br>Proper transaction
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            aliquam sunt debitis, veritatis <br></br>illum ducimus doloribus
            asperiores praesentium iusto fuga, dicta aspernatur<br></br> aut
            corrupti facere architecto ratione exercitationem laudantium
            molestias..
          </p>
        </div>
        <div className="imagess">
          <img
            className="imgd"
            src={
              "https://img.freepik.com/free-vector/credit-cards-isolated_1284-41766.jpg?w=1380&t=st=1669131012~exp=1669131612~hmac=5a1ede9ef7b17970d311da6fce990951664508c5629cb15d92b9da54db08b29d"
            }
            alt={"Carlie Anglemire"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
