const projects = [
  {
    name: 'Talkr.io',
    src: '/static/talkr-multi.png',
    alt:
      'Talkr.io chatroom view on desktop, laptop, tablet and mobile screens.',
    bgColor: 'green',
    slug: 'talkr',
  },
  {
    name: 'Pettigrew Properties',
    src: '/static/pett-prop-desk.png',
    alt: 'Pettigrew Properties home page view on mobile and laptop screens.',
    bgColor: 'blue',
    slug: 'pettigrew-properties',
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
        src: '/static/paperkag-desktop.png',
        alt: 'Cinema page view on a macbook.',
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
};

export { projects, projectPageData };
