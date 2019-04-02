import Layout from '../components/Layout/Layout';
import FlexDisplay from '../components/FlexDisplay/FlexDisplay';

import { projectPageData } from '../static/seed-data/projects';

import '../scss/pages/project.scss';

const project = ({ slug }) => {
  const project = projectPageData[slug];
  return (
    <Layout>
      <FlexDisplay projectPageData={projectPageData} projectSlug={slug} />
      <section className="project">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <h3>Tech</h3>
        <p>{project.tech}</p>
        {project.href ? (
          <a href={project.href}>
            <h3>Visit Site</h3>
          </a>
        ) : null}
      </section>
    </Layout>
  );
};

project.getInitialProps = ({ query }) => {
  const { slug } = query;
  return {
    slug,
  };
};

export default project;
