import React from 'react';
import { ArrowLeft, ArrowUpRight, ArrowRight } from 'lucide-react';
import './editorial-design-style.css';

const art = {
  portrait: 'https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1500&q=90',
  gallery: 'https://images.unsplash.com/photo-1577083552431-6e5fd01aa342?auto=format&fit=crop&w=1500&q=90',
  frame: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=90',
  detail: 'https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=1400&q=90'
};

export default function EditorialDesignStyle({ onNavigate }) {
  return <main className="editorial-shell ed3-editorial">
    <nav className="ed3-nav">
      <button onClick={() => onNavigate?.('library')}><ArrowLeft size={16}/> DESIGN LIBRARY</button>
      <span className="ed3-brand">RYŪMA <i>ART / CULTURE</i></span>
      <span className="ed3-folio">EXHIBITION JOURNAL — 07</span>
    </nav>

    <header className="ed3-cover">
      <div className="ed3-masthead"><span>THE INDEPENDENT ART REVIEW</span><span>ISSUE 07 / AUTUMN 2026</span><span>EST. MMXXI</span></div>
      <div className="ed3-cover-stage">
        <div className="ed3-cover-title">
          <p className="ed3-kicker"><span className="ed3-red-dot"/> A NEW LOOK AT OLD MASTERS / FEATURE 01</p>
          <h1><span>THE</span><span className="ed3-image-word" style={{'--ed3-photo':`url("${art.portrait}")`}}>ART</span><span>THAT</span><em>STAYS.</em></h1>
          <div className="ed3-cover-deck"><span className="ed3-deck-mark">↘</span><p>Some images refuse to stay inside their frames. A closer look at the works that follow us out of the gallery.</p></div>
          <div className="ed3-cover-credit"><span>WORDS / LENA MORI</span><b>THE RYŪMA EDITORIAL DESK</b></div>
        </div>
        <figure className="ed3-cover-art">
          <div className="ed3-frame"><img src={art.portrait} alt="Expressive fine-art portrait in a gallery" /></div>
          <span className="ed3-frame-label">PLATE 01 — THE GAZE</span>
          <span className="ed3-art-seal">LOOK<br/>AGAIN<i>✳</i></span>
          <figcaption><b>FIG. 01</b><span>THE IMAGE OUTLIVES THE ROOM</span></figcaption>
        </figure>
      </div>
      <div className="ed3-cover-footer"><span>PAINTING <b>✳</b> MEMORY <b>✳</b> MEANING</span><span>SCROLL THE EXHIBITION ↓</span></div>
    </header>

    <section className="ed3-opening">
      <div className="ed3-opening-index"><span>01</span><b>THE OPENING NOTE</b><span>3 MIN READ</span></div>
      <div className="ed3-opening-grid">
        <h2>A picture<br/>is never <i>just</i><br/><span>a picture.</span></h2>
        <div className="ed3-opening-copy"><p className="ed3-dropcap">The first thing you notice is rarely the whole story. A glance, a hand, a colour held just a little longer than expected — the smallest detail can keep a work alive long after you leave the room.</p><p>This issue explores how an editorial layout can borrow that same power: one image, one decisive headline, and enough quiet space for the viewer to look again.</p><span className="ed3-signature">A NOTE FROM THE EDITOR <i>↗</i></span></div>
      </div>
    </section>

    <section className="ed3-feature">
      <div className="ed3-section-head"><span>02 / THE FEATURE</span><span>LOOKING IS AN ACTIVE VERB</span><span>PLATE 02</span></div>
      <div className="ed3-feature-title"><span className="ed3-kicker">ON THE POWER OF A SINGLE IMAGE</span><h2>What the eye<br/><i>cannot leave behind.</i></h2><p>Art creates a pause in the noise. Editorial design decides how that pause begins — and where it leads.</p></div>
      <figure className="ed3-gallery-image"><img src={art.gallery} alt="A gallery space filled with artworks" /><figcaption><span>01 — THE ROOM</span><span>ART IN CONVERSATION WITH SPACE</span></figcaption></figure>
      <div className="ed3-feature-notes"><div className="ed3-note-number">A<br/>01</div><p className="ed3-feature-lead">The frame gives an image a boundary. The page gives it a second life.</p><div className="ed3-note-copy"><p>Scale changes the way we read an image. A small reproduction asks us to lean in; a full-bleed image makes us stop. The contrast between the two is not decoration — it is pacing.</p><p>Place the image first, then let type respond to it. The strongest editorial pages feel discovered, not assembled from a template.</p></div></div>
    </section>

    <section className="ed3-spread">
      <div className="ed3-spread-top"><span>03 / THE IMAGE STUDY</span><span>TYPE × PHOTOGRAPHY</span></div>
      <div className="ed3-spread-heading"><h2>LET THE IMAGE<br/><i>BREAK THE FRAME.</i></h2><p>A poster study in three layers: the picture, the word, and the detail that refuses to sit still.</p></div>
      <div className="ed3-poster">
        <div className="ed3-poster-top"><span>THE ART REVIEW / SPECIAL EXHIBITION</span><span>OPEN DAILY — 10:00 / 18:00</span></div>
        <div className="ed3-poster-art"><img src={art.portrait} alt="Fine-art portrait used as the poster's central image"/><span className="ed3-poster-overline">A FACE CAN HOLD<br/>A THOUSAND STORIES</span><span className="ed3-poster-giant">STILL<br/><i>HERE.</i></span><div className="ed3-mini-frame"><img src={art.frame} alt="A close view of a framed painting"/></div><span className="ed3-poster-ticket">EXHIBITION<br/><b>NO. 07</b><i>↗</i></span></div>
        <div className="ed3-poster-bottom"><b>THE ART THAT STAYS</b><span>PAST / PRESENT / ALWAYS</span><span>RYŪMA CULTURE DESK</span></div>
      </div>
      <div className="ed3-spread-caption"><span>FIG. 03 — THE CAMPAIGN POSTER</span><p>Photography becomes the material of the headline. A second framed image breaks the grid; the red field anchors the composition.</p></div>
    </section>

    <section className="ed3-practice">
      <div className="ed3-practice-head"><span className="ed3-kicker">04 / ANATOMY OF THE SPREAD</span><h2>Five choices.<br/><i>One clear voice.</i></h2><p>Each element has a job. The design works when every choice supports the same story.</p></div>
      <div className="ed3-anatomy">
        <article><span>01</span><b className="ed3-anatomy-symbol">▦</b><div><h3>Composition</h3><p>Let one image lead. Build the surrounding elements around its visual weight.</p></div></article>
        <article><span>02</span><b className="ed3-anatomy-symbol">Aa</b><div><h3>Image-filled type</h3><p>Clip photography into one short word so the image and headline become a single object.</p></div></article>
        <article><span>03</span><b className="ed3-anatomy-symbol">↗</b><div><h3>Overlap</h3><p>Allow one frame or label to cross the edge. One controlled interruption creates depth.</p></div></article>
        <article><span>04</span><b className="ed3-anatomy-symbol">◩</b><div><h3>Contrast</h3><p>Pair a vivid image with paper, ink and one decisive accent colour.</p></div></article>
        <article><span>05</span><b className="ed3-anatomy-symbol">№</b><div><h3>Captions</h3><p>Small labels and folios orient the reader without competing with the artwork.</p></div></article>
      </div>
    </section>

    <section className="ed3-closing">
      <div className="ed3-closing-image"><img src={art.detail} alt="A detail of a painting with expressive colour and texture"/><span>PLATE 04 / THE LAST LOOK</span></div>
      <div className="ed3-closing-copy"><span className="ed3-kicker">THE EDITOR'S LAST WORD</span><h2>Make them<br/><i>look twice.</i></h2><p>Great editorial design doesn't simply show the reader what matters. It creates a moment they want to stay with.</p><button onClick={() => onNavigate?.('library')}>RETURN TO DESIGN LIBRARY <ArrowRight size={16}/></button></div>
      <footer className="ed3-footer"><span>RYŪMA — DESIGN ANATOMY</span><span>IMAGE / TYPE / STORY</span><span>END OF ISSUE 07 ↗</span></footer>
    </section>
  </main>;
}
