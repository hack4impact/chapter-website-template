import React from 'react'
import { Container, Row } from 'reactstrap'

const Footer = () => (
  <section className="footer-section">
    <Container>
      <Row>
        <div className="col-12 col-md-6 footer-left-div">
          <div className="footer-logo-box">
            <img src="/static/h4i_white.png" height="35" width="200" />
          </div>
          <p>For all inquiries of partnership or sponsorship, please contact <a href="mailto:tk2@illinois.edu">Timothy Ko</a>.</p>
        </div>
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
    `}</style>
  </section>
)

export default Footer