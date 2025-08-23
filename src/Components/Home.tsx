import React, { useEffect, useState } from "react";
import Balaji from "../assets/balaji_image_3.jpeg";
import config from "../config/config";
import Projects from "./Projects";
import Skill from "./Skills";


const Home = () => {

    const texts = config.roles;
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');

    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1000;

    useEffect(() => {
        const currentText = texts[textIndex];

        let timeout;

        if (!isDeleting) {
            if (charIndex < currentText.length) {
                timeout = setTimeout(() => {
                    setCharIndex(prev => prev + 1);
                    setDisplayText(currentText.substring(0, charIndex + 1));
                }, typingSpeed);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), pauseTime);
            }
        } else {
            if (charIndex > 0) {
                timeout = setTimeout(() => {
                    setCharIndex(prev => prev - 1);
                    setDisplayText(currentText.substring(0, charIndex - 1));
                }, deletingSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }, 500);
            }
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex]);

    return (
        <div className="p-home-page-content-container">
            <div>
                <div className="p-home-page-typewritter-container-static-text">
                    Hey! &nbsp;
                    <br className="p-home-page-name-mobile-section" />
                    I'm Balaji
                </div>
            </div>
            <div>
                <div className="p-home-page-typewritter-container">
                    as a,
                </div>
            </div>
            <div className="">
                <div className="p-home-page-typewritter-container">
                    <div id="typewriter">{displayText}</div>
                </div>
            </div>
            <div className="p-home-page-image-con">
                <div className="p-home-page-image-container">
                    <img src={Balaji} alt="" className="p-home-page-personal-image" />
                </div>
            </div>
            <div>
                <div className="p-home-page-story-header-container">
                    Here’s My Story
                </div>
            </div>
            <div>
                <div className="p-home-page-story-container">
                    I’m Balaji — a Full Stack developer and cloud enthusiast
                    <br className="p-home-page-name-mobile-section-invert" />
                    who loves building smart, user-friendly web apps and
                    <br className="p-home-page-name-mobile-section-invert" />
                    data solutions. From front-end magic to back-end
                    <br className="p-home-page-name-mobile-section-invert" />
                    logic (with a dash of AI), I enjoy turning ideas into real
                    <br className="p-home-page-name-mobile-section-invert" />
                    impact. Always learning, always coding!
                </div>
            </div>
            <div style={{ width: "100%" }}>
                <div style={{ width: "100%" }}>
                    <Skill />
                </div>
            </div>
            <div>
                <div>
                    <Projects />
                </div>
            </div>
        </div>
    )
}


export default Home;