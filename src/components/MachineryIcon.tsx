import type { ReactNode } from "react";

/**
 * Side-profile line drawings of each machine in the BNR fleet.
 * Drawn on a 64×64 grid with a single stroke weight so the set reads as one
 * consistent family. Colour comes from `currentColor`.
 */
export type MachineryIconName =
  | "excavator"
  | "dumper"
  | "dewatering-pump"
  | "backhoe"
  | "wagon-drill"
  | "explosives-magazine"
  | "blasting-mat"
  | "water-tanker"
  | "seismograph"
  | "dozer"
  | "pile-load-test"
  | "rotary-rig"
  | "rope-saw"
  | "jack-hammer";

const Track = ({ x, y, w }: { x: number; y: number; w: number }) => (
  <>
    <rect x={x} y={y} width={w} height={8} rx={4} />
    <circle cx={x + 4} cy={y + 4} r={1.6} />
    <circle cx={x + w / 2} cy={y + 4} r={1.6} />
    <circle cx={x + w - 4} cy={y + 4} r={1.6} />
  </>
);

const Wheel = ({ cx, cy, r = 5 }: { cx: number; cy: number; r?: number }) => (
  <>
    <circle cx={cx} cy={cy} r={r} />
    <circle cx={cx} cy={cy} r={1.4} />
  </>
);

const ICONS: Record<MachineryIconName, ReactNode> = {
  excavator: (
    <>
      <Track x={6} y={46} w={32} />
      <path d="M9 46v-9h22v9" />
      <path d="M19 37v-9h9v9" />
      <path d="M21 31h5" />
      <path d="M30 34 44 15l12 9" />
      <path d="M56 24l3 9-9 2-2-6z" />
    </>
  ),
  dumper: (
    <>
      <Wheel cx={16} cy={50} />
      <Wheel cx={46} cy={50} />
      <path d="M6 44h52" />
      <path d="M8 40 6 22h32l-2 18z" />
      <path d="M12 27h20M12 33h20" />
      <path d="M41 44V30h9l7 8v6" />
      <path d="M44 33h5l3 4h-8z" />
    </>
  ),
  backhoe: (
    <>
      <Wheel cx={18} cy={50} r={4} />
      <Wheel cx={40} cy={48} r={7} />
      <path d="M13 43h36" />
      <path d="M24 43V25h11v18" />
      <path d="M26 29h7" />
      <path d="M13 43 7 46" />
      <path d="M2 43h7l-1 7H3z" />
      <path d="M48 40 55 24l6 10" />
      <path d="M61 34l-1 6-5-1" />
    </>
  ),
  dozer: (
    <>
      <Track x={16} y={46} w={36} />
      <path d="M20 46V35h28v11" />
      <path d="M31 35V24h12v11" />
      <path d="M34 28h6" />
      <path d="M10 28c-3 8-3 18 0 26h4V28z" />
      <path d="M14 40l6-2" />
      <path d="M52 40l6 4v4" />
    </>
  ),
  "wagon-drill": (
    <>
      <Track x={6} y={46} w={32} />
      <path d="M9 46V36h20v10" />
      <path d="M13 36v-6h9v6" />
      <path d="M33 54 47 8" />
      <path d="M38 54 52 8" />
      <path d="M47 8h5" />
      <path d="M36 44l4 1M39 34l4 1M42 24l4 1M45 15l4 1" />
      <path d="M29 40h6" />
    </>
  ),
  "rotary-rig": (
    <>
      <Track x={4} y={48} w={32} />
      <path d="M7 48V37h24v11" />
      <path d="M11 37v-7h9v7" />
      <rect x={40} y={6} width={7} height={40} rx={1} />
      <path d="M31 40 40 30" />
      <path d="M43.5 46v6" />
      <path d="M39 52l9 2-9 2 9 2" />
      <path d="M40 14h7M40 22h7M40 30h7M40 38h7" />
    </>
  ),
  "jack-hammer": (
    <>
      <path d="M18 8h28" />
      <path d="M18 8v4M46 8v4" />
      <rect x={26} y={10} width={12} height={26} rx={2} />
      <path d="M26 18h12M26 24h12" />
      <path d="M32 36v14" />
      <path d="M29.5 50 32 57l2.5-7" />
      <path d="M38 16c9 0 12 9 7 17-4 7-1 14 11 15" />
      <path d="M8 58h48" />
      <path d="M22 54l-3 4M42 54l3 4" />
    </>
  ),
  "explosives-magazine": (
    <>
      <Wheel cx={17} cy={50} />
      <Wheel cx={47} cy={50} />
      <path d="M5 44h54" />
      <rect x={5} y={18} width={34} height={26} rx={2} />
      <path d="M39 44V30h10l8 8v6" />
      <path d="M42 33h6l4 4H42z" />
      <path d="M22 23l8 8-8 8-8-8z" />
      <path d="M22 28v4" />
      <circle cx={22} cy={34.5} r={0.6} />
    </>
  ),
  "blasting-mat": (
    <>
      <rect x={6} y={42} width={52} height={10} rx={3} />
      <rect x={9} y={30} width={46} height={10} rx={3} />
      <rect x={12} y={18} width={40} height={10} rx={3} />
      <path d="M14 42v10M22 42v10M30 42v10M38 42v10M46 42v10M17 30v10M25 30v10M33 30v10M41 30v10M49 30v10M20 18v10M28 18v10M36 18v10M44 18v10" />
      <path d="M32 8v6M26 10l2 5M38 10l-2 5" />
      <path d="M4 58h56" />
    </>
  ),
  "water-tanker": (
    <>
      <Wheel cx={24} cy={50} />
      <Wheel cx={48} cy={50} />
      <path d="M14 44h44" />
      <rect x={14} y={24} width={28} height={18} rx={9} />
      <path d="M28 24v-4" />
      <path d="M44 44V31h8l6 7v6" />
      <path d="M47 34h4l3 3h-7z" />
      <path d="M12 42H9" />
      <path d="M7 40 2 36M7 43H1M7 46l-5 5" />
      <path d="M3 56c0 1.2 1 2 2 2s2-.8 2-2c0-1.5-2-3.5-2-3.5S3 54.5 3 56z" />
    </>
  ),
  seismograph: (
    <>
      <rect x={4} y={16} width={42} height={30} rx={3} />
      <path d="M18 16v-4h14v4" />
      <rect x={9} y={21} width={32} height={16} rx={1} />
      <path d="M10 30h6l2-5 3 10 3-14 3 12 2-6 2 3h8" />
      <circle cx={13} cy={41.5} r={1.4} />
      <circle cx={19} cy={41.5} r={1.4} />
      <path d="M46 36c7 0 9 6 9 12" />
      <rect x={50} y={48} width={10} height={5} rx={1} />
      <path d="M55 53v7" />
      <path d="M4 60h56" />
    </>
  ),
  "dewatering-pump": (
    <>
      <path d="M6 54h42" />
      <path d="M10 54v-3M44 54v-3" />
      <rect x={8} y={33} width={20} height={18} rx={2} />
      <path d="M13 33v18M18 33v18M23 33v18" />
      <path d="M28 42h3" />
      <circle cx={39} cy={42} r={9} />
      <circle cx={39} cy={42} r={3} />
      <path d="M39 33V20h14" />
      <path d="M48 44c8 0 10 6 10 12" />
      <path d="M56 26c0 2.2 1.3 4 3 4s3-1.8 3-4c0-2.8-3-6-3-6s-3 3.2-3 6z" />
    </>
  ),
  "rope-saw": (
    <>
      <rect x={4} y={22} width={24} height={34} rx={1} />
      <path d="M4 32l8-10M4 44l20-22M10 56l18-22M22 56l6-8" />
      <circle cx={48} cy={36} r={10} />
      <circle cx={48} cy={36} r={2.5} />
      <path d="M48 26 16 33M48 46 16 39" />
      <path d="M16 33v6" />
      <circle cx={38} cy={28.2} r={0.9} />
      <circle cx={30} cy={30} r={0.9} />
      <circle cx={38} cy={43.8} r={0.9} />
      <circle cx={30} cy={42} r={0.9} />
      <path d="M38 52h22M40 56h18" />
      <path d="M44 46v6M52 46v6" />
    </>
  ),
  "pile-load-test": (
    <>
      <rect x={6} y={18} width={52} height={8} rx={1} />
      <path d="M12 26v34M52 26v34" />
      <rect x={26} y={28} width={12} height={10} rx={1} />
      <path d="M29 28v-2M35 28v-2" />
      <rect x={28} y={38} width={8} height={22} />
      <path d="M2 46h24M38 46h24" />
      <path d="M4 50l-2 2M10 50l-2 2M18 50l-2 2M44 50l-2 2M56 50l-2 2" />
      <circle cx={48} cy={36} r={5} />
      <path d="M48 36l2.5-2.5" />
      <path d="M43 36h-5" />
    </>
  ),
};

export function MachineryIcon({
  name,
  size = 64,
  strokeWidth = 2,
  className = "",
}: {
  name: MachineryIconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {ICONS[name]}
    </svg>
  );
}
