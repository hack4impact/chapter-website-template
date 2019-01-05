import { Container } from "reactstrap";

import ErrorMessage from "../../components/errorMessage";
import Head from "../../components/head";

const Students = () => (
  <div>
    <Head title="Students Apply" />
    <Container>
      <ErrorMessage message="Coming Soon" />
    </Container>
  </div>
);

export default Students;
