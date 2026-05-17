import '../css/Gallery.css'

// swap these with real imports once you add photos to assets
// e.g. import photo1 from '../assets/photo1.jpg'
const PHOTOS = [
  { id: 1,  src: null, caption: 'our first photo together ♡' },
  { id: 2,  src: null, caption: 'that day we walked around' },
  { id: 3,  src: null, caption: 'you and your smile 🌸'    },
  { id: 4,  src: null, caption: 'late night adventures'     },
  { id: 5,  src: null, caption: 'coffee date ☕'            },
  { id: 6,  src: null, caption: 'my favorite candid'        },
  { id: 7,  src: null, caption: 'remember this day?'        },
  { id: 8,  src: null, caption: 'us being us 💕'            },
  { id: 9,  src: null, caption: 'golden hour ✨'            },
  { id: 10, src: null, caption: 'one of the best days'      },
]

export default function Gallery() {
  return (
    <div className="gl-wrapper">
      <div className="gl-header">
        <h1 className="gl-title">Us, in pictures</h1>
        <p className="gl-sub">a collection of moments I never want to forget ♡</p>
      </div>

      <div className="gl-grid">
        {PHOTOS.map((photo, i) => (
          <div
            key={photo.id}
            className="gl-polaroid"
            style={{ '--rotate': `${(i % 2 === 0 ? 1 : -1) * (1 + (i % 3))}deg` }}
          >
            <div className="gl-photo-box">
              {photo.src
                ? <img src={photo.src} alt={photo.caption} className="gl-photo" />
                : <div className="gl-placeholder">
                    <span className="gl-placeholder-icon">🌸</span>
                    <span className="gl-placeholder-text">photo coming soon</span>
                  </div>
              }
            </div>
            <p className="gl-caption">{photo.caption}</p>
          </div>
        ))}
      </div>
    </div>
  )
}