import { Helmet } from "react-helmet-async";

const NotFound = () => (
  <>
    <Helmet>
      <meta name="robots" content="noindex" />
    </Helmet>
  </>
);

export default NotFound;
