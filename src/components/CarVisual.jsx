function Wheel({ x, y }) {
  return (
    <g className="wheel" transform={`translate(${x} ${y})`}>
      <circle r="58" fill="#090b0d" stroke="#22272a" strokeWidth="6" />
      <circle r="47" fill="#161a1e" stroke="#667076" strokeWidth="3" />
      <circle r="39" fill="#080b0d" stroke="#41494e" strokeWidth="2" />
      <g stroke="#aab1b4" strokeWidth="2.4" strokeLinecap="round">
        <path d="M0-35v24m20-18L8-8m26 1-23 7m23 13-23-7m14 26L8 8M0 35V11m-20 18L-8 8m-26-1 23-7m-23-13 23 7m-14-26L-8-8" />
      </g>
      <circle r="11" fill="#aeb5b7" />
      <circle r="4" fill="#30363a" />
      {[0, 72, 144, 216, 288].map((angle) => <circle key={angle} cx={Math.cos(angle * Math.PI / 180) * 24} cy={Math.sin(angle * Math.PI / 180) * 24} r="2" fill="#dce1e2" />)}
    </g>
  );
}

export default function CarVisual() {
  return (
    <svg className="car-wrap w-[min(104vw,900px)] sm:w-[min(82vw,1040px)]" viewBox="0 0 1000 380" role="img" aria-labelledby="car-title car-description">
      <title id="car-title">Red performance coupe</title>
      <desc id="car-description">A low red sports coupe with black alloy wheels, a rear wing, sculpted side intakes, and reflective glass, shown in profile.</desc>
      <defs>
        <linearGradient id="coupe-paint" x1="0" y1="0" x2=".8" y2="1"><stop stopColor="#ff7772"/><stop offset=".18" stopColor="#f22d35"/><stop offset=".48" stopColor="#cf101d"/><stop offset=".8" stopColor="#8e0a14"/><stop offset="1" stopColor="#4a080e"/></linearGradient>
        <linearGradient id="coupe-glass" x1="0" y1="0" x2=".7" y2="1"><stop stopColor="#e1e9e9"/><stop offset=".22" stopColor="#87989b"/><stop offset=".62" stopColor="#273237"/><stop offset="1" stopColor="#11171a"/></linearGradient>
        <linearGradient id="coupe-lower" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#aa111b"/><stop offset="1" stopColor="#2c070b"/></linearGradient>
        <linearGradient id="coupe-trim" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#e7eded"/><stop offset=".5" stopColor="#848e91"/><stop offset="1" stopColor="#d9dddd"/></linearGradient>
        <filter id="coupe-shadow" x="-15%" y="-60%" width="130%" height="230%"><feGaussianBlur stdDeviation="12"/></filter>
        <filter id="coupe-light" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="6"/></filter>
      </defs>
      <ellipse cx="486" cy="319" rx="400" ry="24" fill="#000" opacity=".57" filter="url(#coupe-shadow)" />
      {/* Rear wing and supports */}
      <path d="m116 109-30-27 90 2 33 27m-67-2-7 42m58-42 9 37" fill="#111619" stroke="#343b3e" strokeWidth="5" strokeLinejoin="round" />
      <path d="m83 76 102 5 15 12-110-4Z" fill="#080c0e" stroke="#31383b" strokeWidth="4" />
      {/* Wheels are separate scroll-rotating elements */}
      <Wheel x={263} y={267} />
      <Wheel x={706} y={267} />
      {/* Low coupe silhouette */}
      <path d="M74 233c12-20 36-35 75-42l85-16 91-58c29-20 71-32 118-34l144-3c48-1 87 11 124 39l57 44 82 18c34 8 60 26 77 53l14 31-13 22-61 9-35-2c-4-53-28-82-67-82-41 0-67 31-69 86l-368 1c-1-51-24-83-66-83s-68 32-72 81l-78-8c-34-4-52-22-52-45l4-11Z" fill="url(#coupe-paint)" stroke="#31070b" strokeWidth="5" strokeLinejoin="round" />
      <path d="m232 175 96-60c28-17 66-26 112-28l139-3c46-1 79 10 109 33l49 42-74-5-50-45c-20-18-43-25-74-25l-95 2c-28 1-51 8-70 25l-64 57-78 18Z" fill="url(#coupe-glass)" stroke="#222a2d" strokeWidth="5" strokeLinejoin="round" />
      {/* Window divisions and reflections */}
      <path d="m445 89-20 75m89-77 5 75m-161-61 39 62m231-117 58 62" stroke="#1a2226" strokeWidth="7" />
      <path d="m335 121 88-20m126-18 39 5c29 4 51 14 72 34" fill="none" stroke="#f2f6f5" strokeWidth="4" opacity=".47" />
      <path d="m516 88 1 74" stroke="#d5dede" strokeWidth="2" opacity=".58" />
      <path d="m231 182 83-57" fill="none" stroke="#ffafa2" strokeWidth="4" opacity=".5" />
      {/* Door, air intake, body creases */}
      <path d="m467 165-9 96m100-91 8 87m-267-88 133-4m168 5 93 7" fill="none" stroke="#750b12" strokeWidth="5" opacity=".85" />
      <path d="m271 205 116-18 91-4m118 1 94 13" fill="none" stroke="#ff8d85" strokeWidth="3" opacity=".56" />
      <path d="m348 190 104-15-64 37-64 2Z" fill="#11181b" stroke="#731018" strokeWidth="4" />
      <path d="m505 188 63 4 18 10-10 9-65-5Z" fill="#11181b" stroke="#791019" strokeWidth="3" />
      <path d="m297 177 53-32 18 4-42 34Z" fill="#141a1d" />
      <path d="m172 214 45-11 29 4-7 12-62 12Z" fill="#171d20" stroke="#791018" strokeWidth="3" />
      {/* Wheel arches and lower aero */}
      <path d="M187 271c6-55 34-91 76-91 44 0 73 35 77 91m292-1c6-57 34-94 76-94 47 0 77 37 79 94" fill="none" stroke="#1b2023" strokeWidth="9" />
      <path d="m147 293 62 4m163 3 290-1m151-5 88-10" stroke="#141a1d" strokeWidth="15" strokeLinecap="round" />
      <path d="m201 300 33 1m404-2 76-2" stroke="#80898c" strokeWidth="3" opacity=".7" />
      {/* Nose, splitter and lights */}
      <path d="m767 171 76 18c37 9 65 27 83 52l17 25-16 21-68 11-14-50c-10-35-34-56-72-63l-36-5Z" fill="url(#coupe-paint)" stroke="#4c080e" strokeWidth="5" />
      <path d="m827 198 54 16 32 29-78-11Z" fill="#171d20" stroke="#252d30" strokeWidth="4" />
      <path d="m838 196 42 14 25 22-61-9Z" fill="#e9f2f2" />
      <path d="m842 200 34 12 19 16-51-8Z" fill="#99ddf7" filter="url(#coupe-light)" />
      <path d="m841 199 34 12 18 15-49-8Z" fill="#f6ffff" />
      <path d="m786 281 126-14-11 21-106 15Z" fill="#111719" stroke="#727b7e" strokeWidth="3" />
      <path d="m796 290 100-11" stroke="url(#coupe-trim)" strokeWidth="4" />
      <path d="m900 253 19 5" stroke="#f6ffff" strokeWidth="5" strokeLinecap="round" />
      {/* Rear tail light and diffuser */}
      <path d="m77 226 51-12 18 11-18 18-48 4Z" fill="#151a1d" stroke="#2a3033" strokeWidth="3" />
      <path d="m80 230 37-8-14 10-22 4Z" fill="#ff535e" />
      <path d="m84 250 60 2-19 17-40-7Z" fill="url(#coupe-lower)" />
      <path d="m109 309 47 2 21-9 32 5m539 1 58-8 26 2" fill="none" stroke="url(#coupe-trim)" strokeWidth="4" opacity=".72" />
      {/* Fine highlights */}
      <path d="m302 263 128-1m155-3 80-2" stroke="#ffd5ce" strokeWidth="2" opacity=".3" />
    </svg>
  );
}
