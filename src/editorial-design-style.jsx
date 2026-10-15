import React from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import './editorial-design-style.css';

const photos = {
  night: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=88',
  street: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1600&q=88',
  architecture: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=88',
  detail: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=88',
  people: 'https://images.unsplash.com/photo-1517457373958-b7 94d2e8f5?auto=format&fit=crop&w=1200&q=88'
};

export default function EditorialDesignStyle({ onNavigate }) {
 return <main className="ed4-page">
  <nav className="ed4-nav"><button onClick={() => onNavigate?.('library')}><ArrowLeft size={16}/> DESIGN LIBRARY</button><span className="ed4-logo">RYŪMA <i>リューマ</i></span><span className="ed4-nav-meta">INDEPENDENT DESIGN JOURNAL / 07</span></nav>
  <header className="ed4-cover">
   <div className="ed4-masthead"><span>THE VISUAL REVIEW</span><span>DESIGN · CULTURE · CITIES</span><span>VOL. 07 / 2026</span></div>
   <div className="ed4-cover-main">
    <div className="ed4-cover-title"><div className="ed4-kicker"><span/> THE CITY ISSUE <b>— FEATURE 01</b></div><h1>THE CITY<br/><i>NEVER</i><br/><span>SLEEPS.</span></h1><p className="ed4-deck">A field guide to the visual rhythms, overlooked details and changing light that make a city feel alive.</p><div className="ed4-byline"><span>WORDS & ART DIRECTION</span><b>THE RYŪMA EDITORIAL DESK</b></div></div>
    <figure className="ed4-cover-image"><img src={photos.night} alt="A city street illuminated at night"/><figcaption><span>FIG. 01 / CITY IN TRANSITION</span><span>08:12 — 23:48</span></figcaption></figure>
    <div className="ed4-cover-index"><b>07</b><span>THE<br/>CITY<br/>ISSUE</span><i>↘</i></div>
   </div>
   <div className="ed4-cover-foot"><span>ARCHITECTURE <b>✳</b> PEOPLE <b>✳</b> LIGHT <b>✳</b> EVERYDAY LIFE</span><span>SCROLL TO READ ↓</span></div>
  </header>

  <section className="ed4-editor-note">
   <div className="ed4-label"><span>THE EDITOR'S NOTE</span><span>01 / 05</span></div>
   <div className="ed4-note-grid"><h2>Look closer.<br/><em>See differently.</em></h2><div><p className="ed4-drop">A city is not one picture. It is a collection of moments that compete for attention: a window catching the sun, a street filling with people, a familiar building changed by the hour.</p><p>This issue looks at how we organise those moments into a story. The same principles shape a strong editorial page: a clear entry point, a deliberate sequence, and enough contrast to make every element count.</p><span className="ed4-sign">A NOTE FROM THE EDITOR <i>↗</i></span></div></div>
  </section>

  <article className="ed4-feature">
   <div className="ed4-section-bar"><b>01</b><span>THE FEATURE</span><span>URBAN CULTURE / 4 MIN READ</span></div>
   <div className="ed4-feature-head"><span className="ed4-kicker">OBSERVATION / COMPOSITION</span><h2>A city is a<br/><em>moving composition.</em></h2><p>Every street has a visual rhythm. The trick is learning what to notice — and what to leave out.</p></div>
   <figure className="ed4-feature-photo"><img src={photos.street} alt="A busy city street framed by tall buildings"/><figcaption><span>FIG. 02 — THE STREET AS A LIVING GRID</span><span>OBSERVED / 17:26</span></figcaption></figure>
   <div className="ed4-story-grid"><aside className="ed4-margin"><span>IN THE FRAME</span><b>01—03</b><i>↘</i></aside><div className="ed4-story-copy"><p className="ed4-lead">At street level, the city refuses to stay still. People interrupt the geometry. Reflections double a façade. A passing bus briefly turns a familiar corner into a block of colour.</p><p>Look at the scene as an editor would. The buildings establish structure; movement creates a second layer; light decides what becomes visible first. None of these elements tells the story alone.</p><p>Good editorial design works through the same kind of selection. It gives the eye an entrance, creates a path through the material and leaves enough room for the reader to make connections.</p></div><aside className="ed4-pullquote"><span>FIELD NOTE / 01</span><blockquote>A page is not filled.<br/><i>It is composed.</i></blockquote><span>— THE EDITOR</span></aside></div>
  </article>

  <section className="ed4-photoessay">
   <div className="ed4-section-bar"><b>02</b><span>THE PHOTO ESSAY</span><span>THREE MOMENTS / ONE CITY</span></div>
   <div className="ed4-essay-head"><span className="ed4-kicker">LIGHT / TIME / PLACE</span><h2>Three ways<br/>to <em>see the city.</em></h2><p>One location changes character as the day moves through it. The sequence is the story.</p></div>
   <div className="ed4-essay-grid">
    <figure className="ed4-essay-main"><img src={photos.architecture} alt="Geometric contemporary architecture"/><figcaption><b>01 / STRUCTURE</b><span>Buildings draw the first grid.</span></figcaption></figure>
    <div className="ed4-essay-side"><div className="ed4-time-card"><span>08:12</span><b>MORNING / THE FRAME</b><p>Hard edges, long shadows and open space make the structure legible.</p><i>↗</i></div><figure><img src={photos.street} alt="Traffic and people moving through an urban street"/><figcaption><b>02 / MOVEMENT</b><span>People break the pattern.</span></figcaption></figure></div>
    <figure className="ed4-essay-wide"><img src={photos.night} alt="The city after dark, lit by signs and street lamps"/><figcaption><b>03 / ATMOSPHERE</b><span>Light rewrites the scene.</span><span>23:48 / AFTER HOURS</span></figcaption></figure>
   </div>
  </section>

  <section className="ed4-layout-study">
   <div className="ed4-section-bar"><b>03</b><span>INSIDE THE LAYOUT</span><span>ANATOMY OF AN EDITORIAL</span></div>
   <div className="ed4-study-head"><h2>One story.<br/><em>Different scales.</em></h2><p>Editorial design is not a poster repeated down the page. It is a sequence of distinct compositions — each one built for the content it carries.</p></div>
   <div className="ed4-spread">
    <div className="ed4-spread-top"><span>THE VISUAL REVIEW</span><b>FIELD STUDY / 07</b><span>FIG. 04</span></div>
    <div className="ed4-spread-body"><div className="ed4-spread-title"><span>STORY / 01</span><h3>THE CITY<br/><em>NEVER SLEEPS.</em></h3><p>Use the image as evidence, not wallpaper. Let the typography lead, then let the photograph answer it.</p></div><figure><img src={photos.night} alt="Full view of the city at night"/><figcaption>FIG. A / THE SOURCE IMAGE</figcaption></figure><div className="ed4-spread-aside"><b>THE EDITORIAL MOVE</b><p>Image, headline and caption have different jobs. The image establishes atmosphere; the headline creates an argument; the caption gives the reader context.</p><span>IMAGE / TYPE / CONTEXT</span></div></div>
   </div>
   <div className="ed4-study-foot"><span>DESIGN PRINCIPLE / 03</span><p>Let every spread change its rhythm. A full-width image can be followed by a narrow text column; a quiet note can precede a dense photo essay. Consistency comes from the grid, not identical layouts.</p></div>
  </section>

  <section className="ed4-principles">
   <div className="ed4-principles-head"><span className="ed4-kicker">04 / DESIGN ANATOMY</span><h2>Five decisions.<br/><em>One reading experience.</em></h2><p>Editorial design is the deliberate organisation of words, images and information into a readable story. It is used in magazines, newspapers, books and digital features. The goal is not decoration: it is to guide attention, build meaning and make complex content easy to follow.</p></div>
   <div className="ed4-principle-list">
    <article><span>01</span><b>▦</b><div><h3>Grid</h3><p>A grid is the invisible framework behind the page. It aligns headlines, images, captions and columns so the layout feels intentional, even when the composition changes.</p></div><i>↗</i></article>
    <article><span>02</span><b>↗</b><div><h3>Hierarchy</h3><p>Hierarchy creates a clear order of importance. The headline attracts attention, the deck explains the promise, body copy develops the story, and captions add context.</p></div><i>↗</i></article>
    <article><span>03</span><b className="ed4-aa">Aa</b><div><h3>Typography</h3><p>Typography gives each kind of text a distinct role. Display type establishes character; readable body type carries the story; small labels and captions help readers navigate.</p></div><i>↗</i></article>
    <article><span>04</span><b>◩</b><div><h3>Image</h3><p>Images are selected, cropped and sequenced to add evidence, emotion or context. They should contribute to the story rather than simply fill empty space.</p></div><i>↗</i></article>
    <article><span>05</span><b>№</b><div><h3>Navigation</h3><p>Navigation includes section numbers, running labels, captions and page markers. These small signals tell readers where they are and what they are looking at.</p></div><i>↗</i></article>
   </div>
  </section>

  <section className="ed4-ending">
   <figure><img src={photos.detail} alt="Architectural detail framed by light and shadow"/><figcaption>FIG. 05 / THE LAST LOOK</figcaption></figure>
   <div className="ed4-ending-copy"><span className="ed4-kicker">THE EDITOR'S LAST WORD</span><h2>Give the story<br/><em>room to breathe.</em></h2><p>Strong editorial design is an act of judgement. It knows when to make a statement, when to slow down, and when to let the image speak.</p><button onClick={() => onNavigate?.('library')}>BACK TO DESIGN LIBRARY <ArrowRight size={16}/></button></div>
   <footer><span>RYŪMA — DESIGN ANATOMY</span><span>GRID / TYPE / IMAGE / STORY</span><span>END OF ISSUE 07 ↗</span></footer>
  </section>
 </main>;
}
