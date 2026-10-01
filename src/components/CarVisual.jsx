function Wheel({ x, y }) {
  return (
    <g className="wheel" transform={`translate(${x} ${y})`}>
      <circle r="57" fill="#080a0c" stroke="#272d30" strokeWidth="6" />
      <circle r="47" fill="#171c1f" stroke="#7c8588" strokeWidth="3" />
      <circle r="39" fill="#0c1012" stroke="#373e42" strokeWidth="2" />
      <g stroke="#b7bec0" strokeWidth="2.7" strokeLinecap="round">
        <path d="M0-34v21m20-27-10 20m29-4-21 9m29 12-23-5m15 29L10 5M0 34V13m-20 27 10-20m-29 4 21-9m-29-12 23 5m-15-29 14 18" />
      </g>
      <circle r="12" fill="#b9c0c1" />
      <circle r="4" fill="#252b2e" />
      {[0, 72, 144, 216, 288].map((angle) => <circle key={angle} cx={Math.cos(angle * Math.PI / 180) * 25} cy={Math.sin(angle * Math.PI / 180) * 25} r="1.8" fill="#eef1f1" />)}
    </g>
  );
}

export default function CarVisual() {
  return (
    <svg className="car-wrap w-[min(104vw,900px)] sm:w-[min(82vw,1040px)]" viewBox="0 0 1000 380" role="img" aria-labelledby="car-title car-description">
      <title id="car-title">Red performance coupe</title>
      <desc id="car-description">A sleek red sports coupe in side profile, with a rear wing, dark glass, sculpted side intake, alloy wheels, and sharp headlights.</desc>
      <defs>
        <linearGradient id="body-red" x1=".12" y1="0" x2=".84" y2="1"><stop stopColor="#ff7772"/><stop offset=".2" stopColor="#f3343b"/><stop offset=".55" stopColor="#c81421"/><stop offset=".86" stopColor="#870a15"/><stop offset="1" stopColor="#48070d"/></linearGradient>
        <linearGradient id="glass-smoke" x1="0" y1="0" x2=".7" y2="1"><stop stopColor="#e2ebeb"/><stop offset=".2" stopColor="#87999d"/><stop offset=".58" stopColor="#2d3a3e"/><stop offset="1" stopColor="#11171a"/></linearGradient>
        <linearGradient id="lower-carbon" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#381015"/><stop offset="1" stopColor="#0a0d0f"/></linearGradient>
        <linearGradient id="lamp-white" x1="0" y1="0" x2="1" y2="0"><stop stopColor="#9fb9c2"/><stop offset=".5" stopColor="#fff"/><stop offset="1" stopColor="#b7cbd0"/></linearGradient>
        <filter id="car-ground-shadow" x="-15%" y="-80%" width="130%" height="260%"><feGaussianBlur stdDeviation="11" /></filter>
      </defs>

      <ellipse cx="492" cy="322" rx="390" ry="20" fill="#000" opacity=".55" filter="url(#car-ground-shadow)" />
      {/* compact rear wing */}
      <path d="m108 115-19-29 89 4 31 24m-79-1-5 31m51-31 8 29" fill="#111619" stroke="#333b3f" strokeWidth="4" strokeLinejoin="round" />
      <path d="m82 78 105 6 14 12-111-4Z" fill="#080c0e" stroke="#343b3e" strokeWidth="4" />
      {/* isolated wheel groups keep the scroll rotation clean */}
      <Wheel x={259} y={273} />
      <Wheel x={709} y={273} />

      {/* main body silhouette */}
      <path d="M70 244c9-22 31-39 67-48l92-22 90-61c31-21 72-33 119-35l141-3c51-1 91 11 130 41l59 48 75 18c36 9 62 26 78 53l11 23-12 23-59 10-46-3c-4-54-27-82-67-82s-66 31-70 86H342c-2-52-25-81-67-81-41 0-68 31-72 80l-73-7c-34-4-54-21-54-43l-6 3Z" fill="url(#body-red)" stroke="#32080c" strokeWidth="5" strokeLinejoin="round" />
      <path d="m236 176 87-58c29-18 66-28 110-30l137-3c47-1 81 10 111 34l52 44-73-6-49-45c-21-19-45-25-75-25l-94 2c-30 1-52 9-72 26l-63 57-70 17Z" fill="url(#glass-smoke)" stroke="#252d30" strokeWidth="5" strokeLinejoin="round" />

      {/* crisp glass panels and highlights */}
      <path d="m371 95-46 76 117-2 17-84-18 1c-29 1-51 3-70 9Z" fill="#233136" stroke="#172023" strokeWidth="4" />
      <path d="m470 84-16 85 180 1-46-47c-19-20-41-32-72-37l-46-2Z" fill="#162125" stroke="#172023" strokeWidth="4" />
      <path d="m470 88-15 80m-125-62 39 62m206-84 59 63" stroke="#202a2e" strokeWidth="5" />
      <path d="m340 119 95-23m114-12 38 5c30 4 51 15 72 36" fill="none" stroke="#f6f8f7" strokeWidth="3" opacity=".45" />
      <path d="m238 177 81-58" stroke="#ffd1c9" strokeWidth="3" opacity=".55" />

      {/* body creases, door and signature side intake */}
      <path d="m214 196 128-22m136-3-9 99m94-96 5 88m-88-87 92 2" fill="none" stroke="#780c14" strokeWidth="4" opacity=".84" />
      <path d="m275 201 135-25m117 1 113 15" fill="none" stroke="#ff9e96" strokeWidth="3" opacity=".56" />
      <path d="m346 193 111-17-62 35-76 5Z" fill="#101719" stroke="#801018" strokeWidth="4" strokeLinejoin="round" />
      <path d="m498 184 26-1m-26 4 22-1" stroke="#bac2c4" strokeWidth="3" strokeLinecap="round" />
      <path d="m172 214 49-15 31 5-8 12-61 13Z" fill="#141a1d" stroke="#781018" strokeWidth="3" />
      <path d="m308 175 30-21m-111 40 34-10" stroke="#f7b9b0" strokeWidth="3" opacity=".43" />

      {/* fender lips and ground-hugging sill */}
      <path d="M184 276c6-58 34-94 75-94 45 0 74 37 79 94m294 0c6-59 34-96 77-96 46 0 75 38 78 96" fill="none" stroke="#242a2d" strokeWidth="8" />
      <path d="m133 300 69 4m143 2h280m160-7 97-9" fill="none" stroke="#101517" strokeWidth="14" strokeLinecap="round" />
      <path d="m202 303 39 1m397-1 72-2" fill="none" stroke="#8a9396" strokeWidth="3" opacity=".65" />

      {/* low nose, LED headlight, front splitter */}
      <path d="m765 174 79 18c38 9 65 27 83 53l16 24-15 18-70 10-14-48c-10-35-34-57-71-64l-36-6Z" fill="url(#body-red)" stroke="#4a080e" strokeWidth="5" />
      <path d="m826 200 55 17 31 29-80-12Z" fill="#151b1e" stroke="#252d30" strokeWidth="4" />
      <path d="m839 199 39 13 24 23-62-10Z" fill="url(#lamp-white)" />
      <path d="m839 200 37 13 19 17-53-8Z" fill="#fff" />
      <path d="m788 282 127-14-11 20-106 15Z" fill="#101618" stroke="#778184" strokeWidth="3" />
      <path d="m801 290 101-12" stroke="#c6cecf" strokeWidth="3" />
      <path d="m900 254 19 5" stroke="#fff" strokeWidth="5" strokeLinecap="round" />

      {/* fine rear light and lower diffuser details */}
      <path d="m74 229 51-14 18 10-15 18-48 4Z" fill="#181d20" stroke="#30373a" strokeWidth="3" />
      <path d="m79 231 38-10-14 11-22 4Z" fill="#ff535e" />
      <path d="m85 252 66 1-23 18-41-8Z" fill="url(#lower-carbon)" />
      <path d="m109 311 49 1 20-8 39 5m510 1 60-7 28 1" fill="none" stroke="#9da6a8" strokeWidth="3" opacity=".7" />
      <path d="m260 268 120-2m220-2 68-2" stroke="#fff" strokeWidth="2" opacity=".27" />
    </svg>
  );
}
