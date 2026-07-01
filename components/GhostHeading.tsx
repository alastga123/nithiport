export default function GhostHeading({
  ghost,
  front,
  className = "",
}: {
  ghost: string;
  front: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative font-display font-bold uppercase leading-none ${className}`}>
      {/* em-relative offset so it scales with the ghost text's own clamped font-size
        instead of staying fixed while the text shrinks. */}
      <span className="absolute -left-1 -top-[0.45em] block whitespace-nowrap text-ghost select-none -z-10">
        {ghost}
      </span>
      
      <span className="relative block text-lime z-10">
        {front}
      </span>
    </div>
  );
}