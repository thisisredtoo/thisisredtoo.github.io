// Image files live in /public/images/... and are referenced WITHOUT the "public" prefix.
// Tip: avoid spaces in filenames (e.g. rename "Sign Up.png" -> "sign-up.png").
// Spaces still work here because we encode the URL, but renaming is safer.
export const galleries = {
  'ga-clock': {
    title: 'Attendance Logging System',
    intro: 'A collection of initial illustrations of the Attendance Logging System project.',
    folder: 'images/GalliumClock',
    items: [
      { title: 'Login', file: 'Login.png' },
      { title: 'Sign Up', file: 'Sign Up.png' },
      { title: 'User Dashboard', file: 'User Dashboard.png' },
      { title: 'Admin Dashboard', file: 'Admin Dashboard.png' },
      { title: 'User Attendance Log', file: 'User Attendance Log.png' },
    ],
  },
  'aws-ticket': {
    title: 'AWS Event Ticketing System',
    intro: 'A collection of initial illustrations of the AWS Event Ticketing System project.',
    folder: 'images/AWS Event Ticketing App',
    items: [
      { title: 'Forgot Password', file: 'Forgot Password - 360 x 640.png' },
      { title: 'Moderator View', file: 'Moderator View - 360 x 640.png' },
      { title: 'User Dashboard', file: 'User Dashboard - 360 x 640.png' },
      { title: 'Admin Dashboard', file: 'Admin View - 360 x 640.png' },
      { title: 'User View Log', file: 'User View - 360 x 640.png' },
      { title: 'User Profile', file: 'User Profile.png' },
    ],
  },
}
