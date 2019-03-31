import './ProjectImage.scss';

const ProjectImage = ({ image }) => {
  const sizing = image.sizing === 'height' ? 'height' : '';
  let width = image.width === 'full' ? 'full-width' : '';

  return (
    <div className={`project-image project-image--${image.color} ${width}`}>
      <img className={sizing} src={image.src} alt={image.alt} />
    </div>
  );
};

export default ProjectImage;
