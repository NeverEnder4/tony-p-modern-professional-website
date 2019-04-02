const projects = [
  {
    name: 'Talkr.io',
    src: '/static/talkr-multi.png',
    alt:
      'Talkr.io chatroom view on desktop, laptop, tablet and mobile screens.',
    bgColor: 'green',
    slug: 'talkr',
    specialSizing: 'height',
  },
  {
    name: 'Pettigrew Properties',
    src: '/static/pett-prop-desk.png',
    alt: 'Pettigrew Properties home page view on mobile and laptop screens.',
    bgColor: 'blue',
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
  {
    name: 'PaperKAG.com',
    src: '/static/paperkag.png',
    alt: 'Home page view on mobile screen.',
    bgColor: 'pewter',
    slug: 'paperkag',
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
    description:
      'Talkr.io is a chat website that is built on Socket.IO. It is a demonstration that I built for a NodeJS class. Sockets allow you to listen for custom event types and then respond based on what event types the listeners pick up. A chat room is a common use case for this technology because it enables a quick back and forth between the client and server.',
    tech: 'Bootstrap, Node, Express, Socket.IO',

    href: 'https://stark-springs-47488.herokuapp.com/',
  },
};

export { projects, projectPageData };
