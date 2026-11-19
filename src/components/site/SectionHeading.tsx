import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  sub,
  light = false,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  light?: boolean;
  align?: "center" | "left";
}) {
  return (
    <div className={cn(align === "center" ? "mx-auto text-center" : "text-left", "max-w-2xl")}>
      <span className={cn("eyebrow", light && "eyebrow-light")}>{eyebrow}</span>
      <h2
        className={cn(
          "mt-3 text-3xl font-extrabold md:text-4xl",
          light ? "text-primary-foreground" : "text-navy-deep",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p className={cn("mt-3", light ? "text-primary-foreground/80" : "text-muted-foreground")}>
          {sub}
        </p>
      )}
    </div>
  );
}
