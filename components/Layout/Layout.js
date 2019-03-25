import Header from '../Header/Header';
import Wrapper from './Wrapper/Wrapper';
import Footer from './Footer/Footer';

const Layout = ({ children }) => (
  <React.Fragment>
    <Header />
    <Wrapper>{children}</Wrapper>
    <Footer />
  </React.Fragment>
);

export default Layout;
