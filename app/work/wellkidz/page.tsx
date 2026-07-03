import Container from "@/components/Container";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import SectionOnboarding from "@/components/sections/SectionOnboarding";
import SectionHeader from "@/components/sections/SectionHeader";
import SectionImageShowcase from "@/components/sections/SectionImageShowcase";
import SectionOutcome from "@/components/sections/SectionOutcome";
import BannerImage from "next/image";
import ContactSection from "@/components/ContactSection";
import ProjectsSectionCompact from "@/components/ProjectsSectionCompact";

export default function ProjectDetailPage() {
 
  return (
    <Container>
      <SectionOnboarding
        title="Welkidz - Kidz Check & Interface Improvement"
        subtitle="Parents assessing a sick child before a hospital visit often face unclear next steps and rising anxiety, with no guided way to judge urgency before booking care. This project redesigned Wellkidz's Kidz Check feature into a logic-driven triage flow that turns a symptom questionnaire into a clear, prioritized care plan, from home remedies to urgent ER recommendations, and connects that assessment directly to booking and billing."
        stats={[
          { label: "Role", value: "UX/UI Designer" },
          { label: "Timeline", value: "3 months" },
          { label: "Tools", value: ["Figma", "Figjam", "Zoom", "Adobe Illustrator"] },
        ]}
        subtitleBottom="I led the end-to-end design process from stakeholder requirements gathering and severity-tier logic mapping, through high-fidelity UI and a custom illustration system, to usability testing with hospital staff and parents, shipping a triage-to-booking-to-payment flow ready for developer handoff."
      />

      <ContainerScroll>
        <BannerImage
          src="/banner/wellkidz-banner.png"
          alt="Welkidz interface improvement"
          fill
          quality={100}
          className="object-cover rounded-2xl"
        />
      </ContainerScroll>


      <SectionHeader
        headline="Project Brief"
        body={`Faced with a defined product roadmap and a compressed delivery window, the project demanded a focus on High-Fidelity Execution over lengthy discovery. I pivoted to an agile implementation strategy, transforming complex business requirements into a functional, user-centric interface while ensuring design consistency and technical scalability throughout the rapid production cycle.`}
      />    

      <div className="-mt-12">
        <SectionOutcome
          title=""
          blocks={[
            { label: "Developed a Logic-Driven Triage Flow for Rapid Assessments", body: "By translating complex healthcare protocols into an intuitive, step-by-step interaction, I reduced the cognitive load for parents, providing them with clear, prioritized care instructions from home remedies to urgent ER recommendations." },
            { label: "Optimized the Appointment Journey to Convert Results into Action", body: "Redesigned the end-to-end booking experience to eliminate friction. By creating a direct link between 'Symptom Results' and 'Clinician Availability' I streamlined the user journey, ensuring that parents can secure professional help at the exact moment of need, thereby increasing successful appointment completions." },
            { label: "Integrated a Trust-Centered Payment Gateway for Seamless Billing", body: "Integrated a secure, transparent payment infrastructure directly into the user workflow. Focused on Trust-Centered Design, ensuring that medical billing is clear, accessible, and easily manageable, which minimizes post-consultation drop-offs and enhances overall user confidence in the platform." },
            { label: "Revitalized Platform Hierarchy via a Scalable UI Design System", body: "Enhance the platform’s Visual Hierarchy and Information Architecture (IA). I implemented a modular design system to ensure long-term scalability and brand alignment, transforming an outdated entry point into a modern, high-performance dashboard where critical features are accessible within seconds." },

          ]}
        />
      </div>
    
      <SectionHeader
        headline="Requirement Synthesis & Logic Mapping"
        body={`I synthesized complex medical requirements into a logic-driven assessment flow. By categorizing user inputs into three distinct severity tiers, the system eliminates ambiguity for parents—transforming clinical data into immediate, actionable care paths. My focus was on ensuring that even in high-stress scenarios, the 'Next Step' is clear, safe, and instantaneous.`}
      />  

      <SectionImageShowcase 
        src="/wellkidz/wellkidz-image1.png" 
        alt="User Journey"
        caption=""
      />

      {/* Continue here jaaaa */}
      <SectionHeader
        headline="Translating the User Journey into a High-Fidelity Interface"
        body={`I transformed the triage logic into a clean, high-performance UI designed to reduce parental anxiety. By implementing a strict Visual Hierarchy and leveraging the hospital’s Design System, I ensured that the interface feels both authoritative and accessible. Every screen is optimized for clarity, ensuring that critical medical instructions remain the focal point during high-stress interactions.`}
      />    

      <div className="flex flex-col gap-6 py-8">
      <div className="mx-0 md:mx-[10%] flex flex-col lg:flex-row gap-6">
              <SectionImageShowcase
              src="/wellkidz/wellkidz-image2.png"
              alt="mockup1"
              caption=""
              className="mx-0 md:mx-0 py-0 w-full"
              />
              <SectionImageShowcase
              src="/wellkidz/wellkidz-image3.png"
              alt="mockup2"
              caption=""
              className="mx-0 md:mx-0 py-0 w-full"
              />
      </div>

      <div className="mx-0 md:mx-[10%] flex flex-col lg:flex-row gap-6">
              <SectionImageShowcase
              src="/wellkidz/wellkidz-image4.png"
              alt="mockup3"
              caption=""
              className="mx-0 md:mx-0 py-0 w-full"
              />
              <SectionImageShowcase
              src="/wellkidz/wellkidz-image5.png"
              alt="mockup4"
              caption=""
              className="mx-0 md:mx-0 py-0 w-full"
              />
      </div>
      </div>

      <SectionHeader
        headline="Utilizing Illustration for Inclusive & Calming Guidance"
        body={`To bridge the gap between clinical jargon and parental understanding, I developed a custom illustration library. These graphics aren't just decorative; they serve as Visual Semantics to reduce cognitive load. By presenting first-aid procedures through a friendly, branded character, we ensure that the information is accessible and less intimidating for non-medical users during urgent situations.`}
      /> 

      <SectionImageShowcase 
        src="/wellkidz/wellkidz-image6.png" 
        alt="mockup5"
        caption=""
      />

      <SectionHeader
        headline="Validation & Iterative Evolution"
        body={`Post-design, I conducted usability sessions with hospital staff and parents to stress-test the interface logic. This phase was crucial for moving beyond 'safe' design into 'effective' healthcare tools.`}
      /> 

      <div className="-mt-12 mb-20">
        <SectionOutcome
          title=""
          blocks={[
            { label: "Scalability Opportunity", body: "Testing revealed high potential for the system to be adapted into Self-Service Hospital Kiosks, expanding the product’s business value." },
            { label: "Iterative Design Fix", body: "Users requested clearer Color-Coded Severity Indicators. In response, I integrated a traffic-light system (Green/Yellow/Red) to provide instant visual feedback on the child’s condition, significantly speeding up decision-making." },
          ]}
        />
      </div>
    
      <section className="w-full border-t border-[#303030]">
        <ProjectsSectionCompact exclude="wellkidz" />
      </section>
      <section id="contact" className="w-full border-t border-[#303030]">
        <ContactSection compact />
      </section>

    </Container>
  );
}
