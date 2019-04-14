const projects = [
  {
    name: 'Talkr.io',
    src: '/static/talkr-multi.png',
    alt:
      'Talkr.io chatroom view on desktop, laptop, tablet and mobile screens.',
    bgColor: 'pink',
    slug: 'talkr',
    specialSizing: 'height',
  },

  {
    name: 'PaperKAG.com',
    src: '/static/paperkag.png',
    alt: 'Home page view on mobile screen.',
    bgColor: 'pewter',
    slug: 'paperkag',
    specialSizing: 'height',
  },
  {
    name: 'Leopard-CLI',
    src: '/static/leopard-logo.svg',
    alt: 'Shell view of leopard-cli in action.',
    bgColor: 'blue',
    slug: 'leopard-cli',
  },
  {
    name: 'Copy Report News',
    src: '/static/crn-screen-stack.png',
    alt: 'Stack of different views for Copy Report News.',
    bgColor: 'green',
    slug: 'copy-report-news',
  },
  {
    name: 'Pettigrew Properties',
    src: '/static/pett-prop-desk.png',
    alt: 'Pettigrew Properties home page view on mobile and laptop screens.',
    bgColor: 'pewter',
    slug: 'pettigrew-properties',
    specialSizing: 'height',
  },
  {
    name: 'Musifind',
    src: '/static/musifind-pixel.png',
    alt: 'Home page, sign up form, dashboard and menu views on mobile screens.',
    bgColor: 'pink',
    slug: 'musifind',
    specialSizing: 'height',
  },
];

const projectPageData = {
  paperkag: {
    images: [
      {
        src: '/static/paperkag.png',
        alt: 'Home page view on a mobile device.',
        sizing: 'height',
        color: 'pewter',
      },
      {
        src: '/static/paperkag-cinema-desktop.png',
        alt: 'Cinema page view on a imac.',
        sizing: 'height',

        color: 'pewter',
      },
      {
        src: '/static/kag-video-player.png',
        alt: 'Custom video player component.',
        width: 'full',
      },
      {
        src: '/static/kag-video-player-menu.png',
        alt: 'Custom video player component.',
        width: 'full',
      },
    ],
    name: 'PaperKag.com',
    next: 'leopard-cli',
    description:
      'A portfolio website developed for multi media artist Kenyatta Furious Barnette. It functions as both a wesbite and a progressive web application. I created a custom HTML5 player with an animated logo loading screen while the videos buffer. The website is responsive, fast, clean and SEO friendly.',
    tech: 'NextJS, React, Node, Imgix, Google Cloud Platform',
    href: 'https://www.paperkag.com',
  },

  talkr: {
    images: [
      {
        src: '/static/talkr-login-tablet.png',
        alt: 'Login page view on a tablet screen.',
        sizing: 'height',

        color: 'pewter',
      },
      {
        src: '/static/talkr-room-tablet.png',
        alt: 'Chat room page view on a tablet screen',
        sizing: 'height',

        color: 'pewter',
      },
    ],
    name: 'Talkr.io',
    next: 'paperkag',

    description:
      'Talkr.io is a chat website that is built on Socket.IO. It is a demonstration that I built for a NodeJS class. Sockets allow you to listen for custom event types and then respond based on what event types the listeners pick up. A chat room is a common use case for this technology because it enables a quick back and forth between the client and server.',
    tech: 'Bootstrap, Node, Express, Socket.IO',

    href: 'https://stark-springs-47488.herokuapp.com/',
  },
  'pettigrew-properties': {
    images: [
      {
        src: '/static/pet-prop-home.png',
        alt: 'Pettigrew Properties home page.',
        width: 'full',
        color: 'pewter',
      },
      {
        src: '/static/pet-prop-about.png',
        alt: 'Pettigrew Properties about page.',
        width: 'full',
        color: 'pewter',
      },
    ],
    name: 'PettigrewProperties.com',
    next: 'musifind',
    description:
      'This is a redesign for the local Seattle real estate brokers at Pettigrew Properties. The development is still under way. If you want to contrast and compare the old design with the new you can visit www.pettigrewproperties.com or click the view site link below.',
    tech: 'Figma, Gimp',
    href: 'http://www.pettigrew-properties.com',
  },
  'leopard-cli': {
    images: [
      {
        src: '/static/leopard-cli.gif',
        alt: 'Gif showing commands being typed and run in the terminal.',
        cli: true,
        color: 'pewter',
      },
    ],
    name: 'Leopard-CLI',
    next: 'copy-report-news',
    description: `A CLI that allows you to setup complex NextJS dev environments in seconds. Once installed globally, just run leopard next my-project alont with any other flags. A list of options include, Google fonts, custom express server, CSS preprocessors (LESS, SASS and Stylus are supported), normalize.css and more. This is an open source project and my first NPM publication.`,
    tech: 'Javascript, Mocha, Chai, ShellJS, OCLIF, CLI-UX',
  },
  'copy-report-news': {
    images: [
      {
        src: '/static/crn-home-page.png',
        alt: 'Home page view on a macbook.',
        width: 'full',
        color: 'pewter',
      },
      {
        src: '/static/crn-signup-page.png',
        alt: 'Signup page view on a macbook.',
        width: 'full',
        color: 'pewter',
      },
      {
        src: '/static/crn-about-page.png',
        alt: 'About page view on a macbook.',
        width: 'full',
        color: 'pewter',
      },
      {
        src: '/static/crn-search-page.png',
        alt: 'Search page view on a macbook.',
        width: 'full',
        color: 'pewter',
      },
    ],
    name: 'CopyReportNews.com',
    next: 'pettigrew-properties',

    description: `CopyReportNews.com is a news aggregation site which supports user profiles, saving, sharing, searching and filtering of news articles. It's powered by newsAPI which boasts a large variety of top news outlets.`,
    tech:
      'Material UI, Create React App, React, Node, Express, SASS, MongoDB, Mongoose',
  },
  musifind: {
    images: [
      {
        src: '/static/musifind-showcase-2.png',
        alt: 'The home page, login and signup pages on a mobile phone.',
        width: 'full',
      },
      {
        src: '/static/musifind-showcase-1.png',
        alt: 'The dashboard, and menu pages on a mobile phone.',
        width: 'full',
      },
    ],
    name: 'Musifind',
    next: 'talkr',

    description: `This is a design for an app called musifind. It uses the Spotify API to connect users to their favorite music and accurately suggest new artists based on their listening patterns.`,
    tech: 'Figma',
  },
};

export { projects, projectPageData };
