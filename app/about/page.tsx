import GhostHeading from "@/components/GhostHeading";

const skills = [
  "Figma",
  "UX Research",
  "Wireframing",
  "Prototyping",
  "Design Systems",
  "User Testing",
];

const timeline = [
  { year: "2024", role: "UX/UI Designer", company: "LivingInsider", description: "Leading design for the property marketplace platform." },
  { year: "2022", role: "Product Designer", company: "Freelance", description: "Designed mobile and web products for early-stage startups." },
  { year: "2020", role: "Junior Designer", company: "Design Agency", description: "Started career working on branding and digital interfaces." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 pt-32 pb-20 md:px-12">
      <GhostHeading ghost="WHO I AM" front="ABOUT ME" className="text-[clamp(2rem,7vw,5rem)]" />

      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <div>
          <div className="aspect-square w-full max-w-sm bg-ghost" />
          <h2 className="mt-4 font-display text-2xl font-bold text-white">Nithipat Lertsopaphan</h2>
          <p className="text-body">UX/UI Designer</p>
        </div>

        <div>
          <p className="text-body">
            I&apos;m a UX/UI designer based in Thailand, currently shaping product experiences at
            LivingInsider. I care about research-backed decisions, sharp visual systems, and
            interfaces that feel alive. Outside of work, I&apos;m drawn to Thai design culture and
            how bold, expressive aesthetics can coexist with usability. I enjoy turning
            ambiguous problems into clear, testable design solutions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-lime px-4 py-1 text-sm text-lime transition-colors hover:bg-lime hover:text-black"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-12 flex flex-col gap-6">
            {timeline.map((item) => (
              <div key={item.year} className="border-l-2 border-ghost pl-4">
                <p className="font-display font-bold text-lime">{item.year}</p>
                <p className="text-white">
                  {item.role} — {item.company}
                </p>
                <p className="text-body">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
