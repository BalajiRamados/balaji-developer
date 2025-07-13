import React from "react";
import DataEngineerng from "../assets/data_engineering.jpg";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CostManagement from "../assets/cost_management.jpg";
import OnlineLearning from "../assets/online_learning.jpg";
import AI from "../assets/ai.jpg";
import WordPress from "../assets/wordpress.jpg";

const Projects = () => {
  return (
    <div>
      <div>
        <Row className="p-home-page-projects-row">
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
        <Row className="p-home-page-projects-row">
          <Col>
            <div className="p-home-page-cards-container">
              <div className="p-home-page-cards-wrapper">
                {/* <div className="p-home-page-card-image" aria-hidden="true"><img src={DataEngineerng} alt="" /></div> */}
                <img className="p-home-page-card-image" src={OnlineLearning} alt="" />
                <h3 className="p-home-page-card-title">Online Learning Web Application</h3>
                <p className="p-home-page-card-description">
                  <ul>
                    <li>
                      <strong>Interactive Learning Experience: </strong> Deliver engaging and interactive courses with multimedia support,
                      quizzes, and real-time feedback mechanisms to enhance knowledge retention.
                    </li>
                    <li>
                      <strong>Personalized Learning Paths:</strong> Implement adaptive learning paths based on user performance,
                      preferences, and learning goals to maximize course effectiveness.
                    </li>
                    <li>
                      <strong>Technologies & Tools:</strong>  JavaScript, TypeScript, React, Node.js, Express.js, and related frameworks for
                      seamless development and deployment
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
                <img className="p-home-page-card-image" src={AI} alt="" />
                <h3 className="p-home-page-card-title">Proof of Concept (POC) on LLMs, Agents, and AI Models </h3>
                <p className="p-home-page-card-description">
                  <ul>
                    <li>
                      <strong>AI Integration:</strong>  Seamlessly incorporate Large Language Models (LLMs) into the existing web platform
                      to enhance functionality and user experience.
                    </li>
                    <li>
                      <strong>Automated Content Generation: </strong>  Utilize advanced AI models to generate high-quality, context
                      aware content dynamically.
                    </li>
                    <li>
                      <strong>Prompt Engineering & Optimization:</strong> Fine-tune prompts for improved model performance,
                      relevance, and efficiency.
                    </li>
                    <li>
                      <strong>Testing & Validation:  </strong> Develop comprehensive test cases using Python scripts and SQL, managing
                      tasks through Jira tickets to ensure reliability and accuracy.
                    </li>
                    <li>
                      <strong>Technologies & Tools:</strong>Leverage Python, OpenAI’s ChatGPT models, and Hugging Face models for AI
                      driven solutions.
                    </li>
                  </ul>
                </p>
                <div className="p-home-page-card-learn-more">Learn more</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="p-home-page-projects-row">
          <Col>
            <div className="p-home-page-cards-container">
              <div className="p-home-page-cards-wrapper">
                {/* <div className="p-home-page-card-image" aria-hidden="true"><img src={DataEngineerng} alt="" /></div> */}
                <img className="p-home-page-card-image" src={WordPress} alt="" />
                <h3 className="p-home-page-card-title">WordPress Website Development </h3>
                <p className="p-home-page-card-description">
                  <ul>
                    <li>
                      <strong>Projects Delivered:</strong>  Successfully developed and deployed WordPress sites for StoryEQ, Todac360,
                      Todac-adv, Sthiraum, and more.
                    </li>
                    <li>
                      <strong>Optimized Performance & Hosting: </strong> Implemented scalable solutions with Pagely, Minify, and BigRock
                      to enhance website speed, security, and reliability
                    </li>
                    <li>
                      <strong>Technologies & Tools: </strong> Leveraged WordPress and its ecosystem to build responsive, user-friendly,
                      and high-performing websites.
                    </li>
                  </ul>
                </p>
                <div className="p-home-page-card-learn-more">Learn more</div>
              </div>
            </div>
          </Col>
          <Col>
            <div className="p-home-page-cards-container" style={{ display: 'none' }}>
              <div className="p-home-page-cards-wrapper">
                {/* <div className="p-home-page-card-image" aria-hidden="true"><img src={DataEngineerng} alt="" /></div> */}
                <img className="p-home-page-card-image" src={DataEngineerng} alt="" />
                <h3 className="p-home-page-card-title">WordPress Website Development </h3>
                <p className="p-home-page-card-description">
                  <ul>
                    <li>
                      <strong>Projects Delivered:</strong>  Successfully developed and deployed WordPress sites for StoryEQ, Todac360,
                      Todac-adv, Sthiraum, and more.
                    </li>
                    <li>
                      <strong>Optimized Performance & Hosting: </strong> Implemented scalable solutions with Pagely, Minify, and BigRock
                      to enhance website speed, security, and reliability
                    </li>
                    <li>
                      <strong>Technologies & Tools: </strong> Leveraged WordPress and its ecosystem to build responsive, user-friendly,
                      and high-performing websites.
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
  );
};

export default Projects;
