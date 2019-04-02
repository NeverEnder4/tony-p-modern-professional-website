import FlexDisplayItem from './FlexDisplayItem/FlexDisplayItem';
import ProjectImage from './ProjectImage/ProjectImage';
import './FlexDisplay.scss';

const FlexDisplay = ({ projects, projectSlug, projectPageData }) => {
  if (!projectSlug)
    return (
      <div className="flex-display">
        {projects.map(project => (
          <FlexDisplayItem key={project.name} project={project} />
        ))}
      </div>
    );
  else
    return (
      <div className="flex-display flex-display--flex-start">
        {projectPageData[projectSlug].images.map(image => (
          <ProjectImage image={image} key={image.name} />
        ))}
      </div>
    );
};

export default FlexDisplay;
