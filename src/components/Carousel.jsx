// Continuously scrolling photo strip.
//
// How the loop works: the list is rendered twice back to back and the track
// slides left by exactly 50% (one full copy), then restarts. Because the
// second copy looks identical to the first, the jump is invisible.
//
// Props
//   items          [{ src, alt, caption? }]  src is relative to /public. Empty = grey placeholders.
//                  On hover, the photo lifts and shows `caption` (falls back to `alt`).
//   label          accessible name for the region
//   secondsPerItem how long each photo takes to pass by (higher = slower)

const MIN_ITEMS = 4 // keep each copy wider than the visible area so there are no gaps

export default function Carousel({ items = [], label, secondsPerItem = 6 }) {
  const slides = items.length ? items : Array.from({ length: MIN_ITEMS }, () => ({}))

  const group =
    slides.length >= MIN_ITEMS
      ? slides
      : Array.from({ length: MIN_ITEMS }, (_, i) => slides[i % slides.length])

  const loop = [...group, ...group]
  const duration = `${group.length * secondsPerItem}s`

  return (
    <div className="carousel" role="region" aria-label={label}>
      <ul className="carousel-track" style={{ '--duration': duration }}>
        {loop.map((item, i) => {
          const isCopy = i >= group.length // the duplicate half is hidden from screen readers
          const text = item.caption || item.alt // shown on hover / keyboard focus
          return (
            <li
              key={i}
              className="carousel-item"
              aria-hidden={isCopy || undefined}
              tabIndex={item.src && !isCopy ? 0 : undefined} // lets keyboard & touch users reveal the caption
            >
              {item.src && (
                <>
                  <img
                    src={encodeURI(`${import.meta.env.BASE_URL}${item.src}`)}
                    alt={isCopy ? '' : item.alt || ''}
                    loading="lazy"
                    draggable="false"
                  />
                  {/* aria-hidden: screen readers already get the same text from the image's alt */}
                  {text && (
                    <span className="carousel-caption" aria-hidden="true">
                      {text}
                    </span>
                  )}
                </>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}