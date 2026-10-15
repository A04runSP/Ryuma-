import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './editorial-design-style.css';

export default function EditorialDesignStyle({ onNavigate }) {
  return (
    <main className="quiet-editorial">
      <header className="qe-masthead">
        <strong>The Quiet Grid</strong>
        <span>Design notes · Issue 04</span>
      </header>

      <section className="qe-opener">
        <p className="qe-section-label">Design</p>
        <h1>Let the page do the talking</h1>
        <p className="qe-dek">Editorial design is the art of arranging words and pictures so the reader never has to work to follow the story.</p>
        <div className="qe-byline">
          <span>By <b>Arun R.</b></span>
          <span>October 2026</span>
          <span>7 min read</span>
        </div>
      </section>

      <figure className="qe-plate">
        <div className="qe-plate-img" role="img" aria-label="Abstract editorial grid showing the underlying columns of a magazine page" />
        <figcaption>Figure 1. The grid is the quiet structure underneath the page. It aligns content without forcing every section to look the same.</figcaption>
      </figure>

      <div className="qe-story">
        <article className="qe-text">
          <p>Good editorial design starts with a simple promise: the reader should feel guided, not managed. Every decision, from the width of a column to the space above a heading, either helps someone keep reading or quietly pushes them away.</p>

          <p>Start with the grid. Magazine pages are built on invisible columns, and each element aligns to that underlying structure. On this page the text stays within a comfortable reading measure. Long lines tire the reader; very short lines make prose feel choppy.</p>

          <h2>Hierarchy does the heavy lifting</h2>

          <p>A headline should be the loudest thing on the page, the dek should whisper the promise, and the body should be quiet enough to disappear. Size, weight and space do this work. Color is used sparingly here, for the section name, the drop cap and one pull quote, so it keeps its meaning.</p>

          <p>Notice what is missing. There are no badges, colored chips, gradient buttons or decorative icons competing for attention. Editorial pages earn their authority by being plain and confident about it.</p>

          <blockquote className="qe-pull">
            “When the typography is right, the reader forgets the typography exists.”
            <cite>A guiding principle of editorial craft</cite>
          </blockquote>

          <h2>Whitespace is a structural choice</h2>

          <p>Empty space is not leftover room. It separates ideas, sets the pace of reading and tells the eye where a new thought begins. Generous margins above headings do more to signal a new section than a divider line could.</p>

          <p>On a phone, the same rules collapse into one column. Margin notes move below the story, the drop cap stays, and the text measure remains readable. Good editorial design does not disappear on small screens; it simply stacks.</p>

          <h2>What makes this editorial?</h2>

          <p><b>Grid</b> gives the page a consistent structure. <b>Hierarchy</b> tells readers what matters first. <b>Typography</b> gives headlines, body copy and captions distinct roles. <b>Whitespace</b> creates pace. <b>Image selection and captions</b> connect visuals to the story instead of using them as decoration.</p>
        </article>

        <aside className="qe-notes">
          <h3>Key choices on this page</h3>
          <p>One serif family for headings and body keeps the voice consistent. Headings use tight tracking; body text uses open leading.</p>
          <p>The palette is cool paper, blue-black ink and one oxblood accent reserved for emphasis.</p>
          <p>On wide screens, these notes sit beside the story like a print sidebar. On phones, they follow the article.</p>
          <div className="qe-notes-rule" />
          <h3>The editorial test</h3>
          <p>Can a reader tell where to begin, what belongs together and where the story continues? If yes, the layout is doing its job.</p>
        </aside>
      </div>

      <footer className="qe-footer">
        <span>RYŪMA — DESIGN ANATOMY</span>
        <span>GRID / TYPE / SPACE / STORY</span>
        <button onClick={() => onNavigate?.('library')}><ArrowLeft size={14}/> Back to Design Library</button>
      </footer>
    </main>
  );
}
