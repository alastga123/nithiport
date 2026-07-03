import Container from "@/components/Container";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import SectionOnboarding from "@/components/sections/SectionOnboarding";
import BannerImage from "next/image";
import ContactSection from "@/components/ContactSection";
import ProjectsSectionCompact from "@/components/ProjectsSectionCompact";

export default function ProjectDetailPage() {
 
  return (
    <Container>
      <SectionOnboarding
        title="LivingInsider - Design System"
        subtitle="LivingInsider lacked a shared design foundation, leaving each designer to build their own components and color styles. This created inconsistency across products and left no clear source of truth, making revisions costly and component versioning unmanageable. This project rebuilt the system with principled token architecture, structured component naming, and full documentation, now adopted across 4 products by 4 designers and 2 dev teams on web, iOS, and Android."
        stats={[
          { label: "Role", value: "UX/UI Designer" },
          { label: "Timeline", value: "6 weeks" },
          { label: "Tools", value: ["Figma", "Figjam", "Jira"] },
        ]}
        subtitleBottom="I contributed to component design and token preparation for Button's Variants, Pagination, Badge, and Bottom Sheet, and documented 10+ components across the system as part of the shared documentation queue."
      />

      <ContainerScroll>
        <BannerImage
          src="/banner/design-system-banner.png"
          alt="Design System"
          fill
          quality={100}
          className="object-cover rounded-2xl "
        />
      </ContainerScroll>
    
      <section className="w-full border-t border-[#303030]">
        <ProjectsSectionCompact exclude="design-system" />
      </section>
      <section id="contact" className="w-full border-t border-[#303030]">
        <ContactSection compact />
      </section>

    </Container>
  );
}
