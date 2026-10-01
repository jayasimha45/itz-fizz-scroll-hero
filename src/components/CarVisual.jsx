export default function CarVisual() {
  return (
    <svg className="car-wrap w-[min(78vw,760px)] sm:w-[min(70vw,780px)]" viewBox="0 0 900 320" role="img" aria-labelledby="car-title car-description">
      <title id="car-title">Futuristic electric race car</title>
      <desc id="car-description">A top-down white electric race car with green accents and a visible charging indicator.</desc>
      <defs>
        <linearGradient id="car-shell" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#fff"/><stop offset=".48" stopColor="#e7edf0"/><stop offset="1" stopColor="#aab5bb"/></linearGradient>
        <linearGradient id="canopy" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#26323a"/><stop offset=".5" stopColor="#071016"/><stop offset="1" stopColor="#18242c"/></linearGradient>
        <filter id="soft-shadow" x="-20%" y="-40%" width="140%" height="180%"><feGaussianBlur stdDeviation="12"/></filter>
      </defs>
      <ellipse className="car-shadow" cx="452" cy="181" rx="380" ry="92" fill="#000" opacity=".52" filter="url(#soft-shadow)"/>
      {/* wheel pods */}
      {[{x:105,y:57},{x:105,y:211},{x:693,y:57},{x:693,y:211}].map(({x,y}, i) => <g key={i} className="wheel" transform={`translate(${x} ${y})`}>
        <rect x="0" y="0" width="105" height="53" rx="23" fill="#080d11" stroke="#39434a" strokeWidth="4"/>
        <rect x="11" y="8" width="83" height="37" rx="17" fill="#242e34"/>
        <path d="M20 26h65M52 10v33M29 12l47 29M77 12 29 41" stroke="#9ca9ae" strokeWidth="3" opacity=".75"/>
        <circle cx="52" cy="26" r="8" fill="#50d98d"/>
      </g>)}
      {/* rear wing and chassis */}
      <path d="M77 106 42 93v15H18v12h62m-62 80h24v13l35-14" fill="none" stroke="#151d22" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M139 43c62-26 162-34 300-34h125c96 0 158 22 205 55l74 51c30 20 43 38 43 47s-13 27-43 47l-74 51c-47 33-109 55-205 55H439c-138 0-238-8-300-34-48-20-78-59-78-119s30-99 78-119Z" fill="url(#car-shell)" stroke="#f7fafb" strokeWidth="5"/>
      <path d="M158 58c63-21 153-27 278-27h127c92 0 142 21 183 50l63 45H168c-29 0-46-14-46-31 0-14 13-28 36-37Z" fill="#f8fbfc" opacity=".7"/>
      <path d="M167 262c65 21 158 27 269 27h127c92 0 142-21 183-50l63-45H168c-29 0-46 14-46 31 0 14 13 28 45 37Z" fill="#89969e" opacity=".48"/>
      {/* cockpit */}
      <path d="M332 65c35-25 86-34 143-34s108 9 143 34c37 26 57 58 57 95s-20 69-57 95c-35 25-86 34-143 34s-108-9-143-34c-37-26-57-58-57-95s20-69 57-95Z" fill="url(#canopy)" stroke="#27363d" strokeWidth="5"/>
      <path d="M342 77c32-18 78-26 133-26v217c-55 0-101-8-133-26-29-17-45-42-45-82s16-65 45-83Z" fill="#111c22" opacity=".74"/>
      <path d="M337 70c29-15 65-22 107-25" fill="none" stroke="#42d78b" strokeWidth="4" opacity=".8"/>
      {/* nose accents and lights */}
      <path d="M672 87 789 111l47 34-103-12-62-20Z" fill="#43d989"/>
      <path d="m672 233 117-24 47-34-103 12-62 20Z" fill="#43d989"/>
      <path d="m781 128 60 17-60 17" fill="none" stroke="#f7ffff" strokeWidth="8" strokeLinecap="round"/>
      <path d="m781 175 60-17" fill="none" stroke="#f7ffff" strokeWidth="5" strokeLinecap="round" opacity=".65"/>
      {/* rear lamps */}
      <rect x="90" y="126" width="25" height="12" rx="6" fill="#ff5368"/><rect x="90" y="182" width="25" height="12" rx="6" fill="#ff5368"/>
      <circle cx="126" cy="144" r="8" fill="#10191e"/><circle cx="126" cy="174" r="8" fill="#10191e"/>
      {/* charging indicator on deck */}
      <rect x="188" y="144" width="85" height="32" rx="10" fill="#101a1f" stroke="#52636a" strokeWidth="2"/>
      <rect x="196" y="152" width="68" height="16" rx="5" fill="#26343a"/>
      <rect className="battery-fill" x="196" y="152" width="68" height="16" rx="5" fill="#43d989"/>
      <path d="m232 153-8 9h7l-3 6 12-10h-8l4-5Z" fill="#07120c"/>
      {/* sensor details */}
      <rect x="144" y="72" width="37" height="13" rx="6.5" fill="#202b31"/><rect x="144" y="235" width="37" height="13" rx="6.5" fill="#202b31"/>
      <path d="M204 106h43m-43 108h43" stroke="#172127" strokeWidth="7" strokeLinecap="round"/>
    </svg>
  );
}
