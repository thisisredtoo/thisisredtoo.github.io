import WorkInProgress from '../components/WIP.jsx'

export default function Play() {
  return (
    <main className="content">
      <WorkInProgress
        title="Play is under construction"
        message="Erika is still working on this. Check back soon!"
        details={['Illustration galleries', 'Side experiments']}
        eta="Coming soon"
        backTo="/"
        backLabel="Back to Home"
      />
    </main>
  )
}