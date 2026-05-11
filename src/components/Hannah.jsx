import { useState } from 'react'
import '../css/Hannah.css'
import centro2 from '../assets/centro2.jpg'
import sglily1 from '../assets/sglily1.png'

/* ── BACKGROUND LILIES ── */
const BG_LILIES = [
  { x: '5%',  y: '8%',  size: 90,  tilt: '-15deg', dur: '3s',   delay: '0s'   },
  { x: '18%', y: '55%', size: 110, tilt: '10deg',  dur: '4s',   delay: '1.2s' },
  { x: '30%', y: '20%', size: 75,  tilt: '-25deg', dur: '5.5s', delay: '0.5s' },
  { x: '45%', y: '70%', size: 130, tilt: '5deg',   dur: '7s',   delay: '2s'   },
  { x: '60%', y: '10%', size: 85,  tilt: '20deg',  dur: '5.5s', delay: '0.8s' },
  { x: '72%', y: '45%', size: 100, tilt: '-10deg', dur: '3.5s', delay: '1.8s' },
  { x: '85%', y: '75%', size: 95,  tilt: '15deg',  dur: '2s',   delay: '0.3s' },
  { x: '92%', y: '25%', size: 120, tilt: '-20deg', dur: '3s',   delay: '2.5s' },
  { x: '10%', y: '85%', size: 80,  tilt: '8deg',   dur: '4s',   delay: '1s'   },
  { x: '55%', y: '40%', size: 70,  tilt: '-30deg', dur: '4s',   delay: '3s'   },
  { x: '38%', y: '88%', size: 105, tilt: '12deg',  dur: '5.5s', delay: '1.5s' },
  { x: '78%', y: '90%', size: 88,  tilt: '-18deg', dur: '4.8s', delay: '0.7s' },
  { x: '5%',  y: '45%', size: 92,  tilt: '-10deg', dur: '4s',   delay: '1s'   },
  { x: '49%', y: '10%', size: 70,  tilt: '-20deg', dur: '2s',   delay: '3s'   },
  { x: '58%', y: '60%', size: 105, tilt: '18deg',  dur: '5.5s', delay: '1.5s' },
  { x: '98%', y: '40%', size: 88,  tilt: '-10deg', dur: '4.8s', delay: '0.7s' },
]

const LilySVG = ({ size }) => (
  <svg viewBox="0 0 120 160" width={size} height={size * 1.35}>
    <path d="M60 155 Q58 120 56 80" fill="none" stroke="#c8a0b8" strokeWidth="3" strokeLinecap="round" />
    <path d="M57 120 Q42 108 48 90 Q56 108 57 120Z" fill="#e8b4d0" />
    <path d="M58 105 Q72 93 68 75 Q60 93 58 105Z" fill="#e8b4d0" />
    {[0, 60, 120, 180, 240, 300].map((r, i) => (
      <ellipse key={i} cx="60" cy="55" rx="10" ry="28"
        fill="#f9c0d8" stroke="#f090b8" strokeWidth="0.8"
        transform={`rotate(${r} 60 55)`} />
    ))}
    <circle cx="60" cy="55" r="10" fill="#fce8a0" stroke="#e8c060" strokeWidth="1" />
    <circle cx="58" cy="52" r="2" fill="#e89030" />
    <circle cx="62" cy="52" r="2" fill="#e89030" />
    <circle cx="60" cy="58" r="2" fill="#e89030" />
  </svg>
)

const LilyBackground = () => (
  <div className="nb-bg">
    {BG_LILIES.map((l, i) => (
      <div key={i} className="nb-bg-lily" style={{
        left: l.x, top: l.y,
        '--tilt': l.tilt,
        '--dur': l.dur,
        '--delay': l.delay,
      }}>
        <LilySVG size={l.size} />
      </div>
    ))}
  </div>
)

/* ── SPIRALS ── */
const Spirals = ({ count = 8 }) => (
  <>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="nb-spiral" />
    ))}
  </>
)

/* ── PAGE LETTERS ── */
const PAGE_LETTERS = ['I', 'L', 'O', 'V', 'E', 'Y', 'O', 'U']

/* ── RIGHT PAGE CONTENTS (8 pages) ── */
const PAGE_COUNT = 8

const RightPageContent = ({ pageNum }) => {
  const letter = PAGE_LETTERS[pageNum - 1]

  const contents = {
    1: {
      greeting: 'Hi Hannah,',
      body: (
        <>
         <br /> <br /> I know we've had our Ups and downs lately, and i just want you to know na, despite all that,
         I still care about you so much. I hope this little notebook can be a reminder of how much you mean to me, 
         and how grateful I am to have you in my life. <br /> <br /> 
         So, here goes nothing, a few pages of thoughts, feelings,
         and memories that I never want to forget. <br /> <br />
        </>
      ),
    },
    2: {
      greeting: 'Maximum effort',
      body: (
        <>
          <br /> <br /> Here I am, 6am na in the morning, wala pakong tulog, tinatry kopang tapusin tong notebook natoh for you.
          and as im writing this, i cant help but smile, i just want you to know that every word in here is coming straight from the heart. <br />
          I bought you flowers, wrote you letters, made you lego flower, the ferrero, and now etong coded notebook. Who would've thought, na ako,
          someone who has never done anything in his life na may effort, ay finally doing something na may worth for someone else.
        </>
      ),
    },
    3: {
      greeting: 'Reminiscing',
      body: (
        <>
          <br /> <br /> I miss it already. The calls na lumalagpas sa sleep sched mo kase andaldal naten, panay tawanan lng tayo,
          tas sasabihin mo lng "cge another 10min", bago ka matulog, o kaya di lng ako nauubusan ng tanong tas panay sagot ka kase.
          I miss it hannah, ung mga times na excited pa tayong mag call sa isat isa kase andami nating gusto ikwento. syempre pati ung mga times na
          wala naman tayong sinasabe sa call, may kanya kanya taung ginagawa, ikaw nag rereview, ako nag ccode, pero magkasama lng tau.
          I miss it all so much.

        </>
      ),
    },
    4: {
      greeting: 'Time',
      body: (
        <>
          <br /> <br /> Time really goes by so fast, and it's crazy to think about how much has happened since we first met. 
          From our first conversation, to our first date, our first arguement, up to all the little moments in between.
          These past months with you have been the happiest and most genuine moments I've had in a long time. You became someone I look forward to every day.
          And what can i say, I really really love hearing your voice eh. 
          and kung anong oras pa man ang meron ako sayo, I'll make sure to enjoy and cherish every second of it.
        </>
      ),
    },
    5: {
      greeting: 'Willingness',
      body: (
        <>
          <br /><br />I know things haven't always been perfect between us, we are polar opposites nga kamo eh.
          ganto ako, ganyan ka, ayaw motoh, ako gusto ko yon, di tayo tugma eh. pero alam mo, ayokong makatugma kahit sino, ikaw lang.
          and lately I realized, na maybe it's not about being perfect for each other, but about being willing to work through the imperfections together.
          And I want you to know that I'm willing, Hannah. Willing to learn, willing to grow, willing to get hurt, and willing to do whatever it takes to make this work, because <b>YOU</b> are worth it all.
        </>
      ),
    },
    6: {
      greeting: 'Promise',
      body: (
        <>
         <br /><br /> You are a package eh noh, may mga times na nakakainis ka, may mga times na di kita gets, may mga times na unfair and unreasonable ka.
         but you know what, I love them all about you, the good, the bad, and everything in between. I promise to always understand you at times when you dont even understand your own.
         And I promise to love you not just for who you are,
          but for who you are becoming, and for all the versions of you that I have yet to discover.
          I just need you to watch and trust me, I want you to see me <br /> fulfill these promises.

        </>
      ),
    },
    7: {
      greeting: 'A feeling',
      body: (
        <>
          You felt like the kind of song i accidentally discovered at 2am, then suddenly i listen to it on repeat.
          You felt like the kind of movie that i just know will be my favorite, even before the ending credits start rolling.
          You felt like a prayer that just suddenly got answered, a wish that i didnt even know i made, and that says a lot because im agnostic.
          If life gave me another chance to begin, I would still find my way back to you. not to fix the mistakes or change the ending,
          but to feel you a little longer the second time around.
          
        </>
      ),
    },
    8: {
      greeting: 'Next page',
      body: (
        <>
          <br /> <br /> Maybe i was only a chapter in your story, just a page in your book, perhaps
          just a sentence in your diary. but you know what, Im grateful for every word, every line, and every page that i got to be a part of in your life story.
          but to me, you were the paragraph that changed the entire meaning of the story.
          This notebook may end here, but who knows,
          will it have a sequel? Will there be a part 2, or maybe even a trilogy? I guess it depends on how the story goes, but one thing's for sure, 
          I hope to keep writing new pages with you, Hannah.

        </>
      ),
      isLast: true,
    },
  }

  const c = contents[pageNum]

  return (
    <div className="nb-letter">
      <span className="nb-drop-letter">{letter}</span>
      <p className="nb-letter-greeting">{c.greeting}</p>
      <p className="nb-letter-body">{c.body}</p>
      {c.isLast && (
        <p className="nb-letter-close-hint">tap once more to close</p>
      )}
    </div>
  )
}

/* ── MAIN ── */
export default function Hannah() {
  const [pageNum, setPageNum]   = useState(1)
  const [fading, setFading]     = useState(false)
  const [bookOpen, setBookOpen] = useState(false)
  const [bookKey, setBookKey]   = useState(0)
  const [closing, setClosing]   = useState(false)

  const handleOpenBook = () => {
    setBookKey(k => k + 1)
    setBookOpen(true)
    setPageNum(1)
    setFading(false)
  }

  const handleCloseBook = () => {
    setClosing(true)
    setTimeout(() => {
      setBookOpen(false)
      setClosing(false)
      setPageNum(1)
    }, 400)
  }

  const handleNextPage = () => {
    if (fading) return
    if (pageNum === PAGE_COUNT) {
      handleCloseBook()
      return
    }
    setFading(true)
    setTimeout(() => {
      setPageNum(p => p + 1)
      setFading(false)
    }, 350)
  }

  return (
    <div className="nb-wrapper">
      <LilyBackground />

      <div className="nb-content">

        {/* ── CLOSED ── */}
        {!bookOpen && (
          <div className="nb-closed" onClick={handleOpenBook} role="button" aria-label="Open notebook">
            <div className="nb-cover">
              <div className="nb-spine"><Spirals count={6} /></div>
              <p className="nb-closed-title">For<br />Hannah</p>
              <p className="nb-closed-sub">a little something ♡</p>
              <span className="nb-hint">click to open</span>
            </div>
          </div>
        )}

        {/* ── OPEN BOOK ── */}
        {bookOpen && (
          <div className="nb-open">

            {/* corner flower */}
            <img src={sglily1} alt="" className="nb-corner-lily nb-corner-lily--br" />

            <button className="nb-close-btn" onClick={handleCloseBook} aria-label="Close">✕</button>

            <div
              className={`nb-book nb-book-enter ${closing ? 'nb-book-exit' : ''}`}
              key={bookKey}
            >
              {/* Spine */}
              <div className="nb-open-spine"><Spirals count={8} /></div>

              {/* ── LEFT PAGE: always centro2.jpg ── */}
              <div className="nb-page nb-page-left">
                <img src={centro2} alt="centro2" className="nb-photo" />
              </div>

              {/* ── RIGHT PAGE: fades between pages ── */}
              <div
                className="nb-page nb-page-right nb-page-clickable"
                onClick={handleNextPage}
              >
                <div className={`nb-fade-layer ${fading ? 'nb-fade-out' : 'nb-fade-in'}`}>
                  <RightPageContent pageNum={pageNum} />
                </div>
              </div>

            </div>

            {/* page indicator + hint */}
            <div className="nb-bottom-bar">
              <span className="nb-page-dots">
                {Array.from({ length: PAGE_COUNT }).map((_, i) => (
                  <span
                    key={i}
                    className={`nb-dot ${i + 1 === pageNum ? 'nb-dot--active' : ''}`}
                  />
                ))}
              </span>
              <p className="nb-flip-hint">
                {pageNum < PAGE_COUNT ? 'click the page to turn →' : 'click to close the notebook'}
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}