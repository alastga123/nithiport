import GhostHeading from "@/components/GhostHeading";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen px-6 md:px-12">
      <div className="absolute left-6 right-6 top-[55%] -translate-y-1/2 md:left-12 md:right-12">
        <GhostHeading
          ghost="SAWASDEE, I'M"
          className="text-[clamp(1.5rem,5vw,3rem)]"
          front={
            <>
              <span className="block text-[clamp(2.5rem,9vw,7rem)]">NITHIPAT</span>
              <span className="block text-[clamp(3rem,11vw,9rem)]">LERTSOPAPHAN</span>
            </>
          }
        />

        <div className="mt-8 max-w-xl">
          <p className="text-lg text-white">UX/UI Designer at LivingInsider,</p>
          <p className="mt-2 text-body">
            crafting sharp, expressive digital experiences that blend research-driven
            decisions with bold visual energy.
          </p>
        </div>
      </div>
    </section>
  );
}
