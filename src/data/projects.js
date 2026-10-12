// `gallery` is a slug that links to /gallery/<slug> (see galleries.js)
// Card props: title, url, urlLabel, role, period, tags, description, gallery, image, imageAlt
// `description[0]` renders as the bold gray tagline, so keep it to one short line.
// Image paths are relative to /public (the Card adds BASE_URL for you).
export const projects = [
  {
    title: 'BrakePoint',
    description: [
      'web application & ui/ux design',
    ],
    // tags: ['computer vision', 'research'],
    period: '2025 - 2026',                  
    // image: 'images/BrakePoint/cover.png', // TODO
  },
  {
    title: 'Attendance Logging System',
    // url: 'https://github.com/villaverraine/GA_Clock',
    gallery: 'ga-clock',
    // role: 'Frontend Developer, UI/UX Designer',
    description: [
      'web application & ui/ux design',
    ],
    // tags: ['web application', 'ui/ux design'],
    period: '2025',
    image: 'images/GalliumClock/User Dashboard.png',
  },
  {
    title: 'AWS Event Ticketing System',
    // url: 'https://github.com/villaverraine/AWS-Ticket-WebApp',
    gallery: 'aws-ticket',
    // role: 'Frontend Developer',
    description: [
      'web application & ui/ux design',
    ],
    // tags: ['web application', 'ui/ux design'],
    period: '2024',                       // TODO
    // image: 'images/AWSTicket/cover.png',  // TODO
  },
  {
    title: 'CCSU Books',
    url: 'https://www.figma.com/proto/ZQVwiTjHrP7PQuhDWDYRgC/STHCIUX?node-id=1168-37456&t=5TcfmZChZHJoRUv0-1',
    urlLabel: 'Figma',
    description: [
      'prototyping & ui/ux design',
    ],
    // tags: ['prototype', 'ui/ux'],
    period: '2024',                       // TODO
    image: 'images/CCSU Books/Landing_Front.png',  // TODO
  },

  // {
  //   title: 'Lab Reservation System',
  //   url: 'https://github.com/thisisredtoo/Computer-Lab-Reservation',
  //   role: 'Frontend Developer',
  //   description: ['a lab reservation system mockup built with React, NodeJS, and Docker'],
  //   tags: ['web application', 'mockup'],
  // },

  // {
  //   title: 'Tweet Sentiment Classifier',
  //   url: 'https://colab.research.google.com/drive/1NaaGiGlq7vTNZHUCNb_g6V52gh0hX_JP?usp=sharing',
  //   urlLabel: 'Colab',
  //   description: ['a machine-learning system trained on a tweet sentiment dataset'],
  //   tags: ['machine learning', 'nlp'],
  // },
  // {
  //   title: 'Predictive Modeling on Socioeconomic Data Using Machine Learning',
  //   url: 'https://drive.google.com/file/d/1REZsN1TH_ccKprDMJC7vJvKbS9pYygX-/view?usp=sharing',
  //   description: ['exploratory data analysis on a labor force survey dataset using PyTorch and scikit-learn'],
  //   tags: ['machine learning', 'data analysis'],
  // },
]