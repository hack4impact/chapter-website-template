import { Container } from "reactstrap";
import ApplicationProcess from "../../components/apply/applicationProcess";
import Quote from "../../components/quote";
import FAQ from "../../components/faq";
import GradientBanner from "../../components/gradientBanner";
import ErrorMessage from "../../components/errorMessage";
import Head from "../../components/head";
import Nav from "../../components/nav";
import Footer from "../../components/footer";
import data from "../../data/studentApplyData";
const Students = () => (
  <div>
    <Head title="H4I Apply | Students" />
    <Nav navType="otherNav" />
    <GradientBanner
      color="#64ab8a"
      title={data.title}
      subHeadline={data.subHeadline}
      buttonText="Apply Now"
      buttonLink={data.applicationLink}
    />
    <ApplicationProcess
      closedText={data.closedText}
      processes={data.studentProcess}
    />
    <Quote
      quote={data.quote.text}
      source={data.quote.source}
      sourceTitle={data.quote.sourceTitle}
    />
    <FAQ questions={data.faq} />
    <Footer />
  </div>
);

export default Students;
