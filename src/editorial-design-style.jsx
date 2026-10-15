import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import './editorial-design-style.css';

const images = {
  skyline: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=88',
  street: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=88',
  architecture: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=88',
  night: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1600&q=88',
  detail: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=88'
};

const principles = [
  { n: '01', title: 'Grid', copy: 'A quiet structure lets very different content share one page.' },
  { n: '02', title: 'Hierarchy', copy: 'Scale, contrast and placement tell the reader where to begin.' },
  { n: '03', title: 'Typography', copy: 'Display type sets the voice; body type carries the story.' },
  { n: '04', title: 'Image', copy: 'Cropping and sequence turn photography into an argument.' },
  { n: '05', title: 'Navigation', copy: 'Captions, labels and folios keep the reader oriented.' }
];

export default function EditorialDesignStyle({ onNavigate }) {
  return <main className="editorial-shell editorial-real ed2-editorial">
    <nav className="ed2-nav" aria-label="Editorial navigation">
      <button onClick={() => onNavigate?.('library')}><ArrowLeft size={16} /> <span>DESIGN LIBRARY</span></button>
      <button className="ed2-wordmark" onClick={() => onNavigate?.('home')}>RYŪMA <i>リューマ</i></button>
      <span className="ed2-nav-index">FIELD JOURNAL / 07</span>
    </nav>

    <header className="ed2-cover">
      <div className="ed2-issue-line"><span>THE VISUAL REVIEW</span><span>INDEPENDENT CULTURE JOURNAL</span><span>VOL. 07 — 2026</span></div>
      <div className="ed2-cover-rule" />
      <div className="ed2-cover-grid">
        <div className="ed2-cover-copy">
          <span className="ed2-eyebrow"><b>THE CITY ISSUE</b> / 01 — FEATURE</span>
          <h1>THE CITY<br /><i>NEVER</i><br />STANDS<br /><em>STILL.</em></h1>
          <p className="ed2-cover-deck">A visual field guide to the small details, changing light and restless rhythms that make a city feel alive.</p>
          <div className="ed2-cover-byline"><span>WORDS & ART DIRECTION</span><b>THE RYŪMA EDITORIAL DESK</b></div>
        </div>
        <figure className="ed2-cover-photo">
          <img src={images.skyline} alt="A city skyline rising into the evening sky" />
          <span className="ed2-photo-index">FIG. 01 / CITY IN TRANSITION</span>
          <figcaption><b>08:12 → 23:48</b><span>ONE CITY, MANY TEMPOS</span></figcaption>
        </figure>
        <div className="ed2-cover-stamp" aria-hidden="true">FIELD<br />NOTES<br /><i>№ 07</i></div>
      </div>
      <div className="ed2-cover-bottom"><span>ARCHITECTURE</span><i>✳</i><span>PEOPLE</span><i>✳</i><span>LIGHT</span><i>✳</i><span>EVERYDAY LIFE</span><span className="ed2-cover-bottom-right">SCROLL TO EXPLORE ↓</span></div>
    </header>

    <section className="ed2-intro">
      <div className="ed2-intro-label"><span>THE EDITOR'S NOTE</span><span>01 / 05</span></div>
      <h2>Look closer.<br /><i>The story is already there.</i></h2>
      <div className="ed2-intro-copy">
        <p>A city is never one picture. It is a thousand competing details: a window catching the sun, a street filling with people, a building that changes character after dark.</p>
        <p>This issue follows those details and shows how an editorial page can do the same thing — select, sequence and give each moment the space it deserves.</p>
        <div className="ed2-signoff"><span>THE VISUAL REVIEW</span><b>EDITOR'S NOTE / 01</b></div>
      </div>
    </section>

    <section className="ed2-feature" aria-labelledby="ed2-feature-title">
      <div className="ed2-section-rail"><span>01</span><span>THE FEATURE</span><span>READING TIME / 4 MIN</span></div>
      <div className="ed2-feature-heading">
        <div><span className="ed2-eyebrow">URBAN CULTURE / OBSERVATION</span><h2 id="ed2-feature-title">A city is a<br /><i>moving composition.</i></h2></div>
        <p>Every street has a visual rhythm. The trick is learning what to notice — and what to leave out.</p>
      </div>
      <figure className="ed2-wide-photo">
        <img src={images.street} alt="A dense city street framed by buildings and changing light" />
        <figcaption><span>FIG. 02 — THE STREET AS A LIVING GRID</span><span>OBSERVED / 17:26</span></figcaption>
      </figure>
      <div className="ed2-article-grid">
        <div className="ed2-margin-note"><span>IN THE FRAME</span><b>01—03</b><i>↘</i></div>
        <div className="ed2-article-copy">
          <p className="ed2-lead">At street level, the city refuses to stay still. People interrupt the geometry. Reflections double a façade. A passing bus briefly turns a familiar corner into a block of colour.</p>
          <p>Look at the scene as an editor would. The buildings establish structure; movement creates a second layer; the light decides what becomes visible first. None of these elements tells the story alone.</p>
          <p>Good editorial design works through the same kind of selection. It gives the eye an entrance, creates a path through the material and leaves enough room for the reader to make connections.</p>
        </div>
        <aside className="ed2-side-quote"><span>THE CENTRAL IDEA</span><blockquote>“A page is not filled. It is <i>composed.</i>”</blockquote><b>— FIELD NOTE 01</b></aside>
      </div>
    </section>

    <section className="ed2-essay">
      <div className="ed2-section-rail"><span>02</span><span>THE PHOTO ESSAY</span><span>THREE MOMENTS</span></div>
      <div className="ed2-essay-title"><span className="ed2-eyebrow">LIGHT / TIME / PLACE</span><h2>Three ways<br />to <i>see the city.</i></h2></div>
      <div className="ed2-photo-sequence">
        <figure className="ed2-sequence-card ed2-sequence-one"><img src={images.architecture} alt="Minimal architectural forms seen from street level" /><figcaption><b>01 / STRUCTURE</b><span>Buildings draw the first grid.</span></figcaption></figure>
        <div className="ed2-sequence-note"><span className="ed2-big-number">08<span>:</span>12</span><b>MORNING / THE FRAME</b><p>Hard edges, long shadows and open space make the structure legible.</p><i>↗</i></div>
        <figure className="ed2-sequence-card ed2-sequence-two"><img src={images.street} alt="Urban street activity layered between buildings" /><figcaption><b>02 / MOVEMENT</b><span>People break the pattern.</span></figcaption></figure>
        <div className="ed2-sequence-note ed2-sequence-note-dark"><span className="ed2-big-number">17<span>:</span>26</span><b>EVENING / THE PULSE</b><p>Repetition gives the street rhythm; one interruption gives it character.</p><i>↗</i></div>
        <figure className="ed2-sequence-card ed2-sequence-three"><img src={images.night} alt="City buildings and lights against a darkening sky" /><figcaption><b>03 / ATMOSPHERE</b><span>Light rewrites the scene.</span></figcaption></figure>
      </div>
    </section>

    <section className="ed2-anatomy">
      <div className="ed2-anatomy-top"><div><span className="ed2-eyebrow">03 / DESIGN ANATOMY</span><h2>Five decisions.<br /><i>One reading experience.</i></h2></div><p>Editorial design is the coordination of parts. Each part has its own job — but the page only works when they work together.</p></div>
      <div className="ed2-principles">{principles.map((item, index) => <article className={`ed2-principle ed2-principle-${index + 1}`} key={item.n}><span className="ed2-principle-num">{item.n}</span><div className="ed2-principle-mark" aria-hidden="true">{['▦', '↗', 'Aa', '◩', '⌁'][index]}</div><h3>{item.title}</h3><p>{item.copy}</p><span className="ed2-principle-line" /></article>)}</div>
    </section>

    <section className="ed2-workshop">
      <div className="ed2-workshop-header"><span className="ed2-eyebrow">04 / INSIDE THE LAYOUT</span><h2>One story.<br /><i>Different scales.</i></h2><p>Notice how the same subject can be expressed through a headline, a photograph, a note and a quiet detail — without repeating the same layout.</p></div>
      <div className="ed2-layout-board">
        <div className="ed2-board-top"><span>THE VISUAL REVIEW</span><b>LAYOUT STUDY / 07</b><span>FIG. 04</span></div>
        <div className="ed2-board-main">
          <div className="ed2-board-headline"><span>STORY / 01</span><h3>THE SHAPE<br /><i>OF EVERYDAY</i><br />LIFE.</h3><p>Small observations from a city that never holds still.</p></div>
          <div className="ed2-board-image"><img src={images.detail} alt="Architectural detail used as a focal image in a magazine layout" /><span>FIG. A / DETAIL STUDY</span></div>
          <div className="ed2-board-body"><b>THE ARTICLE</b><p>Begin with one clear idea. Let the image add evidence, the text add context and the caption anchor the detail. The reader should understand both the story and where to look next.</p></div>
          <div className="ed2-board-fact"><span>FIELD NOTE</span><strong>01</strong><i>Notice what<br />others pass.</i></div>
          <div className="ed2-board-caption"><b>CAPTION / NAVIGATION</b><p>Small labels make the page easier to enter, leave and return to.</p><span>RYŪMA EDITORIAL DESK — 07</span></div>
        </div>
      </div>
    </section>

    <section className="ed2-closing">
      <div className="ed2-closing-mark">THE VISUAL REVIEW <span>✳</span> ISSUE 07</div>
      <h2>Design the way<br /><i>the story is read.</i></h2>
      <p>Editorial design gives information a voice, a pace and a place to land. The page becomes more than a container: it becomes part of the story.</p>
      <div className="ed2-closing-bottom"><span>GRID · HIERARCHY · IMAGE · TYPE · DETAIL</span><button onClick={() => onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowRight size={17} /></button></div>
    </section>
  </main>;
}
