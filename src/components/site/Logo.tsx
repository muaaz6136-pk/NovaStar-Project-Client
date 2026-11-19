import logoSrc from "@/assets/novastar-logo.jpg";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoSrc}
      alt="Nova Star Digitizing"
      width={1607}
      height={641}
      className={cn("h-14 w-auto object-contain", className)}
    />
  );
}
