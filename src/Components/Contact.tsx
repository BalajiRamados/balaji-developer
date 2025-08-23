import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineAttachEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="p-home-page-content-container">
        <div>
            <div className="p-home-page-typewritter-container-static-text">
                Get in Touch
            </div>
        </div>
        <div>
            <div className="p-home-page-typewritter-container">
                You can reach me through:
            </div>
            <div className="p-home-page-typewritter-container">
                Email:
            </div>
            <div className="p-home-page-typewritter-container">
              <MdOutlineAttachEmail />
                <a style={{ marginLeft: "8px" }} href="mailto:balajiramadoss.r@gmail.com">balajiramadoss.r@gmail.com</a>
            </div>
            <div className="p-home-page-typewritter-container">
                LinkedIn:
            </div>
            <div className="p-home-page-typewritter-container">
                <CiLinkedin />
                <a style={{ marginLeft: "8px" }} href="https://www.linkedin.com/in/balaji-ramadass-16b818223" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div className="p-home-page-typewritter-container">
                Instagram:
            </div>
            <div className="p-home-page-typewritter-container">
                <IoLogoInstagram />
                <a style={{ marginLeft: "8px" }} href="https://www.instagram.com/smartboybalaji77?igsh=MXJoZDlwZWJteGF2eA==" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
