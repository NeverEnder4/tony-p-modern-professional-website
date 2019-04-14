import Link from 'next/link';
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
        <div className="project__headline">
          <h3>{project.name}</h3>
          <Link href={`/project?slug=${project.next}`}>
            <a>
              Next Project
              <img src="/static/arrow-right.svg" />
            </a>
          </Link>
        </div>
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
