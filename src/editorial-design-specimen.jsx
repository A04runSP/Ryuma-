import React, { useState } from 'react';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import './editorial-design-specimen.css';

const gridOptions = [12, 6, 4];

const principles = [
  { number: '01', title: 'Hierarchy', text: 'Give the reader a clear entry point. Scale, weight and position should explain what matters first.' },
  { number: '02', title: 'Grid', text: 'Use margins, columns and gutters to create relationships between otherwise separate elements.' },
  { number: '03', title: 'Typography', text: 'Assign every type style a role: display, heading, body, caption or navigation.' },
  { number: '04', title: 'Whitespace', text: 'Treat empty space as an active part of the composition. It separates, groups and sets pace.' },
  { number: '05', title: 'Sequence', text: 'Arrange information so each section prepares the reader for the next.' },
];

function SectionLabel({ number, children }) {
  return (
    <div className="eds-section-label">
      <span>{number}</span>
      <b>{children}</b>
      <i />
    </div>
  );
}

function GridDiagram({ columns }) {
  return (
    <div className="eds-grid-diagram" style={{ '--eds-columns': columns }} aria-label={`${columns}-column editorial grid demonstration`}>
      {Array.from({ length: columns }, (_, index) => (
        <span className="eds-grid-column" key={index}>
          <i>{String(index + 1).padStart(2, '0')}</i>
        </span>
      ))}
      <div className="eds-grid-content eds-grid-content-a">HEADLINE</div>
      <div className="eds-grid-content eds-grid-content-b">BODY COPY</div>
      <div className="eds-grid-content eds-grid-content-c">IMAGE / FIGURE</div>
      <div className="eds-grid-content eds-grid-content-d">CAPTION</div>
    </div>
  );
}

function TypeSpecimen() {
  return (
    <div className="eds-type-specimen">
      <div className="eds-type-display">
        <span className="eds-micro">DISPLAY / SERIF / 72–112</span>
        <div className="eds-type-big">Aa<span>.</span></div>
        <p>Expressive. Distinctive. Reserved for the moments that need a voice.</p>
      </div>
      <div className="eds-type-stack">
        <div className="eds-type-row eds-type-heading">
          <span>HEADING / SANS / 32–48</span>
          <strong>Make the first read count.</strong>
        </div>
        <div className="eds-type-row eds-type-body">
          <span>BODY / SERIF OR SANS / 16–19</span>
          <p>Body copy carries the argument. Keep the measure comfortable, the leading generous and the contrast strong enough for long-form reading.</p>
        </div>
        <div className="eds-type-row eds-type-caption">
          <span>CAPTION / 11–13</span>
          <p>FIG. 01 — A caption identifies, contextualizes and credits a visual element.</p>
        </div>
        <div className="eds-type-row eds-type-meta">
          <span>RUNNING HEAD / MONO / 10–12</span>
          <p>ISSUE 07&nbsp;&nbsp; / &nbsp;&nbsp;DESIGN ANATOMY&nbsp;&nbsp; / &nbsp;&nbsp;2026</p>
        </div>
      </div>
    </div>
  );
}

function SpreadSpecimen() {
  return (
    <div className="eds-spread" aria-label="CSS-rendered two-page editorial spread">
      <article className="eds-spread-page eds-spread-left">
        <div className="eds-spread-running"><span>THE FORM OF INFORMATION</span><span>01 — 02</span></div>
        <div className="eds-spread-left-content">
          <span className="eds-micro">A STUDY IN COMPOSITION / FEATURE 01</span>
          <h3>Ideas need<br /><em>room.</em></h3>
          <p className="eds-spread-deck">The page is not a container. It is an arrangement of decisions that guides attention.</p>
          <div className="eds-spread-rule" />
          <div className="eds-spread-columns">
            <p>Editorial design gives information a visible order. The headline opens the story, the body builds its argument, and supporting details help the reader navigate.</p>
            <p>Margins create a boundary. Columns establish rhythm. Whitespace creates pauses. Each part contributes to a reading experience that feels deliberate.</p>
          </div>
          <blockquote>“Clarity is not the absence of complexity. It is the presence of structure.”</blockquote>
          <div className="eds-spread-byline"><b>THE RYŪMA EDITORIAL DESK</b><span>6 MIN READ</span></div>
        </div>
        <div className="eds-spread-folio"><span>EDITORIAL DESIGN / SPECIMEN</span><b>014</b></div>
      </article>
      <article className="eds-spread-page eds-spread-right">
        <div className="eds-spread-running"><span>LAYOUT ANATOMY</span><span>FIG. 02</span></div>
        <div className="eds-spread-art">
          <div className="eds-art-index">A—01</div>
          <div className="eds-art-circle" />
          <div className="eds-art-square" />
          <div className="eds-art-line eds-art-line-one" />
          <div className="eds-art-line eds-art-line-two" />
          <div className="eds-art-vertical">FORM / SPACE / RHYTHM</div>
          <div className="eds-art-caption">A COMPOSITION BUILT FROM TYPE, SHAPE AND SPACE.</div>
        </div>
        <div className="eds-spread-annotation">
          <div><b>A / VISUAL ANCHOR</b><p>A strong shape creates a focal point without relying on photography.</p></div>
          <div><b>B / NEGATIVE SPACE</b><p>Open areas give the composition room and keep the elements distinct.</p></div>
        </div>
        <div className="eds-spread-folio"><span>THE VISUAL REVIEW / VOL. 07</span><b>015</b></div>
      </article>
    </div>
  );
}

function LayoutStudies() {
  return (
    <div className="eds-layout-studies">
      <article className="eds-layout-card eds-layout-cover">
        <div className="eds-layout-top"><b>MONOGRAPH</b><span>VOL. 01 / 2026</span></div>
        <div className="eds-layout-cover-title"><span>AN ATLAS OF</span><strong>FORM<span>.</span></strong><i>Notes on visual structure</i></div>
        <div className="eds-layout-cover-bottom"><span>DESIGN / CULTURE / SYSTEMS</span><b>01</b></div>
      </article>
      <article className="eds-layout-card eds-layout-index">
        <div className="eds-layout-top"><b>CONTENTS</b><span>INDEX / 01—05</span></div>
        <h3>Inside<br />this issue.</h3>
        {['The grid', 'Type in context', 'A study of space', 'Reading sequence'].map((item, index) => (
          <div className="eds-index-row" key={item}><span>0{index + 1}</span><b>{item}</b><i>→</i></div>
        ))}
        <div className="eds-layout-cover-bottom"><span>THE EDITORIAL SYSTEM</span><b>02</b></div>
      </article>
      <article className="eds-layout-card eds-layout-essay">
        <div className="eds-layout-top"><b>FIELD NOTES</b><span>ESSAY / 03</span></div>
        <span className="eds-essay-number">03</span>
        <h3>One thought.<br /><em>Three voices.</em></h3>
        <div className="eds-essay-columns"><p>Long-form editorial pages use column structure to make dense information easier to scan and read.</p><p>A narrow side note can add context without interrupting the main narrative.</p></div>
        <div className="eds-essay-side-note">SIDE NOTE / A small secondary voice supports the main text.</div>
        <div className="eds-layout-cover-bottom"><span>TEXT / HIERARCHY / RHYTHM</span><b>03</b></div>
      </article>
    </div>
  );
}

export default function EditorialDesignSpecimen({ onNavigate }) {
  const [columns, setColumns] = useState(12);

  return (
    <main className="eds-page">
      <nav className="eds-nav" aria-label="Editorial specimen navigation">
        <button className="eds-back" onClick={() => onNavigate?.('library')}><ArrowLeft size={15} /> <span>DESIGN LIBRARY</span></button>
        <a className="eds-brand" href="#eds-top" aria-label="Ryūma Editorial Design home"><b>R.</b><span>RYŪMA <i>DESIGN ANATOMY</i></span></a>
        <div className="eds-nav-links">
          <a href="#eds-grid">GRID</a>
          <a href="#eds-type">TYPE</a>
          <a href="#eds-spread">SPREAD</a>
        </div>
      </nav>

      <section className="eds-hero" id="eds-top">
        <div className="eds-hero-meta"><span>DESIGN LANGUAGE / 07</span><span>EDITORIAL DESIGN</span><span>EST. 2026</span></div>
        <div className="eds-hero-main">
          <div className="eds-hero-copy">
            <span className="eds-kicker">THE ANATOMY OF A PAGE</span>
            <h1>A page is<br />a <em>system.</em></h1>
            <p>Editorial design turns information into a reading experience through hierarchy, typography, grids and deliberate space.</p>
            <a className="eds-text-link" href="#eds-anatomy">EXPLORE THE ANATOMY <ArrowUpRight size={15} /></a>
          </div>
          <div className="eds-hero-specimen" aria-label="CSS-rendered abstract editorial page specimen">
            <div className="eds-specimen-top"><span>THE VISUAL REVIEW</span><span>NO. 07</span></div>
            <div className="eds-specimen-mark">ED.</div>
            <div className="eds-specimen-headline">THE<br /><i>ORDER</i><br />OF IDEAS<span>.</span></div>
            <div className="eds-specimen-sub">A FIELD GUIDE TO VISUAL STRUCTURE</div>
            <div className="eds-specimen-lines"><i /><i /><i /><i /><i /></div>
            <div className="eds-specimen-stamp">FORM<br />FOLLOWS<br />MEANING</div>
            <div className="eds-specimen-bottom"><span>GRID / TYPE / SPACE</span><b>001</b></div>
          </div>
        </div>
        <div className="eds-hero-footer"><span>CLARITY BEFORE DECORATION</span><span>01 — 05 / A VISUAL STUDY</span><span>SCROLL TO READ ↓</span></div>
      </section>

      <section className="eds-intro" id="eds-anatomy">
        <div className="eds-intro-number">01<span>/</span></div>
        <div className="eds-intro-heading"><span className="eds-kicker">WHAT IS EDITORIAL DESIGN?</span><h2>Not decoration.<br /><em>Direction.</em></h2></div>
        <div className="eds-intro-copy"><p>Editorial design is the arrangement of text and visual information across publications: magazines, newspapers, journals, books and digital reading experiences.</p><p>Its job is to make content understandable, engaging and navigable. The layout should express the character of the story while helping the reader move through it.</p><span>THE PAGE IS A SEQUENCE, NOT A POSTER.</span></div>
      </section>

      <section className="eds-grid-section" id="eds-grid">
        <SectionLabel number="02">GRID / THE INVISIBLE FRAMEWORK</SectionLabel>
        <div className="eds-section-heading">
          <h2>Structure gives<br /><em>freedom.</em></h2>
          <p>A grid organizes the page into repeatable relationships. Change the column count below to see how the same page framework can support different compositions.</p>
        </div>
        <div className="eds-grid-controls" role="group" aria-label="Choose grid column count">
          <span>GRID COLUMNS</span>
          {gridOptions.map((option) => (
            <button key={option} className={columns === option ? 'is-active' : ''} onClick={() => setColumns(option)} aria-pressed={columns === option}>{option}</button>
          ))}
        </div>
        <GridDiagram columns={columns} />
        <div className="eds-grid-legend">
          <div><b>01 / MARGINS</b><p>The outer boundary protects the content and gives the page a consistent edge.</p></div>
          <div><b>02 / COLUMNS</b><p>Vertical divisions create a flexible structure for text and visual elements.</p></div>
          <div><b>03 / GUTTERS</b><p>The space between columns keeps adjacent content from competing.</p></div>
          <div><b>04 / BASELINE</b><p>Shared horizontal rhythm helps text and components align across the page.</p></div>
        </div>
      </section>

      <section className="eds-type-section" id="eds-type">
        <SectionLabel number="03">TYPE / THE VOICE OF THE PAGE</SectionLabel>
        <div className="eds-section-heading">
          <h2>Type sets<br /><em>the tempo.</em></h2>
          <p>Editorial typography uses contrast with purpose. A display face attracts attention; body text sustains reading; captions and metadata support navigation.</p>
        </div>
        <TypeSpecimen />
      </section>

      <section className="eds-color-section">
        <SectionLabel number="04">COLOUR / INK, PAPER, SIGNAL</SectionLabel>
        <div className="eds-section-heading">
          <h2>Colour gives<br /><em>the page a voice.</em></h2>
          <p>Editorial palettes often begin with a quiet base, strong text contrast and one deliberate signal colour. The palette should support the story—not compete with it.</p>
        </div>
        <div className="eds-color-study">
          <div className="eds-color-swatch eds-swatch-paper"><span>01 / PAPER</span><b>#F1EEE7</b><i>Canvas</i></div>
          <div className="eds-color-swatch eds-swatch-ink"><span>02 / INK</span><b>#1D1C19</b><i>Primary text</i></div>
          <div className="eds-color-swatch eds-swatch-accent"><span>03 / SIGNAL</span><b>#D84A32</b><i>Emphasis</i></div>
          <div className="eds-color-swatch eds-swatch-muted"><span>04 / RULE</span><b>#C9C3B8</b><i>Structure</i></div>
        </div>
      </section>

      <section className="eds-spread-section" id="eds-spread">
        <SectionLabel number="05">COMPOSITION / A TWO-PAGE STUDY</SectionLabel>
        <div className="eds-section-heading">
          <h2>One story.<br /><em>Many roles.</em></h2>
          <p>This spread is built entirely from HTML and CSS. No photography or decorative image files: the hierarchy, geometry, captions and folios are the specimen.</p>
        </div>
        <SpreadSpecimen />
        <div className="eds-spread-key">
          <span><b>A</b> DISPLAY HIERARCHY</span>
          <span><b>B</b> BODY MEASURE</span>
          <span><b>C</b> VISUAL ANCHOR</span>
          <span><b>D</b> CAPTION & FOLIO</span>
        </div>
      </section>

      <section className="eds-layout-section">
        <SectionLabel number="06">LAYOUT / THREE EDITORIAL FORMATS</SectionLabel>
        <div className="eds-section-heading">
          <h2>Different formats.<br /><em>Same discipline.</em></h2>
          <p>A cover, contents page and feature essay solve different reading problems. Each uses hierarchy and alignment, but changes the composition to fit its purpose.</p>
        </div>
        <LayoutStudies />
      </section>

      <section className="eds-principles-section">
        <div className="eds-principles-intro"><span className="eds-kicker">A QUICK REVIEW CHECKLIST</span><h2>Five decisions<br />behind <em>every page.</em></h2><p>When reviewing an editorial layout, ask these questions before adding another element.</p></div>
        <div className="eds-principles-list">
          {principles.map((principle) => (
            <article key={principle.number}><span>{principle.number}</span><div><h3>{principle.title}</h3><p>{principle.text}</p></div><i>↗</i></article>
          ))}
        </div>
      </section>

      <footer className="eds-footer">
        <div className="eds-footer-mark">R.</div>
        <div><span>RYŪMA / DESIGN ANATOMY</span><p>Read the structure. Understand the language.</p></div>
        <button onClick={() => onNavigate?.('library')}><ArrowLeft size={15} /> BACK TO DESIGN LIBRARY</button>
        <div className="eds-footer-bottom"><span>EDITORIAL DESIGN / CSS SPECIMEN</span><span>END OF STUDY — 2026</span></div>
      </footer>
    </main>
  );
}
