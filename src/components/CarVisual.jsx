function Wheel({ x }) {
  return (
    <g className="wheel" transform={`translate(${x} 252)`}>
      <circle r="54" fill="#111315" stroke="#34383a" strokeWidth="4" />
      <circle r="43" fill="#202426" stroke="#8a9090" strokeWidth="2" />
      <circle r="37" fill="#121516" stroke="#5b6263" strokeWidth="2" />
      <g stroke="#9da3a2" strokeWidth="2.2" strokeLinecap="round">
        <path d="M0 -34 0 -11 M20 -27 7 -9 M33 -10 11 -3 M33 11 11 4 M20 28 7 9 M0 34 0 11 M-20 28 -7 9 M-33 11 -11 4 M-33 -10 -11 -3 M-20 -27 -7 -9" />
      </g>
      <circle r="12" fill="#929898" />
      <circle r="5" fill="#303638" />
      <circle cx="0" cy="-20" r="1.5" fill="#dfe2e1" />
      <circle cx="19" cy="-6" r="1.5" fill="#dfe2e1" />
      <circle cx="12" cy="16" r="1.5" fill="#dfe2e1" />
      <circle cx="-12" cy="16" r="1.5" fill="#dfe2e1" />
      <circle cx="-19" cy="-6" r="1.5" fill="#dfe2e1" />
    </g>
  );
}

export default function CarVisual() {
  return (
    <div className="car-wrap relative w-[min(92vw,390px)] sm:w-[440px] md:w-[min(68vw,540px)] lg:w-[min(50vw,650px)]">
      <div className="car-shadow absolute bottom-[-7px] left-[12%] h-5 w-[76%] rounded-[50%] bg-black/20 blur-xl" />
      <svg viewBox="0 0 900 330" role="img" aria-labelledby="car-title" className="relative block w-full overflow-visible drop-shadow-[0_18px_18px_rgba(0,0,0,0.12)]">
        <title id="car-title">Original ITZFIZZ grand touring car illustration</title>
        <defs>
          <linearGradient id="carBody" x1="0" y1="0" x2="0.94" y2="1">
            <stop offset="0" stopColor="#ff746a" />
            <stop offset="0.2" stopColor="#ed2630" />
            <stop offset="0.58" stopColor="#bd111e" />
            <stop offset="1" stopColor="#710a13" />
          </linearGradient>
          <linearGradient id="windowGlass" x1="0" y1="0" x2="0.8" y2="1">
            <stop offset="0" stopColor="#eef3f2" />
            <stop offset="0.16" stopColor="#aab5b6" />
            <stop offset="0.52" stopColor="#566163" />
            <stop offset="1" stopColor="#1a2021" />
          </linearGradient>
          <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f2f3ef" />
            <stop offset="0.5" stopColor="#92999a" />
            <stop offset="1" stopColor="#d1d5d2" />
          </linearGradient>
          <linearGradient id="lamp" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#c9d6d5" />
            <stop offset="0.5" stopColor="#ffffff" />
            <stop offset="1" stopColor="#7d8989" />
          </linearGradient>
          <linearGradient id="lowerBody" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#96101a" />
            <stop offset="1" stopColor="#39080d" />
          </linearGradient>
        </defs>

        <Wheel x={235} />
        <Wheel x={696} />

        <path d="M74 231 C93 209 113 192 145 179 L232 150 C264 141 294 135 323 129 L383 71 C402 53 428 43 462 43 H585 C629 43 661 59 692 97 L733 147 C778 153 820 170 847 196 L870 222 C882 235 877 256 860 265 C843 273 817 273 784 272 L754 262 C745 221 723 198 696 198 C665 198 640 223 637 263 L295 263 C291 222 266 198 235 198 C204 198 179 223 176 263 L103 261 C80 260 65 247 74 231Z" fill="url(#carBody)" stroke="#080a0b" strokeWidth="3" />

        <path d="M271 139 389 77 C405 62 429 54 460 54 H577 C616 54 644 68 669 101 L700 140Z" fill="url(#windowGlass)" stroke="#101516" strokeWidth="5" />
        <path d="M403 64 367 136 H493 V55 H458 C435 55 417 58 403 64Z" fill="#202729" opacity="0.72" />
        <path d="M507 55 V136 H691 L665 103 C641 70 614 55 577 55Z" fill="#1c2426" opacity="0.58" />
        <path d="M499 56 V139" stroke="#aeb7b6" strokeWidth="3" opacity="0.65" />
        <path d="M289 141 382 82" stroke="#ffffff" strokeWidth="2" opacity="0.5" />
        <path d="M520 62 H576 C610 62 635 74 656 102" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.4" />

        <path d="M128 188 225 156 270 151" fill="none" stroke="#ffe3dd" strokeWidth="2" opacity="0.48" />
        <path d="M116 218 C267 192 469 188 646 201 C733 207 801 217 858 237" fill="none" stroke="#aeb4b3" strokeWidth="3" opacity="0.4" />
        <path d="M307 151 340 153 326 213 292 216Z" fill="#080a0b" opacity="0.9" />
        <path d="M520 150 H535 V211 H520Z" fill="#080a0b" opacity="0.88" />
        <path d="M350 224 C422 216 506 218 574 224" fill="none" stroke="#707778" strokeWidth="2" opacity="0.45" />
        <path d="M687 163 C736 160 785 176 817 201 L836 220 H741 C727 197 710 184 687 182Z" fill="#090b0c" opacity="0.72" />
        <path d="M104 218 150 205 143 229 H91Z" fill="#111516" />
        <path d="M82 229 133 220 126 229 84 237Z" fill="url(#lamp)" />
        <path d="M795 190 C824 197 849 213 865 231 L860 238 812 231Z" fill="url(#lamp)" />
        <path d="M735 233 H863" stroke="url(#chrome)" strokeWidth="4" opacity="0.8" />
        <path d="M105 264 C231 274 454 276 626 270" fill="none" stroke="#555d5e" strokeWidth="4" opacity="0.66" />
        <path d="M194 182 C284 163 362 156 451 156" fill="none" stroke="#fff4ef" strokeWidth="2" opacity="0.34" />
        <path d="M151 266 H180 M637 266 H759" stroke="#090b0c" strokeWidth="8" />
      </svg>
    </div>
  );
}
