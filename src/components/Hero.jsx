export default function Hero() {
  return (
    <section id="top" className="about">
      <div className="about-container">
        <div className="about-text">
          <h1>Hello! I'm Erika Alvarez.</h1>
        </div>
        <div className="about-image">
          <img src={`${import.meta.env.BASE_URL}IMG20231112123314.jpg`} alt="Profile photo" />
        </div>
      </div>
    </section>
  )
}
