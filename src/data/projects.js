// `gallery` is a slug that links to /gallery/<slug> (see galleries.js)
// Card props: title, url, urlLabel, role, period, tags, description, gallery, image, imageAlt
// `description[0]` renders as the bold gray tagline, so keep it to one short line.
// Image paths are relative to /public (the Card adds BASE_URL for you).
export const projects = [
  {
    title: 'BrakePoint',
    comingSoon: true,   
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
    comingSoon: true,   
    // role: 'Frontend Developer, UI/UX Designer',
    description: [
      'web application & ui/ux design',
    ],
    // tags: ['web application', 'ui/ux design'],
    period: '2025',
    image: 'images/GalliumClock/User Dashboard.png',
  },
  // {
  //   title: '30 days of UI Challenge',
  //   // url: 'https://github.com/villaverraine/AWS-Ticket-WebApp',
  //   gallery: '30-days-ui-design',
  //   comingSoon: true,   
  //   // role: 'Frontend Developer',
  //   description: [
  //     'ui/ux design & graphic design',
  //   ],
  //   // tags: ['web application', 'ui/ux design'],
  //   period: '2024',                       // TODO
  //   // image: 'images/AWSTicket/cover.png',  // TODO
  // },
  {
    title: 'CCSU Books',
    url: 'https://www.figma.com/proto/ZQVwiTjHrP7PQuhDWDYRgC/STHCIUX?node-id=1168-37456&t=5TcfmZChZHJoRUv0-1',
    urlLabel: 'Figma',
    description: [
      'Strengthens the identity of CCSU CARES within the university and streamlines access to their counseling services.',
    ],
    // tags: ['prototype', 'ui/ux'],
    period: '2024',                       // TODO
    image: 'images/CCSU Books/Landing_Front.png',  // TODO
  },
]