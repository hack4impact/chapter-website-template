import GradientBanner from "../../components/gradientBanner";
import ActionButton from "../../components/actionButton";
import Head from "../../components/head";
import Nav from "../../components/nav";
const ApplyPage = () => (
  <>
    <Head title="Apply" />
    <Nav navType="otherNav" />
    <GradientBanner title="Apply" arrow />
    <section class="timeline-split-apply">
      <div class="container">
        <div class="row">
          <div class="col-md-6 text-center">
            <img src="/static/images/timeline.jpg" class="img-fluid" />
          </div>

          <div class="col-md-6">
            <div class="row margin-lg-top">
              <div class="col-md-8 offset-md-3">
                <h4 class="text-title">Students</h4>
                <p>
                  Want to apply your skills to benefit the community? Learn how
                  you can build software products that has potential to impact
                  lives alongside a team of motivated and talented peers.
                </p>
                <ActionButton text="Apply" link="/apply/student" />
              </div>
            </div>

            <div class="row margin-lg-top">
              <div class="col-md-8 offset-md-3">
                <h4 clas="text-title">Nonprofits</h4>
                <p>
                  Have a core need that your nonprofit wants solved? Learn more
                  about our services and how your organization can partner with
                  us to support your organization's goals and mission.
                </p>
                <ActionButton text="Apply" link="/apply/nonprofits" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ApplyPage;
