import Section from "../section";
import { Container, Row, Col } from "reactstrap";

// this returns a component
// but isn't a component - just to show the different ways of doing this
const titleDetail = date => (
  <p>
    Our application process is designed to be as straightforward as possible. As
    long as you fill out an application before <b>{date}</b>, we will carefully
    consider your submission and reach out to you if our goals align. Some
    aspects of the application we pay close attention to include technical
    complexity, impact, and mission.
  </p>
);

// Text that says that applications are closed for {currentSemester}. Open {nextSemester}. Show when the prop closed in ApplicationProcess is existing
// this is a component
const ClosedText = ({ currentSemester, nextSemester }) => (
  <p>
    Our current application period for {currentSemester} has closed! Feel free
    to reach out to us or fill in the
    <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeart7T-6sR61MXhdOfsN0n7oJ8ZThYeNjdqPnsLQLzLNKL2A/viewform">
      non-profit interest form
    </Link>
    and we’ll still love to talk to you and potentially work with your
    organization in {nextSemester}.
  </p>
);

const ApplicationProcess = ({ closed }) => (
  <Section>
    <Container>
      <Row>
        <div class="col-md-12">
          <h3 class="text-center text-title">Application Process</h3>
        </div>
      </Row>

      <Row>
        <div class="col-md-12">
          <p>{titleDetail("January 16th")}</p>
          {closed && (
            <ClosedText
              currentSemester="Spring 2019"
              nextSemester="Fall 2019"
            />
          )}
        </div>
      </Row>

      <Row>
        <div class="col-md-12">
          <ol>
            <li>
              <h4 class="text-title">Nonprofit Interest Form</h4>
              <p>
                This is a short form to get to know your organization better and
                your potential project ideas. It’ll help us get an initial sense
                of your organization’s goals, needs, and expectations. This{" "}
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeart7T-6sR61MXhdOfsN0n7oJ8ZThYeNjdqPnsLQLzLNKL2A/viewform">
                  form
                </a>
                is open throughout the year!
              </p>
            </li>

            <li>
              <h4 class="text-title">Initial Call</h4>
              <p>
                We will reach out shortly to schedule a call to dive deeper into
                your organization and project ideas, while also explaining more
                about what we do and our goals. Then, we will also work with you
                to define and clarify your project ideas.
              </p>
            </li>

            <li>
              <h4 class="text-title">Additional Calls</h4>
              <p>
                We may schedule additional calls to further tighten your project
                specifications.
              </p>
            </li>

            <li>
              <h4 class="text-title">Project Application Due</h4>
              <p>
                You will officially submit the final application, and we will
                confirm that our goals and expectations are aligned. If
                everything checks out, our project leads will contact you to
                begin the development process!
              </p>
              <p>
                Application Link:{" "}
                <a
                  class="link-wrap"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdnDbHQdqMH4Vzd6jU9PBmnX9NPMh2J5tPh9VdEvC8m7SDnCQ/viewform"
                >
                  https://docs.google.com/forms/d/e/1FAIpQLSdnDbHQdqMH4Vzd6jU9PBmnX9NPMh2J5tPh9VdEvC8m7SDnCQ/viewform
                </a>
              </p>
            </li>
          </ol>
        </div>
      </Row>
    </Container>
  </Section>
);
export default ApplicationProcess;
