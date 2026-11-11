import WorkInProgress from '../components/WIP.jsx'

export default function Play() {
  return (
    <main className="content">
      <WorkInProgress
        title="Play is under construction"
        message="I'm still putting together this page. Something fun is coming!"
        details={['Illustration galleries', 'Side experiments']}
        eta="Coming soon"
        backTo="/"
        backLabel="Back to Home"
      />
    </main>
  )
}