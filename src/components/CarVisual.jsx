function Wheel({ x, y, radius, className = "" }) {
  return (
    <g className={`wheel ${className}`} transform={`translate(${x} ${y})`}>
      <circle r={radius} fill="#080b0d" stroke="#30383c" strokeWidth="9" />
      <circle r={radius * 0.83} fill="#171d21" stroke="#798185" strokeWidth="4" />
      <circle r={radius * 0.69} fill="#0b1013" stroke="#333b3f" strokeWidth="3" />
      <g stroke="#a7afb1" strokeWidth="4" strokeLinecap="round">
        <path d={`M0 ${-radius * .6}V${-radius * .16}M${radius * .57} ${-radius * .18} ${radius * .16} ${-radius * .06}M${radius * .35} ${radius * .48} ${radius * .1} ${radius * .13}M${-radius * .35} ${radius * .48} ${-radius * .1} ${radius * .13}M${-radius * .57} ${-radius * .18} ${-radius * .16} ${-radius * .06}M0 ${radius * .6}V${radius * .16}M${radius * .57} ${radius * .18} ${radius * .16} ${radius * .06}M${-radius * .57} ${radius * .18} ${-radius * .16} ${radius * .06}`} />
      </g>
      <circle r={radius * 0.19} fill="#aab3b5" />
      <circle r={radius * 0.09} fill="#333b3f" />
    </g>
  );
}

export default function CarVisual() {
  return (
    <svg className="car-wrap w-[min(112vw,1040px)] sm:w-[min(90vw,1120px)]" viewBox="0 0 1000 500" role="img" aria-labelledby="car-title car-description">
      <title id="car-title">Red performance SUV in a storm</title>
      <desc id="car-description">An original red off-road SUV illustration with illuminated headlights, detailed wheels, and sculpted bodywork.</desc>
      <defs>
        <linearGradient id="suv-paint" x1="0" y1="0" x2=".84" y2="1"><stop stopColor="#ff6863"/><stop offset=".22" stopColor="#e52c32"/><stop offset=".62" stopColor="#a90913"/><stop offset="1" stopColor="#540810"/></linearGradient>
        <linearGradient id="suv-side" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#ef353a"/><stop offset=".58" stopColor="#b20e19"/><stop offset="1" stopColor="#500810"/></linearGradient>
        <linearGradient id="suv-glass" x1="0" y1="0" x2=".8" y2="1"><stop stopColor="#9fb9bd"/><stop offset=".2" stopColor="#23383e"/><stop offset=".65" stopColor="#0c171c"/><stop offset="1" stopColor="#53666a"/></linearGradient>
        <linearGradient id="suv-grille" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#252d31"/><stop offset="1" stopColor="#05090b"/></linearGradient>
        <linearGradient id="suv-metal" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#f3f6f4"/><stop offset=".4" stopColor="#859195"/><stop offset="1" stopColor="#d8dfdf"/></linearGradient>
        <radialGradient id="headlamp"><stop stopColor="#fff"/><stop offset=".15" stopColor="#dff7ff"/><stop offset=".48" stopColor="#6fcfff"/><stop offset="1" stopColor="#6fcfff" stopOpacity="0"/></radialGradient>
        <filter id="suv-shadow" x="-20%" y="-40%" width="140%" height="190%"><feGaussianBlur stdDeviation="17"/></filter>
        <filter id="lamp-glow" x="-150%" y="-150%" width="400%" height="400%"><feGaussianBlur stdDeviation="10"/></filter>
      </defs>

      <ellipse cx="520" cy="409" rx="416" ry="54" fill="#000" opacity=".78" filter="url(#suv-shadow)"/>
      {/* Far side wheels */}
      <Wheel x={286} y={323} radius={72} />
      <Wheel x={711} y={316} radius={81} />
      {/* Rear quarter and cabin */}
      <path d="m104 302 34-89c13-35 43-63 80-77l104-40c39-15 82-22 128-20l133 6c43 2 79 21 111 56l74 82 80 34c46 20 76 55 88 95l-17 54c-12 22-40 34-79 31l-38-14c-7-66-40-105-91-105-49 0-84 39-96 105l-251 6c-5-62-32-94-80-94s-82 37-92 91l-86-8c-28-3-48-24-49-55l7-58Z" fill="url(#suv-paint)" stroke="#29070a" strokeWidth="8" strokeLinejoin="round"/>
      {/* Roof and panoramic windows */}
      <path d="m246 197 48-91c12-24 35-41 67-48l78-16c42-8 80-6 119 2l42 10c27 7 49 23 69 48l48 66-112-14-263 10-96 33Z" fill="url(#suv-glass)" stroke="#1d282c" strokeWidth="8" strokeLinejoin="round"/>
      <path d="m365 62-52 96 174-7 19-105c-49-4-94 0-141 16Z" fill="#21363b" stroke="#111a1d" strokeWidth="5"/>
      <path d="m520 46-15 105 183 14-41-56c-19-26-39-42-67-49l-60-14Z" fill="#101d22" stroke="#111a1d" strokeWidth="5"/>
      <path d="m308 168 207-17 184 14" fill="none" stroke="#dce6e5" strokeWidth="4" opacity=".58"/>
      <path d="M507 52 494 155" stroke="#718286" strokeWidth="5"/>
      <path d="m256 185 45-81" stroke="#fff" strokeWidth="5" opacity=".28"/>
      {/* Door panels and sculpted reflections */}
      <path d="m226 206 66-19-10 120m235-128-7 156m12-155 160 14 40 101" fill="none" stroke="#5b090f" strokeWidth="8" opacity=".8"/>
      <path d="m165 252 105-37 162-22m120 9 91 10" fill="none" stroke="#ff8b80" strokeWidth="5" opacity=".48"/>
      <path d="m300 194 15 8-12 9h-32l8-8m284-14 25 1 11 8-8 8h-29" fill="#171d20" stroke="#a0a8a7" strokeWidth="2"/>
      <path d="m164 216 34-12 22 6-6 11-41 13Z" fill="url(#suv-metal)" stroke="#273135" strokeWidth="5"/>
      {/* Wheel arches and dark rocker trim */}
      <path d="M194 321c13-66 48-105 98-105 54 0 85 43 90 110m230-7c12-73 51-113 104-113 58 0 93 47 99 112" fill="none" stroke="#292f32" strokeWidth="14"/>
      <path d="m149 355 98 12m144 1 251-7m183-2 94-8" fill="none" stroke="#151b1e" strokeWidth="24" strokeLinecap="round"/>
      <path d="m159 350 98 11m483-2 77-7" fill="none" stroke="#91999b" strokeWidth="4" opacity=".6"/>
      {/* Front fascia, grille and bumper */}
      <path d="m717 205 93 27c49 16 87 53 104 94l10 37c-16 24-45 36-82 33l-54-16-2-52c-6-51-38-84-83-87l14-36Z" fill="url(#suv-paint)" stroke="#30070b" strokeWidth="8"/>
      <path d="m788 252 76 26c26 10 45 28 56 51l-10 52-119-4-15-50c-7-22-19-36-38-45Z" fill="url(#suv-grille)" stroke="#11181b" strokeWidth="8"/>
      <path d="m811 267 11 102m18-94 11 99m17-86 10 88m16-68 6 65" stroke="#9ca5a5" strokeWidth="7"/>
      <path d="m793 257 67 23m-60-3 78 27m-66-6 72 28m-63-7 64 26" stroke="#455055" strokeWidth="4" opacity=".85"/>
      <path d="m722 218 51 10 27 23-68-9Z" fill="#f3f6f2" stroke="#222a2d" strokeWidth="5"/>
      <path d="m726 222 43 9 19 15-57-7Z" fill="#73d9ff" filter="url(#lamp-glow)"/>
      <path d="m727 222 42 9 17 14-53-7Z" fill="#e4faff"/>
      <circle cx="754" cy="233" r="35" fill="url(#headlamp)" opacity=".82"/>
      <path d="m886 306 22 12m-30 22 31 8" stroke="#e9f7ff" strokeWidth="8" strokeLinecap="round"/>
      <path d="m780 373 130-4-12 24-93 5Z" fill="#171d20" stroke="#899395" strokeWidth="4"/>
      <path d="m798 385 84-3" stroke="#c0c7c7" strokeWidth="4"/>
      <path d="m864 395-41 8" stroke="#bc9d56" strokeWidth="8"/>
      {/* Rear lamp and mirror */}
      <path d="m110 290 45 10-7 34-43-11Z" fill="#ff5360" stroke="#631016" strokeWidth="5"/>
      <path d="m232 178-37-15-24 8 12 17Z" fill="#b40f1a" stroke="#601018" strokeWidth="5"/>
      {/* Rain reflections */}
      <path d="m240 287 122-34m42 66 128-39m54-25 77-20" stroke="#ffb9ae" strokeWidth="4" opacity=".25"/>
    </svg>
  );
}
