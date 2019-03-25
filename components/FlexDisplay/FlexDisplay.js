import Link from 'next/link';

import './FlexDisplay.scss';

const FlexDisplay = () => (
  <div className="flex-display">
    <Link href="#">
      <a className="flex-display__item flex-display__item--green">
        <img
          className="flex-display__image"
          src="/static/talkr-multi.png"
          alt=""
        />
        <h2>Talkr.io</h2>
      </a>
    </Link>
    <Link href="#">
      <a className="flex-display__item flex-display__item--blue">
        <img
          className="flex-display__image"
          src="/static/pettigrew-props.png"
          alt=""
        />
        <h2>Pettigrew Properties</h2>
      </a>
    </Link>

    <Link href="#">
      <a className="flex-display__item flex-display__item--pink">
        <img
          className="flex-display__image"
          src="/static/musifind.png"
          alt=""
        />
        <h2>Musifind</h2>
      </a>
    </Link>

    <Link href="#">
      <a className="flex-display__item flex-display__item--pewter">
        <img
          className="flex-display__image flex-display__image--height"
          src="/static/paperkag.png"
          alt=""
        />
        <h2>PaperKAG.com</h2>
      </a>
    </Link>
  </div>
);

export default FlexDisplay;
