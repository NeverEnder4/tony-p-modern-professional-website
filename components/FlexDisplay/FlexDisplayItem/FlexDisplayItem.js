import Link from 'next/link';

import './FlexDisplayItem.scss';

const FlexDisplayItem = ({ project }) => {
  let sizingClass =
    project.specialSizing && project.specialSizing === 'height' ? 'height' : '';
  return (
    <Link href={`/project?slug=${project.slug}`}>
      <a className={`flex-display-item flex-display-item--${project.bgColor}`}>
        <img
          className={`flex-display-item__image flex-display-item__image--${sizingClass}`}
          src={project.src}
          alt={project.alt}
        />
        <h2>{project.name}</h2>
      </a>
    </Link>
  );
};

export default FlexDisplayItem;
