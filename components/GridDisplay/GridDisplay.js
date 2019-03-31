import Link from 'next/link';

import './GridDisplay.scss';

const GridDisplay = () => (
  <main className="grid-wrapper">
    <div className="grid-display">
      <div className="grid-display__item grid-display__item--small grid-display__item--small--top">
        <img src="/static/talkr-multi.png" alt="" />
      </div>
      <div className="grid-display__item grid-display__item--tall">
        <img src="/static/paperkag.png" alt="" />
        <Link href="/work">
          <a className="grid-display__link">View Work</a>
        </Link>
      </div>
      <div className="grid-display__item grid-display__item--small grid-display__item--small--bottom">
        <img src="/static/pett-prop-desk.png" alt="" />
      </div>
      <div className="grid-display__item grid-display__item--long">
        <img src="/static/musifind-3.png" alt="" />
      </div>
    </div>
  </main>
);

export default GridDisplay;
