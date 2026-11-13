import React from 'react';
import { ArrowLeft } from 'lucide-react';
import './retro-vintage-style.css';

const anatomy = [
  { no: '01', title: 'Palette', copy: 'Warm cream, faded teal, mustard, brick and burnt orange create the familiar warmth of printed ephemera.' },
  { no: '02', title: 'Typography', copy: 'Expressive serifs and condensed sans lettering give the work a period voice without sacrificing hierarchy.' },
  { no: '03', title: 'Texture', copy: 'Grain, halftone, ink variation and paper-like surfaces make the digital canvas feel physically printed.' },
  { no: '04', title: 'Shape', copy: 'Badges, arches, ribbons, circles and imperfect geometry become recognizable visual motifs.' },
  { no: '05', title: 'Composition', copy: 'Poster-like framing, borders and deliberate asymmetry create a sense of collected history.' }
];

export default function RetroVintageStyle({ onNavigate }) {
  return <main className="retro-page">
    <header className="retro-nav">
      <button onClick={() => onNavigate?.('library')}><ArrowLeft size={15} /> DESIGN LIBRARY</button>
      <div className="retro-brand"><b>RYUMA</b><span>リューマ</span></div>
      <span>EXPRESSIVE / 02</span>
    </header>

    <section className="retro-hero">
      <div className="retro-stamp">EST.<br />19<br />68</div>
      <div className="retro-hero-copy">
        <span className="retro-kicker">03.02 / EXPRESSIVE · NOSTALGIC</span>
        <h1>TAKE<br /><em>THE ROAD.</em></h1>
        <p>Travel-poster nostalgia, sun-faded colour and the romance of the open road — reimagined for today.</p>
      </div>
      <div className="retro-poster retro-road-poster">
        <span className="retro-ticket">RYŪMA ROAD CLUB · NO. 024</span>
        <svg className="retro-landscape" viewBox="0 0 640 620" role="img" aria-label="Vintage travel poster illustration with a classic red car on a desert road, mountains, palm trees, sunset and an old roadside service station">
          <defs>
            <linearGradient id="retroSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#c94b32"/><stop offset=".62" stopColor="#e9a94f"/><stop offset="1" stopColor="#f3d29a"/></linearGradient>
            <linearGradient id="retroCar" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#d95a3e"/><stop offset="1" stopColor="#8d2f27"/></linearGradient>
            <pattern id="retroGrain" width="9" height="9" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r=".8" fill="#29251e" opacity=".28"/><circle cx="7" cy="6" r=".6" fill="#fff1d5" opacity=".22"/></pattern>
          </defs>
          <rect width="640" height="620" fill="#1f514d"/>
          <rect x="0" y="0" width="640" height="320" fill="url(#retroSky)"/>
          <circle cx="440" cy="145" r="112" fill="#f2c66e"/>
          <path d="M0 294L100 192L170 260L280 140L410 290L510 180L640 270V390H0Z" fill="#315c55"/>
          <path d="M0 320L130 238L220 308L355 215L480 320L565 245L640 300V410H0Z" fill="#b85a37"/>
          <path d="M0 355Q150 315 270 350T640 335V620H0Z" fill="#d49a50"/>
          <path d="M0 452Q170 400 310 435T640 420V620H0Z" fill="#c8783f"/>
          <path d="M220 620Q300 475 370 400Q450 340 640 348V620Z" fill="#3e4e3e"/>
          <path d="M260 620Q333 480 389 416Q470 364 640 368" fill="none" stroke="#f4d9a5" strokeWidth="7" strokeDasharray="24 20"/>
          <g fill="#203c35">
            <path d="M92 342Q90 225 66 154Q54 123 26 112Q64 108 91 141Q90 84 120 46Q132 100 111 153Q152 111 188 115Q158 151 115 171Q132 255 128 342Z"/>
            <path d="M176 347Q173 263 158 211Q142 181 119 172Q153 166 178 193Q180 150 203 121Q215 162 199 205Q229 183 256 193Q232 218 201 224Q216 286 211 350Z"/>
          </g>
          <g transform="translate(360 280)">
            <path d="M8 83L38 48Q53 30 90 26L183 26Q212 28 232 62L260 78L270 125H0Z" fill="url(#retroCar)" stroke="#28231d" strokeWidth="9" strokeLinejoin="round"/>
            <path d="M54 48L82 9Q91 -2 112 -2H174Q192 0 207 29L225 55Z" fill="#e8c991" stroke="#28231d" strokeWidth="8"/>
            <path d="M119 4V49M180 4L204 51" stroke="#28231d" strokeWidth="7"/>
            <path d="M18 85H248" stroke="#f2c66e" strokeWidth="7"/>
            <path d="M14 102H53M220 102H256" stroke="#f4dfb8" strokeWidth="9" strokeLinecap="round"/>
            <circle cx="61" cy="125" r="29" fill="#24231e" stroke="#e8d6ad" strokeWidth="8"/>
            <circle cx="61" cy="125" r="10" fill="#c7a36b"/>
            <circle cx="211" cy="125" r="29" fill="#24231e" stroke="#e8d6ad" strokeWidth="8"/>
            <circle cx="211" cy="125" r="10" fill="#c7a36b"/>
            <path d="M3 77L28 77M240 76L263 81" stroke="#f6dca9" strokeWidth="8" strokeLinecap="round"/>
          </g>
          <g transform="translate(520 215)">
            <path d="M0 75H94V205H0Z" fill="#e8c991" stroke="#263b34" strokeWidth="8"/>
            <path d="M-12 75H105L91 43H2Z" fill="#a84632" stroke="#263b34" strokeWidth="8"/>
            <rect x="18" y="92" width="56" height="48" fill="#315c55"/>
            <path d="M28 158H68M28 173H68" stroke="#a84632" strokeWidth="6"/>
            <path d="M93 105Q125 106 118 150" fill="none" stroke="#263b34" strokeWidth="8"/>
          </g>
          <path d="M0 0H640V620H0Z" fill="url(#retroGrain)" opacity=".65"/>
          <text x="28" y="48" fill="#fff0d3" fontFamily="Georgia,serif" fontWeight="bold" fontSize="24" letterSpacing="5">ROUTE / 66</text>
          <text x="30" y="584" fill="#fff0d3" fontFamily="Georgia,serif" fontWeight="bold" fontSize="29" letterSpacing="4">THE LONG WAY HOME</text>
        </svg>
        <span className="retro-poster-copy">DESERT ROADS<br />OPEN SKIES<br />NO FIXED PLANS</span>
        <span className="retro-road-badge">TAKE<br/>IT<br/>SLOW</span>
      </div>
    </section>

    <section className="retro-intro">
      <div><span className="retro-kicker">THE IDEA</span><h2>When the past<br /><em>gets a new canvas.</em></h2></div>
      <p>Retro and vintage design borrow visual cues from earlier decades — travel posters, classic automobiles, roadside architecture, analog photography and printed ephemera — bringing their warmth and cultural memory into the present.</p>
      <strong>Take the scenic route.</strong>
    </section>

    <section className="retro-anatomy">
      <div className="retro-section-label"><span>03</span><b>DESIGN ANATOMY</b></div>
      <div className="retro-section-main">
        <h2>Five signals.<br /><em>One unmistakable mood.</em></h2>
        <div className="retro-anatomy-grid">{anatomy.map(item => <article key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </div>
    </section>

    <section className="retro-colour">
      <div className="retro-section-label"><span>04</span><b>COLOUR SYSTEM</b></div>
      <div className="retro-colour-main">
        <div className="retro-colour-copy"><h2>Colour with<br /><em>patina.</em></h2><p>Vintage palettes feel lived-in. Saturation is softened, warmth is amplified, and every colour feels like it belongs on paper.</p></div>
        <div className="retro-palette"><div className="retro-cream"><span>PAPER<br />CREAM</span></div><div className="retro-brick"><span>BRICK<br />RED</span></div><div className="retro-mustard"><span>MUSTARD</span></div><div className="retro-teal"><span>FADED<br />TEAL</span></div><div className="retro-orange"><span>BURNT<br />ORANGE</span></div></div>
      </div>
    </section>

    <section className="retro-type">
      <div className="retro-section-label"><span>05</span><b>TYPOGRAPHY</b></div>
      <div className="retro-type-main">
        <div className="retro-type-poster"><span>THE</span><strong>GOOD</strong><i>OLD</i><b>DAYS</b><small>ARCHIVE / ISSUE 1968</small></div>
        <div><h2>Type carries<br /><em>the era.</em></h2><p>Display serif faces suggest heritage and storytelling, while condensed sans lettering brings the punch of old posters, packaging and signage.</p></div>
      </div>
    </section>

    <section className="retro-texture">
      <div className="retro-section-label"><span>06</span><b>PRINT + TEXTURE</b></div>
      <div className="retro-texture-main">
        <div className="retro-texture-card"><span>INK</span><b>HALFTONE</b><i>GRAIN</i><small>PRESS / PAPER / IMPERFECTION</small></div>
        <div><h2>Perfectly<br /><em>imperfect.</em></h2><p>Texture is not decoration. It creates the physical feeling that makes a digital composition resemble something found in an old drawer, shop window or printed archive.</p></div>
      </div>
    </section>

    <section className="retro-rules">
      <div className="retro-section-label"><span>07</span><b>THE RULES</b></div>
      <div className="retro-rules-main"><h2>Borrow the past.<br /><em>Don't copy it.</em></h2><div className="retro-rule-list">
        <div><b>01</b><strong>Warm it</strong><span>Use softened, period-inspired colour instead of sterile digital saturation.</span></div>
        <div><b>02</b><strong>Print it</strong><span>Let grain, halftone and ink-like variation give surfaces a physical voice.</span></div>
        <div><b>03</b><strong>Frame it</strong><span>Use borders, badges and poster structures to create a sense of place and era.</span></div>
        <div><b>04</b><strong>Modernize it</strong><span>Keep hierarchy, spacing and interaction contemporary even when the styling looks historic.</span></div>
      </div></div>
    </section>

    <footer className="retro-footer">
      <span className="retro-kicker">RETRO / VINTAGE · EXPRESSIVE</span>
      <h2>Old references.<br /><em>New energy.</em></h2>
      <p>Retro design turns cultural memory into a living visual language — warm, tactile, recognizable and ready for now.</p>
      <div><span>PRINT · PATINA · TYPE · COLOUR · MEMORY</span><span>RYUMA / DESIGN ANATOMY</span></div>
    </footer>
  </main>;
}
