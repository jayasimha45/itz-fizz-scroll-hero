import { useId } from "react";

const silhouette = "M71 144 94 127 153 132 168 153 161 169C181 161 203 153 229 151L309 141C336 137 362 137 384 138 419 134 455 142 481 151L516 168 553 185C566 182 581 183 595 190L645 202C677 211 700 234 710 257L720 276 710 284 651 288C646 304 628 314 606 314 579 314 559 294 555 271H256C252 295 234 314 211 314 186 314 165 296 160 273L132 269 105 258 92 246 95 217 97 188 101 174Z";

export function CarVisual() {
  const clipId = `car-shape-${useId().replace(/:/g, "")}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <svg className="car-art" viewBox="0 0 768 432" role="img" aria-labelledby="car-title" focusable="false">
      <title id="car-title">Red sports car, ready for the open road</title>
      <defs>
        <clipPath id={clipId} clipPathUnits="userSpaceOnUse">
          <path d={silhouette} />
        </clipPath>
      </defs>
      <image
        href={`${basePath}/images/itz-fizz-car.png`}
        width="768"
        height="432"
        preserveAspectRatio="none"
        clipPath={`url(#${clipId})`}
      />
    </svg>
  );
}
