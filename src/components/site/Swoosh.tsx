import { cn } from "@/lib/utils";

/** Curved navy band edge with an orange accent stroke, as in the brand artwork. */
export function Swoosh({
  className,
  flip = false,
  fillClass = "fill-navy-deep",
}: {
  className?: string;
  flip?: boolean;
  fillClass?: string;
}) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={cn("block h-12 w-full md:h-20", flip && "rotate-180", className)}
    >
      <path d="M0 90 L0 55 C 360 0, 900 110, 1440 20 L1440 90 Z" className={fillClass} />
      <path
        d="M0 55 C 360 0, 900 110, 1440 20"
        className="fill-none stroke-orange"
        strokeWidth="6"
      />
    </svg>
  );
}
