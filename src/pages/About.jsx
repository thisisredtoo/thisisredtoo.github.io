import { useEffect } from 'react'
import Carousel from '../components/Carousel.jsx'
import Footer from '../components/Footer.jsx'
import '../about.css'

// ---------------------------------------------------------------------------
// Content
//
// Image paths are relative to the /public folder, e.g. a file at
// public/about/food/cafe-1.jpg  ->  src: 'about/food/cafe-1.jpg'
// While a list is empty, the page shows grey placeholder boxes (like the Figma).
// ---------------------------------------------------------------------------

const profilePhoto = {
  src: 'IMG20231112123314.jpg', // swap for the Hamilton Manila photo once it's in /public
  alt: 'Erika smiling and giving a thumbs up inside a theater',
  caption: 'me at hamilton manila o((>ω< ))o',
}

const foodTrips = [
  { src: 'images/About_Food/kung pao.jpg', alt: 'Kung Pao Chicken @ Gang' },
  { src: 'images/About_Food/tacos.jpg', alt: 'Beef Birria Tacos @ El Poco Cantina' },
  { src: 'images/About_Food/cha yi.jpg', alt: "Cha Yi's Signature Matcha" },
  { src: 'images/About_Food/salt bread.jpeg', alt: "Salt Bread by yours truly" },
  { src: 'images/About_Food/szechuan.jpg', alt: "Szechuan Noodles @ Gong Han Bistro" },
]

const lifeEvents = [
  { src: 'images/About_Events/grad.jpg', alt: '' },
  { src: 'images/About_Events/booth.jpg', alt: '' },
  { src: 'images/About_Events/cousins.jpg', alt: '' },
  { src: 'images/About_Events/eating.jpeg', alt: '' }
]

// Up to 4 album / song covers shown under the music bar
const musicCovers = [
  // { src: 'about/music/cover-1.jpg', alt: 'Album cover' },
]

const musicList = [
  { genre: 'kpop', songs: 'cty, mia, bad, firestarter' },
  { genre: 'jpop', songs: 'cream soda, fuji kaze, hikariare' },
  { genre: 'musicals', songs: 'so much better, my shot, no one is alone, poto' },
  { genre: 'others', songs: 'fame is a gun, expectations (ft. chapell), laufey, saranggola' },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function About() {
  // The About page uses a warmer off-white background than the rest of the site
  useEffect(() => {
    document.body.classList.add('about-bg')
    return () => document.body.classList.remove('about-bg')
  }, [])

  const coverSlots = Array.from({ length: 4 }, (_, i) => musicCovers[i])

  return (
    <>
      <main className="about-page">
        {/* ---------- Intro ---------- */}
        <section className="about-intro">
          <div className="about-intro-text">
            <h1 className="about-title">Welcome to my space!</h1>
            <p>
              I'm Erika, a recent graduate of De La Salle University - School of Sustainability,
              with the degree BS Computer Science major in Software Technology, and currently
              pursuing a career in UI/UX Design. Growing up, I had a wide variety of hobbies,
              ranging from sports to robotics to music to art and anything in between. Although
              different in their own ways, they have all been different outlets for the same
              thing: my curiosity and desire to create.
            </p>
            <p>
              I am passionate for creating experiences that make people’s lives easier and making
              technology a little more human.
            </p>
            <p>
              In my free time, I like (re)watching shows/movies/musicals, drawing, karaoke-ing with
              friends, baking, and studying Japanese.
            </p>
          </div>

          <figure className="about-photo">
            <img src={`${import.meta.env.BASE_URL}${profilePhoto.src}`} alt={profilePhoto.alt} />
            <figcaption>{profilePhoto.caption}</figcaption>
          </figure>
        </section>

        {/* ---------- Food trips ---------- */}
        <section className="about-feature" aria-labelledby="food-trips">
          <div className="about-feature-text">
            <h2 id="food-trips" className="about-subtitle">
              Food trips!
            </h2>
            <p>I love food and exploring new foods!
            </p>
          </div>
          <Carousel items={foodTrips} label="Photos from food trips" />
        </section>

        {/* ---------- Life events ---------- */}
        <section className="about-feature" aria-labelledby="life-events">
          <div className="about-feature-text">
            <h2 id="life-events" className="about-subtitle">
              Life events!
            </h2>
            <p>
              Here are some things I've been up to, either solo or with the people I love.
            </p>
          </div>
          <Carousel items={lifeEvents} label="Photos from life events" />
        </section>

        {/* ---------- Music snippets ---------- */}
        {/* <section className="about-feature about-music" aria-labelledby="music-snippets">
          <div className="about-feature-text">
            <h2 id="music-snippets" className="about-subtitle">
              Music snippets!
            </h2>
            <p>
              I believe that music is the absolute food for the soul (and the brain, the body, and
              everything else). Here are my recent favorite plays!
            </p>
          </div>

          <div className="music-panel">
            
            <div className="music-bar" />

            <div className="music-covers">
              {coverSlots.map((cover, i) => (
                <div className="music-cover" key={i}>
                  {cover?.src && (
                    <img
                      src={encodeURI(`${import.meta.env.BASE_URL}${cover.src}`)}
                      alt={cover.alt || ''}
                      loading="lazy"
                    />
                  )}
                </div>
              ))}
            </div>

            <div className="music-list">
              {musicList.map((row) => (
                <p key={row.genre}>
                  {row.genre} - {row.songs}
                </p>
              ))}
            </div>
          </div>
        </section> */}
      </main>
    </>
  )
}