import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Plus, Minus, ArrowUpRight } from 'lucide-react';
import './brutalism-style.css';

const parts = [
  { n: '01', mark: '□', t: 'Colour', d: 'High contrast, intentional and expressive.' },
  { n: '02', mark: 'T', t: 'Type', d: 'Large, bold and unapologetic typography.' },
  { n: '03', mark: '▣', t: 'Form', d: 'Simple, blocky and structural shapes.' },
  { n: '04', mark: '▰', t: 'Space', d: 'Generous, deliberate and sometimes unbalanced.' },
  { n: '05', mark: '↗', t: 'Asymmetry', d: 'Layouts that break conventional balance.' },
  { n: '06', mark: '▦', t: 'Visible Structure', d: 'Show the grid, borders and system clearly.' }
];

export default function BrutalismStyle({ onNavigate }) {
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(12);
  const [guestName, setGuestName] = useState('');
  const [guestMessage, setGuestMessage] = useState('');
  const [guestNotes, setGuestNotes] = useState([
    { name: 'ARD', message: 'Great style!', date: '11 Nov' },
    { name: 'Krios', message: 'Bold & clean.', date: '10 Nov' },
    { name: 'Athena', message: 'Love the grid.', date: '09 Nov' }
  ]);
  const [guestFeedback, setGuestFeedback] = useState('');

  function addGuestNote(event) {
    event.preventDefault();
    if (!guestName.trim() || !guestMessage.trim()) {
      setGuestFeedback('Add your name and a message first.');
      return;
    }
    setGuestNotes(notes => [{ name: guestName.trim(), message: guestMessage.trim(), date: 'Today' }, ...notes]);
    setGuestName('');
    setGuestMessage('');
    setGuestFeedback('Note added locally to this demo.');
  }

  return (
    <main className="brutal-page">
      <header className="brutal-nav">
        <button onClick={() => onNavigate?.('library')}><ArrowLeft size={16}/> DESIGN LIBRARY</button>
        <div className="brutal-brand"><b>▲ RYŪMA</b><span>— Design Library</span></div>
        <nav aria-label="Design library navigation">
          <button onClick={() => onNavigate?.('library')}>Design Library</button>
          <a href="#brutal-anatomy">Styles</a>
          <a href="#brutal-specimen">Components</a>
        </nav>
        <strong>BRUTALISM　///</strong>
      </header>

      <div className="brutal-board">
        <section className="brutal-hero">
          <div className="brutal-hero-copy">
            <span className="brutal-kicker">04 / BRUTALISM</span>
            <h1>MAKE IT<br/><i>LOUD.</i></h1>
            <p className="brutal-tagline">A design language that refuses to be subtle.</p>
            <p className="brutal-hero-note">RAW<br/>BOLD<br/>FUNCTIONAL<br/>UNPOLISHED <ArrowUpRight size={25}/></p>
          </div>
          <div className="brutal-architecture" aria-label="Abstract architectural brutalist poster artwork">
            <div className="architecture-sun"/>
            <div className="architecture-block block-one"/>
            <div className="architecture-block block-two"/>
            <div className="architecture-block block-three"/>
            <span>FIELD STUDY / 04</span>
          </div>
        </section>

        <aside className="brutal-side">
          <section className="brutal-idea brutal-panel">
            <h2 className="brutal-tab">THE IDEA</h2>
            <p>Brutalism in digital design is bold, structural and unapologetic. It prioritises clarity, contrast and function over decoration.</p>
            <span className="brutal-plus">＋</span>
          </section>
          <section className="brutal-rules-panel brutal-panel">
            <h2 className="brutal-tab">CORE RULES</h2>
            <ol>
              <li><b>01</b><span>Use bold, high-contrast typography.</span></li>
              <li><b>02</b><span>Embrace raw, structural layouts.</span></li>
              <li><b>03</b><span>Keep elements functional and direct.</span></li>
              <li><b>04</b><span>Avoid unnecessary decoration.</span></li>
            </ol>
          </section>
        </aside>

        <section className="brutal-specimen" id="brutal-specimen">
          <div className="brutal-section-heading"><h2>LIVE SPECIMEN</h2><span>////</span></div>
          <div className="brutal-console">
            <div className="brutal-counter">
              <small>COUNTER</small>
              <strong>{String(count).padStart(3, '0')}</strong>
            </div>
            <div className="brutal-counter-actions">
              <button onClick={() => setCount(value => value + 1)} disabled={!active} aria-label="Increase counter"><Plus/></button>
              <button onClick={() => setCount(value => Math.max(0, value - 1))} disabled={!active} aria-label="Decrease counter"><Minus/></button>
            </div>
            <div className="brutal-toggle-area">
              <small>INTERACTION</small>
              <button className={active ? 'brutal-toggle is-active' : 'brutal-toggle'} onClick={() => setActive(value => !value)} aria-pressed={active}>
                <span>{active ? 'ON' : 'OFF'}</span><i/>
              </button>
              <p>{active ? 'Controls active. Use + and −.' : 'Activate to enable controls.'}</p>
            </div>
          </div>
        </section>

        <section className="brutal-anatomy" id="brutal-anatomy">
          <div className="brutal-section-heading"><h2>DESIGN ANATOMY</h2><span>////</span></div>
          <div className="brutal-parts">
            {parts.map(part => <article key={part.n}>
              <b className="brutal-part-mark">{part.mark}</b>
              <div><h3>{part.t}</h3><p>{part.d}</p></div>
            </article>)}
          </div>
        </section>

        <section className="brutal-composition">
          <div className="brutal-section-heading composition-heading"><h2>COMPOSITION</h2><p>A practical example — a personal homepage in a brutalist style.</p><span>− □ ×</span></div>
          <div className="brutal-homepage">
            <div className="brutal-home-top"><b>A.R.D</b><nav><a href="#home-work">HOME</a><a href="#home-work">WORK</a><a href="#home-work">NOTES</a><a href="#guestbook">GUESTBOOK</a></nav></div>
            <div className="brutal-home-grid">
              <div className="brutal-home-intro">
                <h3>ARUN<br/>S.P.</h3>
                <span className="brutal-home-sticker">PERSONAL<br/>HOMEPAGE</span>
                <p>Engineer / Creator / Designer <ArrowRight size={16}/></p>
              </div>
              <div className="brutal-home-art" id="home-work"><span>BUILD / BREAK / REPEAT</span><div/></div>
              <div className="brutal-guestbook" id="guestbook">
                <h3>GUESTBOOK</h3>
                <form onSubmit={addGuestNote}>
                  <label className="brutal-sr-only" htmlFor="brutal-guest-name">Your name</label>
                  <input id="brutal-guest-name" value={guestName} onChange={event => setGuestName(event.target.value)} placeholder="Your name" maxLength={30}/>
                  <label className="brutal-sr-only" htmlFor="brutal-guest-message">Leave a message</label>
                  <textarea id="brutal-guest-message" value={guestMessage} onChange={event => setGuestMessage(event.target.value)} placeholder="Leave a message..." rows="2" maxLength={120}/>
                  <button type="submit">ADD NOTE</button>
                  <p className="brutal-guest-feedback" aria-live="polite">{guestFeedback || 'Demo only — notes stay on this page.'}</p>
                </form>
                <ul>{guestNotes.slice(0, 3).map((note, index) => <li key={note.name + note.date + index}><b>{note.name}</b><span>— {note.message}</span><time>{note.date}</time></li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <footer className="brutal-footer">
          <h2>RAW. DIRECT. ALIVE.</h2><span>///</span>
        </footer>
      </div>
    </main>
  );
}
