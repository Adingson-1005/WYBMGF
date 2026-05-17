import '../css/Gallery.css'
import n1 from '../assets/n1.jpg'
import n2 from '../assets/n2.jpg'
import n3 from '../assets/n3.jpg'
import n4 from '../assets/n4.jpg'
import n5 from '../assets/n5.jpg'
import n6 from '../assets/n6.jpg'
import n7 from '../assets/n7.jpg'
import n8 from '../assets/n8.jpg'
import n9 from '../assets/n9.jpg'
import n10 from '../assets/n10.jpg'
import n11 from '../assets/n11.jpg'
import n12 from '../assets/n12.jpg'

const PHOTOS = [
  { id: 1,  src: n1,  caption: 'Virst vid call' },
  { id: 2,  src: n2,  caption: 'Genuine moment'  },
  { id: 3,  src: n3,  caption: 'My first gift for you'      },
  { id: 4,  src: n4,  caption: 'You'      },
  { id: 5,  src: n5,  caption: 'KFC lunch'              },
  { id: 6,  src: n6,  caption: 'Your first "I miss you"'         },
  { id: 7,  src: n7,  caption: 'remember this day?'         },
  { id: 8,  src: n8,  caption: 'The moment i realized i want you'             },
  { id: 9,  src: n9,  caption: 'I want you more'              },
  { id: 10, src: n10, caption: 'Our first picture together'       },
]

const LETTER = `Hi hannah,

I've written you so many letters that maybe, at this point, you're already tired of them, and dont worry, maybe this will be the last one too. I hope you give me more chances but, nonetheless, pls read this.

I just saw this post this afternoon and remembered the first time we started talking. It was back on the morning of February 24. I was getting ready for school because I was assigned to watch over our booth for foundation week, and ikaw rin, papunta sa school nyo for attendance since foundation week nyo rin. I remember I could barely let go of my phone because we were so busy talking to each other. I wasn't even that interested at first, I just wanted someone to talk to, but you were so full of energy back then that I didn't realize I was slowly being pulled in by your words. I even took pictures of everything and sent them to you just to impress you, whahshwhaha. Then ayun, sobrang dami nating napag-usapan hanggang sa dumating yung point na nagra-rant ka na sakin, and then came our first call. The energy kept going for weeks and weeks until I realized that you had already become someone very special to me.

Honestly, I wanted it to be you. Not because I simply wanted a partner, or someone to show off to other people, but because when things were good, you made me feel alive in ways I hadn't felt since. I liked who I became whenever we talked, how much I cared, how deeply I felt, how everything seemed more intense and more real. But it was far from perfect. There were times when I had to endure being left alone with my anxious thoughts to the point where I couldn't even sleep or eat properly anymore.

Each time, I would tell you that everything was okay, that if you needed me, I was only one chat or one call away. But I didn't realize that maybe I was giving too much of myself to the point where it started making you feel pressured. And looking back, I see the parts where I insisted or forced things out when I should've stayed quiet instead. Maybe I unconsciously gave you a kind of pressure you never asked for. And mula noon, things slowly started going downhill, but tiniis ko yung mga araw na yun because I kept convincing myself that maybe it was only a phase. The way I told myself that pain was normal, that love was supposed to feel heavy sometimes. But I was wrong. I confused intensity with intimacy. I thought wanting someone this badly had to mean it was normal, and without realizing it, I started forcing you to give me the same amount of love that I was giving you.

Aside from us, I know you also have things in your life that you want to hold onto, especially yourself. And in the end, you chose them, and honestly, I'm happy that you did. You chose peace instead of forcing yourself to stay in something that felt outside your comfort zone. I don't blame you for making that choice, and maybe that's why it hurts so differently. There's no anger to hold onto, no one to blame, and no words left that could ever persuade you to stay. I know you're human too. You get tired, even of the things you still care about. Sometimes you push people away not out of hatred, but because you're trying to protect yourself too. You made your decision, and there's nothing left for me to fight against anymore, just the quiet realization that people leave not because you weren't enough, but because they're trying to survive their own life in their own way.

I was full of doubts and contradictions, full of worries and questions, but none of them were ever enough to make me give up on you. I still held onto you tightly even when my own thoughts were drowning me. Kaya thank you so much for everything up to this point, and for the past two months and three weeks that I got to know you, I felt nothing but genuine joy. Even now, I want nothing more than to know how your day went, how it will go, what you ate for lunch, what you did during your break time, and every little detail about your day. Maybe I really was too in love with you. I gave everything of myself to prove to you that you deserve all the love in the world.

And if I were given the chance to go back in time, knowing it would still end the same way, I still would, without hesitation, not to change anything, but just to experience loving you a little longer for the second time around. I learned so much during the short time that we had, and I know I'll carry those memories with me for a very long time.              

I love you more than anything and everything combined.`


export default function Gallery() {
  return (
    <div className="gl-wrapper">

      {/* ── POLAROID GRID ── */}
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

      {/* ── LETTER SECTION ── */}
      <div className="gl-letter-section">

        {/* two photos */}
        <div className="gl-letter-photos">
          <div className="gl-letter-polaroid">
            <div className="gl-letter-photo-box">
              <img src={n11} alt="us ♡" className="gl-photo" />
            </div>
            <p className="gl-caption">First convo naten sa IG</p>
          </div>
          <div className="gl-letter-polaroid">
            <div className="gl-letter-photo-box">
              <img src={n12} alt="" className="gl-photo" />
            </div>
            <p className="gl-caption">This post</p>
          </div>
        </div>

        {/* the letter */}
        <div className="gl-letter-card">
          <p className="gl-letter-label">Pls read</p>
          <div className="gl-letter-body">
            {LETTER.split('\n\n').map((para, i) => (
              <p key={i} className="gl-letter-para">{para}</p>
            ))}
          </div>
        </div>

      </div>

    </div>
  )
}