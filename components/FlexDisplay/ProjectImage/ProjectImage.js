import './ProjectImage.scss';

const ProjectImage = ({ image }) => {
  const sizing = image.sizing === 'height' ? 'height' : '';
  let width = image.width === 'full' ? 'full-width' : '';
  let cli = image.cli ? 'cli-style' : '';

  return (
    <div
      className={`project-image project-image--${image.color} ${width} ${cli}`}
    >
      <img className={sizing} src={image.src} alt={image.alt} />
    </div>
  );
};

export default ProjectImage;
