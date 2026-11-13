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
        <p>Neon coastlines, late-night radio and the romance of the open road — a postcard from another Miami night.</p>
      </div>
      <div className="retro-poster retro-road-poster">
        <span className="retro-ticket">RYŪMA NIGHT DRIVE CLUB · NO. 024</span>
        <svg className="retro-landscape" viewBox="0 0 640 620" role="img" aria-label="1980s Miami-inspired neon night-drive poster showing a classic sports car on a reflective Ocean Drive, Art Deco hotels, palm trees and a striped sunset">
          <defs>
            <linearGradient id="miamiSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#17164d"/><stop offset=".38" stopColor="#75235f"/><stop offset=".72" stopColor="#ed4b78"/><stop offset="1" stopColor="#ff9a58"/>
            </linearGradient>
            <linearGradient id="miamiRoad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#24365c"/><stop offset="1" stopColor="#090f25"/>
            </linearGradient>
            <linearGradient id="miamiCar" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#ff8c9d"/><stop offset=".45" stopColor="#d83d77"/><stop offset="1" stopColor="#602b68"/>
            </linearGradient>
            <linearGradient id="miamiGlass" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#4de5df"/><stop offset="1" stopColor="#202d64"/>
            </linearGradient>
            <pattern id="miamiGrain" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="1.5" cy="2" r=".65" fill="#fff0d8" opacity=".38"/>
              <circle cx="6" cy="6" r=".5" fill="#080b24" opacity=".34"/>
            </pattern>
            <clipPath id="miamiSunClip"><circle cx="326" cy="244" r="116"/></clipPath>
          </defs>

          
          <rect width="640" height="620" fill="#111630"/>
          <rect width="640" height="390" fill="url(#miamiSky)"/>
          <circle cx="326" cy="244" r="116" fill="#ffb45f"/>
          <g clipPath="url(#miamiSunClip)" fill="#e64d80">
            <rect x="190" y="235" width="272" height="8"/>
            <rect x="190" y="255" width="272" height="10"/>
            <rect x="190" y="279" width="272" height="13"/>
            <rect x="190" y="310" width="272" height="16"/>
            <rect x="190" y="347" width="272" height="23"/>
          </g>

          
          <path d="M0 344V285H34V250H61V305H89V272H119V326H144V240H170V327H199V278H223V334H252V264H281V335H311V300H337V343H370V278H399V335H425V255H454V329H479V285H508V339H535V265H566V331H590V295H640V370H0Z" fill="#202d59"/>
          <g fill="#ffb16d" opacity=".8">
            <path d="M43 267h5v8h-5zm0 17h5v8h-5zm91-32h5v8h-5zm0 18h5v8h-5zm120 4h5v8h-5zm0 18h5v8h-5zm180-8h5v8h-5zm0 18h5v8h-5zm118-21h5v8h-5zm0 18h5v8h-5z"/>
          </g>

          
          <g stroke="#11152d" strokeWidth="7" strokeLinejoin="round">
            <path d="M420 365V238Q420 218 443 218H505Q529 218 529 242V365Z" fill="#2c7d8c"/>
            <path d="M432 239Q432 229 444 229H503Q516 229 516 242V254H432Z" fill="#f1a1a0"/>
            <path d="M446 264H504V354H446Z" fill="#24385e"/>
            <path d="M456 270H494V310H456Z" fill="#ffbf72" stroke="none"/>
            <path d="M465 270V310M456 290H494" stroke="#17203e" strokeWidth="5"/>
            <path d="M408 365H542" stroke="#f5c48b" strokeWidth="9"/>
            <path d="M532 365V263Q532 244 550 244H610V365Z" fill="#d54e78"/>
            <path d="M542 263H599V278H542Z" fill="#f7a36e"/>
            <path d="M548 293H590V340H548Z" fill="#202d59"/>
            <path d="M558 296H580V336H558Z" fill="#f7b66f" stroke="none"/>
            <path d="M542 365H620" stroke="#f6c18a" strokeWidth="9"/>
          </g>
          <g fill="none" strokeLinecap="round">
            <path d="M427 216H522" stroke="#49e0dc" strokeWidth="5"/>
            <path d="M535 241H613" stroke="#ff4f9a" strokeWidth="5"/>
            <path d="M435 225H514" stroke="#ff5a9e" strokeWidth="3"/>
          </g>

          
          <g fill="#101a32">
            <path d="M91 414Q100 315 80 229Q75 204 45 184Q82 184 99 213Q92 160 122 120Q130 172 117 215Q151 181 193 184Q159 218 121 237Q139 320 130 414Z"/>
            <path d="M178 415Q183 338 166 279Q158 255 138 241Q170 239 186 264Q185 222 211 192Q218 236 203 271Q236 246 269 257Q241 284 207 294Q220 354 211 415Z"/>
            <path d="M355 389Q362 332 350 291Q344 273 328 260Q353 260 366 280Q364 248 386 225Q394 259 381 286Q407 267 433 277Q412 299 384 306Q395 350 389 389Z"/>
          </g>
          <g fill="none" stroke="#ff6c9b" strokeWidth="3" opacity=".85">
            <path d="M96 222Q45 167 24 175M102 212Q91 150 113 119M112 226Q160 176 194 185M184 278Q144 236 137 242M190 271Q193 221 210 193M199 289Q235 247 268 257"/>
          </g>

          
          <path d="M0 375Q150 350 300 382T640 364V620H0Z" fill="url(#miamiRoad)"/>
          <path d="M0 410Q130 390 260 414T640 398" fill="none" stroke="#f36b99" strokeWidth="4" opacity=".7"/>
          <path d="M20 445H200M38 463H178M450 445H620M470 465H610" stroke="#40d7d4" strokeWidth="4" opacity=".55"/>
          <path d="M320 620L370 432" stroke="#f5c58a" strokeWidth="5" strokeDasharray="22 19" opacity=".8"/>
          <path d="M382 620L420 446" stroke="#ff4f93" strokeWidth="9" opacity=".35"/>
          <path d="M458 620L486 450" stroke="#39d7d4" strokeWidth="8" opacity=".32"/>

          
          <g transform="translate(132 348)" stroke="#111326" strokeLinejoin="round" strokeWidth="9">
            <path d="M32 118L61 70Q82 37 137 27L300 25Q343 29 378 78L412 104L422 158L6 158L12 132Z" fill="url(#miamiCar)"/>
            <path d="M98 72L141 20Q154 5 184 5H274Q307 7 337 62Z" fill="url(#miamiGlass)"/>
            <path d="M184 8L177 66M274 8L305 65" fill="none" stroke="#111326" strokeWidth="8"/>
            <path d="M18 115H405" stroke="#f7c18b" strokeWidth="8"/>
            <path d="M34 136H97M335 136H404" stroke="#f8d4a6" strokeWidth="9" strokeLinecap="round"/>
            <path d="M352 82H401" stroke="#ff5a93" strokeWidth="7"/>
            <path d="M350 96H407" stroke="#ff5a93" strokeWidth="7"/>
            <path d="M355 110H409" stroke="#ff5a93" strokeWidth="7"/>
            <path d="M16 119L3 145M412 111L424 143" stroke="#111326" strokeWidth="7"/>
            <circle cx="96" cy="159" r="37" fill="#111326" stroke="#f4c58c" strokeWidth="9"/>
            <circle cx="96" cy="159" r="13" fill="#41d8d3" stroke="#111326" strokeWidth="5"/>
            <circle cx="342" cy="159" r="37" fill="#111326" stroke="#f4c58c" strokeWidth="9"/>
            <circle cx="342" cy="159" r="13" fill="#41d8d3" stroke="#111326" strokeWidth="5"/>
            <path d="M24 95L59 95M374 93L410 100" stroke="#fff0d7" strokeWidth="8" strokeLinecap="round"/>
            <path d="M154 177L140 210M285 178L302 210" stroke="#ff4e96" strokeWidth="7" opacity=".8"/>
          </g>

          
          <g transform="translate(30 360)">
            <path d="M0 0H78V42H0Z" fill="#f5e2c3" stroke="#111326" strokeWidth="4"/>
            <text x="39" y="27" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="15" fontWeight="900" fill="#18223b">MIAMI</text>
          </g>
          <text x="32" y="50" fill="#fff0d7" fontFamily="Georgia,serif" fontWeight="bold" fontSize="23" letterSpacing="5">OCEAN DRIVE</text>
          <text x="34" y="585" fill="#fff0d7" fontFamily="Georgia,serif" fontWeight="bold" fontSize="26" letterSpacing="3">AFTER THE SUNSET</text>
          <rect width="640" height="620" fill="url(#miamiGrain)" opacity=".42"/>
        </svg>
        <span className="retro-poster-copy">NEON STREETS<br />OCEAN BREEZE<br />NO FIXED PLANS</span>
        <span className="retro-road-badge">AFTER<br/>DARK<br/>DRIVE</span>
      </div>
    </section>

    <section className="retro-intro">
      <div><span className="retro-kicker">THE IDEA</span><h2>When the past<br /><em>gets a new canvas.</em></h2></div>
      <p>Retro and vintage design borrow visual cues from earlier decades — travel posters, 1980s coastal nightlife, Art Deco hotels, classic sports cars, neon signage and printed ephemera — bringing their warmth and cultural memory into the present.</p>
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
