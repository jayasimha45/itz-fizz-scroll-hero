function Wheel({ x }) {
  return (
    <g className="wheel" transform={`translate(${x} 222)`}>
      <circle r="43" fill="#07090b" />
      <circle r="31" fill="#d9dddf" stroke="#aeb5b8" strokeWidth="2" />
      <g stroke="#f7f8f8" strokeWidth="4" strokeLinecap="round">
        <path d="M0-23V-5M20-12 5-3M20 12 5 3M0 23V5M-20 12-5 3M-20-12-5-3" />
      </g>
      <circle r="7" fill="#f8f9f9" stroke="#9da5a8" strokeWidth="2" />
    </g>
  );
}

export default function CarVisual() {
  return (
    <svg className="car-wrap w-[clamp(220px,28vw,620px)]" viewBox="0 0 820 310" role="img" aria-labelledby="car-title car-description">
      <title id="car-title">Midnight black luxury sedan</title>
      <desc id="car-description">A minimal side-profile black sedan with a smooth roofline, silver wheels, red rear light, and a cool white headlamp.</desc>
      <defs>
        <linearGradient id="sedan-body" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#343b42"/><stop offset=".23" stopColor="#22282d"/><stop offset=".82" stopColor="#111519"/><stop offset="1" stopColor="#080b0e"/></linearGradient>
        <linearGradient id="sedan-glass" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#303941"/><stop offset=".38" stopColor="#12191e"/><stop offset="1" stopColor="#070a0d"/></linearGradient>
        <linearGradient id="sedan-highlight" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#67717a" stopOpacity="0"/><stop offset=".52" stopColor="#aeb8c0" stopOpacity=".54"/><stop offset="1" stopColor="#67717a" stopOpacity="0"/></linearGradient>
        <filter id="sedan-shadow" x="-15%" y="-100%" width="130%" height="300%"><feGaussianBlur stdDeviation="11" /></filter>
      </defs>

      <ellipse cx="413" cy="272" rx="330" ry="19" fill="#172027" opacity=".18" filter="url(#sedan-shadow)" />
      <Wheel x={192} />
      <Wheel x={624} />

      {/* Quiet, long-roof sedan silhouette */}
      <path d="M54 204c8-21 27-34 62-40l77-13 73-61c24-21 56-33 96-34l103-2c45-1 78 10 110 34l63 50 81 16c35 7 58 23 70 47l8 20c5 15-8 24-30 26l-73 3c-3-39-28-63-66-63s-63 25-67 64l-306 1c-4-39-28-64-66-64s-63 25-67 64l-39-4c-24-2-39-15-39-31v-13Z" fill="url(#sedan-body)" stroke="#080b0e" strokeWidth="4" strokeLinejoin="round" />

      {/* Windows and roof */}
      <path d="m211 148 68-57c22-18 50-27 84-28l94-2c39 0 69 10 98 32l53 44-99-7-194 2-104 16Z" fill="url(#sedan-glass)" stroke="#161d22" strokeWidth="5" strokeLinejoin="round" />
      <path d="m383 67-31 69 137-1 2-73c-14-2-27-2-42-2l-66 1Z" fill="#151c21" stroke="#11171b" strokeWidth="4" />
      <path d="m500 64-7 71 112 7-51-43c-17-15-33-26-54-31Z" fill="#0b1115" stroke="#11171b" strokeWidth="4" />
      <path d="m355 72-15 64m153-67-2 68m-225-48 54 48" fill="none" stroke="#414b52" strokeWidth="3" opacity=".58" />
      <path d="m291 94 72-22m150-7 27 8c23 7 43 21 61 38" fill="none" stroke="#a9b7bd" strokeWidth="3" opacity=".26" />

      {/* Doors, handles, mirrors and restrained highlights */}
      <path d="m351 141-5 90m151-91 4 88m-153-74h148" fill="none" stroke="#0b1014" strokeWidth="4" />
      <path d="m382 158 18-1m100-1 17 1" stroke="#68727a" strokeWidth="5" strokeLinecap="round" />
      <path d="m207 153 31-8 20 5-9 12-42 7Z" fill="#20282e" stroke="#090d10" strokeWidth="4" />
      <path d="m230 180 96-19 176-2 141 9" fill="none" stroke="url(#sedan-highlight)" strokeWidth="4" />
      <path d="m118 204 71-13m447-5 92 16" fill="none" stroke="#59636a" strokeWidth="3" opacity=".3" />

      {/* Wheel arches, sill and bumpers */}
      <path d="M124 224c5-43 29-70 68-70s63 27 68 70m296 0c5-43 29-70 68-70s63 27 68 70" fill="none" stroke="#0a0e11" strokeWidth="7" />
      <path d="m77 240 44 4m208 1 291-1m110-4 76-5" fill="none" stroke="#06090b" strokeWidth="11" strokeLinecap="round" />
      <path d="m124 251 47 3m429-2 54-2" fill="none" stroke="#657078" strokeWidth="2" opacity=".52" />

      {/* Minimal signature lamps */}
      <path d="m55 184 22-4 4 16-27 4Z" fill="#f05459" />
      <path d="m780 171 23 5 14 11-35-4Z" fill="#dbeeff" />
      <path d="m783 173 20 5 9 7-25-3Z" fill="#fff" />
      <path d="m792 224 27-2 7 9-35 6Z" fill="#080c0f" />
      <path d="m77 222 30 2" stroke="#737e85" strokeWidth="3" opacity=".45" />
    </svg>
  );
}
