import React from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import './editorial-design-style.css';

const photos = {
  architecture: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
  glass: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1600&q=85',
  house: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1400&q=85',
  nature: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=85',
  street: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1400&q=85',
};

export default function EditorialDesignStyle({ onNavigate }) {
  return (
    <main className="ed4-page">
      <nav className="ed4-nav" aria-label="Editorial navigation">
        <button onClick={() => onNavigate?.('library')}><ArrowLeft size={15} /> DESIGN LIBRARY</button>
        <strong className="ed4-logo">RYŪMA <i>DESIGN ANATOMY</i></strong>
        <span className="ed4-nav-meta">INDEPENDENT DESIGN JOURNAL / 07</span>
      </nav>

      <section className="ed4-cover">
        <div className="ed4-masthead">
          <span>THE VISUAL REVIEW</span><span>DESIGN · CULTURE · CITIES</span><span>VOL. 07 / 2026</span>
        </div>
        <div className="ed4-cover-main">
          <div className="ed4-cover-title">
            <p className="ed4-kicker">THE CITY ISSUE — FEATURE 01</p>
            <h1>THE CITY<br />NEVER<br /><i>SLEEPS.</i></h1>
            <p className="ed4-deck">A field guide to the visual rhythms, overlooked details and changing light that make a city feel alive.</p>
            <div className="ed4-byline"><span>WORDS & ART DIRECTION</span><b>THE RYŪMA EDITORIAL DESK</b><span>6 MIN READ · PHOTO ESSAY</span></div>
          </div>
          <figure className="ed4-cover-image ed4-image-frame">
            <img src={photos.architecture} alt="Tall modern buildings rising into the city sky" /><div className="ed4-image-copy ed4-cover-overlay"><span>01 / URBAN STUDIES</span><strong>THE SHAPE<br /><i>OF TOMORROW.</i></strong><small>Architecture changes how a city feels, moves and grows.</small></div>
            <figcaption><b>FIG. 01 / THE BUILT ENVIRONMENT</b><span>FORM · SCALE · LIGHT</span></figcaption>
            <div className="ed4-cover-index"><b>07</b><span>THE CITY<br />ISSUE</span></div>
          </figure>
        </div>
        <div className="ed4-cover-foot"><span>AN EDITORIAL DESIGN FIELD GUIDE</span><span>OBSERVE → SELECT → COMPOSE</span><span>RYŪMA / 2026</span></div>
      </section>

      <section className="ed4-editor-note">
        <div className="ed4-note-grid">
          <div>
            <span className="ed4-kicker">A NOTE FROM THE EDITOR ↗</span>
            <h2>A city is a<br /><i>moving composition.</i></h2>
          </div>
          <div>
            <p>Every street offers more detail than a page can hold. Editorial design is the practice of choosing what matters, arranging it into a clear sequence and giving the reader a way through.</p>
            <p>Think of a building photograph: the architecture creates structure, light directs attention, and a person or passing car gives the scene movement. A strong page uses the same relationships.</p>
            <div className="ed4-editor-signoff"><b>THE EDITOR</b><span>LESS DECORATION. MORE INTENTION.</span></div>
          </div>
        </div>
      </section>

      <section className="ed4-feature">
        <div className="ed4-section-bar"><b>01</b><strong>THE GRID</strong><span>STRUCTURE / ALIGNMENT / READING FLOW</span></div>
        <header className="ed4-feature-head">
          <span className="ed4-kicker">LAYOUT ANATOMY</span>
          <h2>Structure<br />makes the<br /><i>story legible.</i></h2>
          <p>A grid is an invisible framework of columns, margins and gutters. It helps headlines, photographs and paragraphs feel connected—even when the composition changes.</p>
        </header>
        <figure className="ed4-feature-photo ed4-image-frame">
          <img src={photos.glass} alt="Angular glass architecture showing repeating structural lines" loading="lazy" /><div className="ed4-image-copy ed4-photo-overlay ed4-grid-overlay"><span>FORM STUDY / 02</span><strong>ORDER IN<br /><i>EVERY LINE.</i></strong><small>REPETITION · ALIGNMENT · RHYTHM</small></div>
          <figcaption><b>FIG. 02 / THE GRID IN ARCHITECTURE</b><span>Repeated lines create order and rhythm.</span></figcaption>
        </figure>
        <div className="ed4-story-grid">
          <aside className="ed4-margin"><b>01</b><span>FIELD NOTE<br />ALIGNMENT</span><i>↗</i></aside>
          <article className="ed4-story-copy">
            <p className="ed4-lead">The grid is not a cage. It is a set of relationships that lets a page feel intentional without making every section identical.</p>
            <p><b>Margins</b> create the page's outer breathing room. <b>Columns</b> organize the content. <b>Gutters</b> separate neighboring elements so they do not compete. When their edges align, the reader senses a structure before consciously noticing it.</p>
            <blockquote className="ed4-pullquote">“A good layout doesn't make every element equal. It makes their relationships clear.”</blockquote>
            <p>On a phone, columns may stack into one reading path. The principle stays the same: keep text comfortable to read, preserve clear edges, and make each image feel connected to the copy beside or beneath it.</p>
          </article>
          <aside className="ed4-feature-note"><span>LOOK CLOSER</span><b>What aligns?</b><p>Follow the image edge, headline edge and body-copy edge. Repeated alignment makes separate elements feel like one system.</p></aside>
        </div>
      </section>

      <section className="ed4-photoessay">
        <div className="ed4-section-bar"><b>02</b><strong>THE PHOTO ESSAY</strong><span>LIGHT / TIME / PLACE</span></div>
        <header className="ed4-essay-head">
          <span className="ed4-kicker">ONE CITY, THREE VISUAL MOMENTS</span>
          <h2>Let the image<br />do <i>real work.</i></h2>
          <p>Photography should add evidence, atmosphere or meaning—not merely fill an empty rectangle. These examples show how different images can carry different parts of a story.</p>
        </header>
        <div className="ed4-essay-grid">
          <figure className="ed4-essay-main ed4-image-frame">
            <img src={photos.house} alt="A thoughtfully composed house surrounded by greenery" loading="lazy" /><div className="ed4-image-copy ed4-photo-overlay ed4-house-overlay"><span>FIELD NOTE / 03</span><strong>A PLACE<br /><i>TO BELONG.</i></strong><small>HOME · MEMORY · HUMAN SCALE</small></div>
            <figcaption><b>FIG. 03 / PLACE</b><span>A house gives the story a human scale.</span></figcaption>
          </figure>
          <div className="ed4-essay-side">
            <div className="ed4-time-card"><span>01</span><b>CONTEXT BEFORE DECORATION</b><p>Choose a photograph that tells the reader something the words alone cannot.</p></div>
            <figure className="ed4-image-frame ed4-nature-frame"><img src={photos.nature} alt="Mountain landscape and open sky at changing light" loading="lazy" /><div className="ed4-image-copy ed4-photo-overlay ed4-nature-overlay"><span>LIGHT STUDY / 04</span><strong>THE ART<br />OF <i>STILLNESS.</i></strong><small>ATMOSPHERE IS ALSO INFORMATION.</small></div><div className="ed4-image-copy ed4-photo-overlay ed4-nature-overlay"><span>LIGHT STUDY / 04</span><strong>THE ART<br />OF <i>STILLNESS.</i></strong><small>ATMOSPHERE IS ALSO INFORMATION.</small></div>
              <figcaption><b>FIG. 04 / ATMOSPHERE</b><span>Light sets the emotional tone.</span></figcaption>
            </figure>
          </div>
          <figure className="ed4-essay-wide ed4-image-frame">
            <img src={photos.street} alt="A city street at dusk with deep blue evening light" loading="lazy" /><div className="ed4-image-copy ed4-photo-overlay ed4-street-overlay"><span>AFTER DARK / 05</span><strong>THE CITY<br /><i>IN MOTION.</i></strong><small>LIGHT TRAILS · ENERGY · PLACE</small></div>
            <figcaption><b>FIG. 05 / MOVEMENT</b><span>A wider scene can establish time, energy and a sense of place.</span></figcaption>
          </figure>
        </div>
      </section>

      <section className="ed4-layout-study">
        <div className="ed4-section-bar"><b>03</b><strong>INSIDE THE SPREAD</strong><span>HEADLINE / BODY / CAPTION / SIDEBAR</span></div>
        <header className="ed4-study-head">
          <span className="ed4-kicker">AN EDITORIAL PAGE, ANNOTATED</span>
          <h2>Every element<br />has a <i>purpose.</i></h2>
          <p>Look at the sample spread below. The labels explain what each part contributes, so you can connect the visual arrangement to the design principle.</p>
        </header>
        <div className="ed4-spread">
          <div className="ed4-spread-top"><b>THE QUIET GRID</b><span>FIELD NOTES / 01</span><span>EDITORIAL DESIGN</span></div>
          <div className="ed4-spread-body">
            <div className="ed4-spread-title">
              <span className="ed4-kicker">FORM & FUNCTION</span>
              <h3>Let the page<br /><i>do the talking.</i></h3>
              <p>Good editorial design makes complex information feel clear, coherent and worth exploring.</p>
              <div className="ed4-label"><b>A / HEADLINE</b><span>The largest type establishes the entry point and sets the voice.</span></div>
              <div className="ed4-label"><b>B / BODY COPY</b><span>Comfortable line length and spacing support sustained reading.</span></div>
            </div>
            <figure>
              <img src={photos.architecture} alt="Architectural photograph used as the main visual in a sample editorial spread" loading="lazy" /><div className="ed4-image-copy ed4-photo-overlay ed4-spread-overlay"><span>IMAGE / EVIDENCE</span><strong>LOOK<br /><i>UP.</i></strong><small>Scale gives the story its impact.</small></div><div className="ed4-image-copy ed4-photo-overlay ed4-spread-overlay"><span>IMAGE / EVIDENCE</span><strong>LOOK<br /><i>UP.</i></strong><small>Scale gives the story its impact.</small></div>
              <figcaption><b>C / PHOTOGRAPH</b><span>The image adds context and gives the eye a visual pause.</span></figcaption>
            </figure>
            <div className="ed4-spread-aside">
              <div><b>D / CAPTION</b><p>Identifies the image and explains why it matters.</p></div>
              <div><b>E / WHITESPACE</b><p>Separates ideas and creates a deliberate reading pace.</p></div>
              <div><b>F / FOLIO</b><p>Issue details and page markers help readers navigate a publication.</p></div>
            </div>
          </div>
          <div className="ed4-study-foot"><span>THE GRID ORGANIZES.</span><span>HIERARCHY PRIORITIZES.</span><span>PHOTOGRAPHY ADDS EVIDENCE.</span></div>
        </div>
      </section>

      <section className="ed4-principles">
        <div className="ed4-principles-head">
          <div><span className="ed4-kicker">04 / THE DESIGN SYSTEM</span><h2>Five rules<br />to <i>remember.</i></h2></div>
          <p>Editorial design works when the reader can tell where to begin, what belongs together and how the story continues. Use these five checks when reviewing a page.</p>
        </div>
        <div className="ed4-principle-list">
          <article><span>01</span><b>G</b><div><h3>Grid</h3><p>Align the edges. Use columns and consistent margins to connect the page's parts.</p></div><i>↗</i></article>
          <article><span>02</span><b>H</b><div><h3>Hierarchy</h3><p>Make the most important information easiest to notice through scale, weight and position.</p></div><i>↗</i></article>
          <article><span>03</span><b>T</b><div><h3>Typography</h3><p>Give headlines, body copy, labels and captions distinct roles and readable sizes.</p></div><i>↗</i></article>
          <article><span>04</span><b>I</b><div><h3>Imagery</h3><p>Choose photographs that explain, document or deepen the story instead of acting as wallpaper.</p></div><i>↗</i></article>
          <article><span>05</span><b>S</b><div><h3>Space</h3><p>Let the page breathe. Whitespace separates ideas and helps the reader keep their place.</p></div><i>↗</i></article>
        </div>
      </section>

      <section className="ed4-ending">
        <figure className="ed4-image-frame ed4-ending-image"><img src={photos.glass} alt="A final architectural study of geometry and light" loading="lazy" /><div className="ed4-image-copy ed4-photo-overlay ed4-ending-overlay"><span>FINAL OBSERVATION / 06</span><strong>SEE THE<br /><i>STRUCTURE.</i></strong><small>Then decide what the reader should notice first.</small></div><figcaption>FIG. 06 / THE LAST LOOK</figcaption></figure>
        <div className="ed4-ending-copy">
          <span className="ed4-kicker">THE EDITOR'S LAST WORD</span>
          <h2>Give the story<br /><i>room to breathe.</i></h2>
          <p>Strong editorial design is an act of judgement. It knows when to make a statement, when to slow down, and when to let the image speak.</p>
          <p>Start with the story. Choose the evidence. Build a hierarchy. Then remove anything that distracts from the reader's journey.</p>
          <button onClick={() => onNavigate?.('library')}><ArrowLeft size={15} /> BACK TO DESIGN LIBRARY</button>
        </div>
        <footer><span>RYŪMA — DESIGN ANATOMY</span><span>GRID / TYPE / IMAGE / SPACE</span><span>END OF FEATURE 01 <ArrowUpRight size={12} /></span></footer>
      </section>
    </main>
  );
}
