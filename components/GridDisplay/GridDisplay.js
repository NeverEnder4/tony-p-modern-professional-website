import './GridDisplay.scss';

const GridDisplay = () => (
  <main className="grid-wrapper">
    <div className="grid-display">
      <div className="grid-display__item grid-display__item--small grid-display__item--small--green">
        <img src="/static/talkr.png" alt="" />
      </div>
      <div className="grid-display__item grid-display__item--tall">
        <img src="/static/paperkag.png" alt="" />
      </div>
      <div className="grid-display__item grid-display__item--small grid-display__item--small--blue">
        <img src="/static/pettigrew-props.png" alt="" />
      </div>
      <div className="grid-display__item grid-display__item--long">
        <img src="/static/musifind.png" alt="" />
      </div>
    </div>
  </main>
);

export default GridDisplay;
