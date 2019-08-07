import { Component } from "react";
import ApplicationProcess from "../../components/apply/applicationProcess";
import Quote from "../../components/quote";
import FAQ from "../../components/faq";
import GradientBanner from "../../components/gradientBanner";
import ErrorMessage from "../../components/errorMessage";
import Head from "../../components/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import data from "../../data/studentApplyData";
import { initializeGA, logPage } from "../../components/Analytics"

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    initializeGA()
    logPage()
  }

  render() {
    return (
      <div>
        <Head title="H4I Apply | Students" />
        <Nav navType="otherNav" />
        <GradientBanner
          color="#64ab8a"
          title={data.title}
          subHeadline={data.subHeadline}
          buttonText="Apply Now"
          buttonLink={data.applicationLink}
          minorButtonLink="https://www.notion.so/h4iuiuc/Join-Hack4Impact-UIUC-2e875ce396b34e6ebb23c6dda57a89aa"
          minorButtonText="View Positions"
        />
        <ApplicationProcess
          closedText={data.closedText}
          processes={data.studentProcess}
          titleDetail={data.applicationDetail}
        />
        <Quote
          quote={data.quote.text}
          source={data.quote.source}
          sourceTitle={data.quote.sourceTitle}
        />
        <FAQ questions={data.faq} />
        <Footer />
      </div>
    )
  }
}


export default Students;
