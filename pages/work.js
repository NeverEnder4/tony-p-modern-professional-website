import Layout from '../components/Layout/Layout';
import FlexDisplay from '../components/FlexDisplay/FlexDisplay';
import '../scss/pages/work.scss';

const work = () => (
  <Layout>
    <section className="work">
      <div className="work__content">
        <h3>Work and Play</h3>
        <p>
          These are a few of my highlighted projects. It is an ecclectic mix of
          personal endeavors and freelance work.
        </p>
        <h5>Please enjoy responsibly.</h5>
      </div>

      <FlexDisplay />
    </section>
  </Layout>
);

export default work;
