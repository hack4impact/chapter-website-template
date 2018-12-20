import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Footer = () => (
  <section className="footer-section">
    <Container>
      <Row>
        <Col md="6" className="footer-left-div">
          <div className="footer-logo-box">
            <img src="/static/h4i_white.png" height="35" width="200" />
          </div>
          <p>For all inquiries of partnership or sponsorship, please contact <a href="mailto:tk2@illinois.edu">Timothy Ko</a>.</p>
        </Col>
        <div className="col-md-1"></div>
        <div className="col-6 col-md-2 ">
          <h4>ORGANIZATION</h4>
          <ul>
            <li>
              <a href="about.html">About Us</a>
            </li>
            <li>
              <a href="projects.html">Projects</a>
            </li>
            <li>
              <a href="apply.html">Apply</a>
            </li>
            <li>
              <a href="student-apply.html">Students</a>
            </li>
            <li>
              <a href="nonprofit-apply.html">Non-profits</a>
            </li>

          </ul>
        </div>
        <div className="col-6 col-md-2">
          <h4>EXTRAS</h4>
          <ul>
            <li>
              <a href="https://www.facebook.com/h4iuiuc/">Facebook</a>
            </li>
            <li>
              <a href="https://github.com/hack4impact-uiuc">Github</a>
            </li>
            <li>
              <a href="https://github.com/hack4impact-uiuc/wiki/wiki">Wiki</a>
            </li>
            <li>
              <a href="mailto:tk2@illinois.edu">Email</a>
            </li>
          </ul>
        </div>
      </Row>
    </Container>
    <style jsx>{`
      section {
        background-color: #104a80;
        min-height: 350px;
        padding-top:70px !important;
      }
      .footer-section {
        background-color: #104a80;
        min-height: 350px;
        padding-top:70px !important;
      }
      
      .footer-section h4{
          font-size: 15px;
          color:#e1e1e1;
          text-align: left;
          padding-bottom: 9px;
      }
      
      .footer-section ul{
          list-style-type: none;
          text-align: left;
          padding:0;
      }
      
      .footer-section li {
          font-size: 15px;
          padding-bottom: 5px;
      }
      
      .footer-logo-box {
          padding-bottom: 20px;
      }
      
      .footer-section a {
          color:#8E8D8A;
      }
      
      .footer-section a:hover {
          color: #d9d9d9;
      }
      
      .footer-left-div {
          padding-bottom: 30px;
      }
      
      .footer-section p {
          color: #d9d9d9;
      }
    `}</style>
  </section >
)

export default Footer