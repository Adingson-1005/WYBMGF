import '../css/Reasons.css'

const REASONS = [
  "Your smile literally lights up the whole room",
  "The way you say my name",
  "How you care so deeply for the people around you",
  "Your laugh — especially the uncontrollable one",
  "How smart you are, even when you deny it",
  "The way you get excited about little things",
  "How you always try your best, even when it's hard",
  "Your honesty, even when it's not what I want to hear",
  "The way you look when you're focused on something",
  "How you make even boring days feel interesting",
  "Your voice — I could listen to it forever",
  "The way you argue, somehow you're always passionate",
  "How you remember the smallest details about things you love",
  "Your courage to always speak your mind",
  "The way you look in photos you don't know are being taken",
  "How you make me want to be a better person",
  "The way you overthink — it means you care",
  "Your taste in things — music, food, everything",
  "How you can make me smile even when I'm frustrated",
  "The way you say 'cge na nga'",
  "Your stubbornness — it means you stand for something",
  "How you always find a way through hard things",
  "The way you laugh at your own jokes before finishing them",
  "How genuine you are — no pretense, just you",
  "The way you get shy about certain things",
  "How you make silence feel comfortable",
  "Your curiosity — you always want to understand things",
  "The way you say sorry when you mean it",
  "How you look when you're sleepy",
  "Your independence — you never need anyone to complete you",
  "The way you text — I can always hear your voice in it",
  "How passionate you are about the things you love",
  "The way your mood changes and I somehow always notice",
  "How you handle things maturely even when it's hard",
  "Your sensitivity — it's a strength, not a weakness",
  "The way you make me feel heard",
  "How you show love in your own quiet ways",
  "Your patience — especially with me",
  "The way you grow from every experience",
  "How you never give up on things that matter to you",
  "The way you look when something finally makes sense to you",
  "How you make every conversation feel worth having",
  "Your realness — you never try to be someone you're not",
  "The way you hold yourself, even on hard days",
  "How you always show up, even when it's difficult",
  "The way you've changed me without even trying",
  "How being around you just feels like home",
  "The way you love — quietly, deeply, and sincerely",
  "Everything about you that you don't even notice",
  "Simply because it's you, Hannah ♡",
]

export default function Reasons() {
  return (
    <div className="rs-wrapper">
      <div className="rs-header">
        <h1 className="rs-title">50 Reasons</h1>
        <p className="rs-sub">why I like you, Hannah ♡</p>
      </div>

      <div className="rs-grid">
        {REASONS.map((reason, i) => (
          <div
            key={i}
            className="rs-card"
            style={{ '--rotate': `${(i % 2 === 0 ? 1 : -1) * (i % 2)}deg` }}
          >
            <span className="rs-number">{String(i + 1).padStart(2, '0')}</span>
            <p className="rs-reason">{reason}</p>
          </div>
        ))}
      </div>
    </div>
  )
}