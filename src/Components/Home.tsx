import React, { useEffect, useState } from "react";
import Balaji from "../assets/balaji_image_3.jpeg";
import config from "../config/config";
import DataEngineerng from "../assets/data_engineering.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CostManagement from "../assets/cost_management.jpg";


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
                    Hey! I'm Balaji
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
                    <br />
                    who loves building smart, user-friendly web apps and
                    <br />
                    data solutions. From front-end magic to back-end
                    <br />
                    logic (with a dash of AI), I enjoy turning ideas into real
                    <br />
                    impact. Always learning, always coding!
                </div>
            </div>
            <div>
                <div className="p-home-page-story-header-container">
                    My Projects
                </div>
            </div>
            <div>
                <div>
                    <Row>
                        <Col>
                            <div className="p-home-page-cards-container">
                                <div className="p-home-page-cards-wrapper">
                                    {/* <div className="p-home-page-card-image" aria-hidden="true"><img src={DataEngineerng} alt="" /></div> */}
                                    <img className="p-home-page-card-image" src={DataEngineerng} alt="" />
                                    <h3 className="p-home-page-card-title">Managing and Transforming Large-Scale Pharmaceutical Data</h3>
                                    <p className="p-home-page-card-description">
                                        <ul>
                                            <li>
                                                <strong>Secure Data Handling & Processing:</strong>Efficiently manage, extract, transform, and load (ETL/ELT) large
                                                scale pharmaceutical datasets while ensuring security and compliance.
                                            </li>
                                            <li>
                                                <strong>Optimized Data Orchestration:</strong>Implement client-specific ETL/ELT workflows to streamline data
                                                processing, improve performance, and maintain data integrity.
                                            </li>
                                            <li>
                                                <strong>Technologies & Tools:</strong> Leverage Python, PySpark, and DBT (Data Build Tool) for scalable data
                                                transformations. Utilize AWS services (including S3 table buckets), Apache Iceberg, and Snowflake
                                                for robust data storage, processing, and analytics.
                                            </li>
                                        </ul>
                                    </p>
                                    <div className="p-home-page-card-learn-more">Learn more</div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <div className="p-home-page-cards-container">
                                <div className="p-home-page-cards-wrapper">
                                    {/* <div className="p-home-page-card-image" aria-hidden="true"><img src={DataEngineerng} alt="" /></div> */}
                                    <img className="p-home-page-card-image" src={CostManagement} alt="" />
                                    <h3 className="p-home-page-card-title">Resource and Cost Management Web Application</h3>
                                    <p className="p-home-page-card-description">
                                        <ul>
                                            <li>
                                                <strong>Efficient Resource Allocation:</strong> Track and manage resource distribution across multiple projects while
                                                ensuring adherence to project timelines and budget.
                                            </li>
                                            <li>
                                                <strong>Real-Time Cost Optimization:</strong> Dynamically update cost calculations based on project duration,
                                                resource utilization, and scope changes.
                                            </li>
                                            <li>
                                                <strong>Scalable & Responsive Architecture:</strong> Leverage modern web technologies to build an intuitive, high
                                                performance, and user-friendly interface.
                                            </li>
                                            <li>
                                                <strong>Technologies & Tools: </strong>JavaScript, TypeScript, ReactJS, Node.js, Express.js, Azure Services and related
                                                frameworks for seamless development and deployment.
                                            </li>
                                        </ul>
                                    </p>
                                    <div className="p-home-page-card-learn-more">Learn more</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>

        </div>
    )
}


export default Home;