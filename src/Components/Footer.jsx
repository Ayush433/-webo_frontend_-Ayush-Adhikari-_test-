import React from "react";
import "../Styles/Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "@mui/material/Link";
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-gray">
          <div className="footer-custom">
            <div className="footer-lists">
              <div className="footer-list-wrap">
                <h6 className="ftr-hdr">AR Shakir </h6>
                <ul className="ftr-links-sub">
                  <p>
                    Finance helps companies <br></br> Manage payments easily
                  </p>

                  <FacebookIcon style={{ color: "blue" }} />

                  <InstagramIcon style={{ color: "red" }} />
                  <TwitterIcon style={{ color: "blue" }} />
                  <LinkedInIcon style={{ color: "blue" }} />
                </ul>
              </div>

              <div className="footer-list-wrap">
                <h6 className="ftr-hdr">Company</h6>
                <ul className="ftr-links-sub">
                  <li>
                    <a href="#" rel="nofollow">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="nofollow">
                      Careers
                    </a>
                  </li>

                  <li>
                    <a href="#blog" rel="nofollow">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="nofollow">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-list-wrap">
                <h6 className="ftr-hdr">Resources </h6>
                <ul className="ftr-links-sub">
                  <li>
                    <a
                      href="https://www.jotform.com/pdf-templates/proposal"
                      rel="nofollow"
                    >
                      Proposal Templates
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://nicepage.com/website-templates"
                      rel="nofollow"
                    >
                      Invoice Templated
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/watch?v=gY5sGvq-8h8&t=3757s"
                      rel="nofollow"
                    >
                      Tutorials
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://www.peopleslawschool.ca/how-to-write-legal-contract/"
                      rel="nofollow"
                    >
                      How to write a contract
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-email">
              <h6 className="ftr-hdr">Join Our Newsletter</h6>
              <div id="ftr-email" className="ftr-email-form">
                <form id="ftrEmailForm" method="post" action="">
                  <label>
                    <div className="error">Your Email Address</div>
                    <input
                      type="text"
                      name="email_address_"
                      id="ftrEmailInput"
                      className="input"
                      placeholder="Enter email address"
                    />
                  </label>
                  <input type="submit" className="button" value="SUBMIT" />
                  <input type="hidden" name="country_iso2" value="" />
                  <input type="hidden" name="language_iso2" value="en" />
                  <input type="hidden" name="site_domain" value="art.com" />
                  <input
                    type="hidden"
                    name="email_acq_source"
                    value="01-000001"
                  />
                  <input
                    type="hidden"
                    name="email_acq_date"
                    value=""
                    id="ftr-email-date"
                  />
                  <input type="hidden" name="brand_id" value="ART" />
                  <input
                    type="hidden"
                    name="_ri_"
                    value="X0Gzc2X%3DWQpglLjHJlYQGnp51yrMf2qXdC9tjU8pzgMtwfYzaVwjpnpgHlpgneHmgJoXX0Gzc2X%3DWQpglLjHJlYQGnyLSq2fzdkuzdzglHMsUhgeNzaSgkk"
                  />

                  <p>
                    <br></br>* will send you weekly updates for your better
                    finance management
                  </p>
                </form>
              </div>
            </div>
          </div>
          <hr />
          <p style={{ marginLeft: 500 }}>
            Copyright@AR Shakir2022. All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
