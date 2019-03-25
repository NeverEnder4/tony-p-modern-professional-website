import Layout from '../components/Layout/Layout';

import '../scss/pages/about.scss';

const about = () => (
  <Layout>
    <div className="about">
      <section className="bio">
        <h3>Who I Am</h3>
        <p>
          I am a full stack, freelance web developer. My home is the grey city
          of Seattle, Wa. This is why I spend so much time in doors coding.
        </p>
        <div className="bio__flex-wrapper">
          <img
            className="bio__image"
            src="/static/tony-keyboard.png"
            alt="Tony Pettigrew playing a synthesizer on stage"
          />
          <div className="bio__flex-wrapper-paragraph">
            <p>
              <span className="bio__p--black">
                Learning something new every day is very important to me.
              </span>
              {` `}
              The web development front is an ever shifting landscape. Each new
              challenge is an opportunity to master another area of my craft;
              which also happens to be my passion.
            </p>
            <p>
              When I’m not working, I love to spend time in my recording studio
              with my Roland Juno 60, drum machine and guitar or hunting down
              the next great ramen joint.
            </p>
            <p>
              Most recently, I was the synthesizist for C. W. Lott's psychadelic
              pop collective, Wall Of Ears.
            </p>
          </div>
        </div>
      </section>
      <section className="skills">
        <h3>What I Know</h3>
        <div className="skills__lists">
          <ul className="skills__list skills__list--client">
            <h5>Client</h5>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>ReactJS</li>
            <li>jQuery</li>
            <li>Twitter Bootstrap</li>
            <li>Material UI</li>
          </ul>
          <ul className="skills__list skills__list--back-end">
            <h5>Back-End</h5>
            <li>NodeJS</li>
            <li>ExpressJS</li>
            <li>PHP</li>
            <li>MongoDB</li>
            <li>Postgresql</li>
            <li>Redis</li>
          </ul>
        </div>
      </section>
      <section className="services">
        <h3>What I Can Do For You</h3>
        <p>
          I can design and build a website or web solution for you business or
          personal needs. Each problem that a client brings to me is met with a
          personalized web solution. What’s your problem? Let’s tackle it.
        </p>
      </section>
    </div>
  </Layout>
);

export default about;
