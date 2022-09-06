import React, { useEffect, useState } from "react";
// import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import Foot from "./Foot";
import "./footer.css";
function Footer() {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    fetch("/Footer")
      .then((res) => {
        res.json().then((data) => {
          setFooter(data);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <>
      {footer.length > 0 && (
        <div className="footer__main">
          <div onClick={topFunction} className="footer__back_top">
            Back to top
          </div>
          <div className="footer__body">
            {footer.map((value, index) => {
              return (
                <Foot
                  key={index}
                  list={value[Object.keys(value)[0]]}
                  heading={value[Object.keys(value)[1]]}
                />
              );
            })}
          </div>
          <div className="footer__line"></div>
          <div className="footer__logo">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="image not available"
              width={80}
              height={30}
            />
            <p className="footer__logo_text">
              <LanguageSharpIcon className="footer__icon" />
              <span>English</span>
            </p>
          </div>

          <div className="footer__country">
            <a href="#">Australia</a>
            <a href="#">Brazil</a>
            <a href="#">Canada</a>
            <a href="#">China</a>
            <a href="#">France</a>
            <a href="#">Germany</a>
            <a href="#">Italy</a>
            <a href="#">Japan</a>
            <a href="#">Mexico</a>
            <a href="#">Netherlands</a>
            <a href="#">Poland</a>
            <a href="#">Singapore</a>
            <a href="#">Spain</a>
            <a href="#">Turkey</a>
            <a href="#">United Arab Emirates</a>
            <a href="#">United Kingdom</a>
            <a href="#">United States</a>
          </div>
          <div className="footer__copyright">
            <p>
              <a href="#">Conditions of Use & Sale</a>
              <a href="#">Privacy Notice</a>
              <a href="#">Interest-Based Ads</a>© 1996-2022, Amazon.com, Inc. or
              its affiliates
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Footer;
