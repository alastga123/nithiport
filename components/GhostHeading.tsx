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
      <span className="block text-ghost select-none">{ghost}</span>
      <span className="absolute left-1 top-1 text-lime">{front}</span>
    </div>
  );
}
