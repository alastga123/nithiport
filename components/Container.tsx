export default function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1080px] px-10 md:px-4 ${className}`}>
      {children}
    </div>
  );
}
