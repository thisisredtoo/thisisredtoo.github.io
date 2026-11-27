// Slug → page. The slug is the URL (/#/project/<slug>) and the value of
// `page: '<slug>'` on that project's card in projects.js.
import AttendanceTracker from './AttendanceTracker.jsx'
import CCSU from './CCSU.jsx'

export const projectPages = {
  'attendance-tracker': AttendanceTracker,
  'ccsu': CCSU,
}
