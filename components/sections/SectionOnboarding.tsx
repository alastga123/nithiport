import Chip from "./Chip";

interface StatItem {
  label: string;
  value: string | string[]; // 🎯 ใส่เพิ่มตรงนี้เลยครับ เพื่อบอกว่ารับอาเรย์ได้แล้วนะ
}

interface OnboardingProps {
  title: string;
  subtitle: string;
  stats: StatItem[];
  subtitleBottom?: string;
}

export default function SectionOnboarding({ title, subtitle, stats, subtitleBottom }: OnboardingProps) {
  return (
    <section data-section="onboarding" className="animate-fade-in-left flex flex-col gap-6 py-16 mt-40 mx-0 md:mx-[10%] items-center">
      <h1 className="font-display text-4xl font-semibold text-white text-center">{title}</h1>
      <p className="text-xl text-center font-thin text-body text-[#C9C9C9]">{subtitle}</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {stats.map((item, idx) => (
        <Chip key={idx} label={item.label} value={item.value} />
        ))}
      </div>
      {subtitleBottom && <p className="text-xl text-center font-thin text-body text-[#C9C9C9]">{subtitleBottom}</p>}
    </section>
  );
}
