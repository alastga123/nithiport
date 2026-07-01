import Container from "@/components/Container";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import SectionOnboarding from "@/components/sections/SectionOnboarding";
import SectionHeader from "@/components/sections/SectionHeader";
import SectionImageShowcase from "@/components/sections/SectionImageShowcase";
import SectionOutcome from "@/components/sections/SectionOutcome";
import BannerImage from "next/image";
import ContactSection from "@/components/ContactSection";

export default function ProjectDetailPage() {
 
  return (
    <Container>
      <SectionOnboarding
        title="CarbonWealth - End-to-End Management Platform for Forestry Carbon Credit "
        subtitle="CarbonWealth's certification workflow relied on paper-based field data and manual document handling, creating bottlenecks, validation errors, and transparency gaps that undermined the credibility of every carbon credit issued. This project redesigned the end-to-end traceability process into a synchronized digital platform, extending that credibility system across field capture, government validation, and landowner oversight."
        stats={[
          { label: "Role", value: "UX/UI Designer" },
          { label: "Timeline", value: "5 months" },
          { label: "Tools", value: ["Figma", "Figjam", "Zoom", "Adobe Illustrator"] },
        ]}
        subtitleBottom="I owned the end-to-end design process from stakeholder interviews and data gathering with field officers, landowners, and the DMCR, through requirements definition and platform design, shipping an MVP covering digital field capture, automated validation logic, and a real-time compliance dashboard."
      />

      <ContainerScroll>
        <BannerImage
          src="/banner/carbonwealth-banner.png"
          alt="CarbonWealth traceability platform"
          fill
          quality={100}
          className="object-cover rounded-2xl"
        />
      </ContainerScroll>


      <SectionHeader
        headline="Challenge"
        body={`Carbon Wealth conducted interviews to understand the workflow from start to finish for all three groups, gaining valuable insights and discovered that each group faced challenges in executing the projects, whether it involved issues with the project structure or conflicts between the groups themselves.`}
      />    

      <div className="-mt-12">
        <SectionOutcome
          title=""
          blocks={[
            { label: "Manual Data Collection Causes Bottlenecks", body: "The reliance on paper-based data collection at the planting site creates a massive disconnect. Field laborers capture data manually, which Office Admins then struggle to transcribe and verify without visual context, leading to high internal rework." },
            { label: "Document Errors Stall Certification", body: "Without real-time synchronization, documents enter a Double Manual Validation cycle. Errors found by POs or DMCR require weeks to rectify as they must flow back through the Admin to the Field." },
            { label: "No Real-Time Oversight", body: "Project owners lack real-time visibility into site maintenance, resulting in monitoring gaps that decrease the credibility and market value of the carbon credits." },
          ]}
        />
      </div>
    
      <SectionImageShowcase 
        src="/carbonwealth/carbonwealth-image1.png" 
        alt="User Journey"
        caption="From manual paperwork to an automated digital truth: Achieving a 60% faster lifecycle."
       />

      {/* Continue here jaaaa */}
      <SectionHeader
        headline="From Operational Friction to Systemic Efficiency"
        body={`To resolve the deep-seated bottlenecks found in the manual workflow, I re-engineered the process into a synchronized digital ecosystem. The solution is built upon four strategic pillars designed to maximize Data Integrity and Operational Speed.`}
      />    

      <div className="-mt-12">
        <SectionOutcome
          title=""
          blocks={[
            { label: "At-Source Digital Capture", body: "The Approach: Transitioned from paper-based field notes to a Mobile-First Data Entry system with offline capabilities. \n The Impact: Reduced field-to-office reporting time from 3–5 days to 1–2 days. By digitizing data at the source, we eliminated Manual Transcription Errors, ensuring the highest level of data integrity before the information ever leaves the field." },
            { label: "Zero-Lag Handover", body: "The Approach: Implemented a Cloud-Based Synchronization pipeline that replaces physical document delivery and email chains. \n The Impact: Reduced administrative lead time to 0 Days (Instant Transfer). Once a contractor submits their data, it is immediately accessible to both the PO and DMCR, creating a Single Source of Truth for all stakeholders." },
            { label: "Direct Feedback Loop", body: "The Approach: Re-engineered the communication architecture to allow Direct Rejection & Correction paths between the Government (DMCR), the PO, and the Contractors. \n The Impact: Eliminated the Validation Deadlock by bypassing administrative middlemen. Feedback is now targeted and instantaneous, allowing contractors to rectify errors in hours rather than weeks." },
            { label: "Automated Logic Gates (Pre-Validation)", body: "The Approach: Embedded Automated Compliance Checks within the UI, such as GPS geofencing and mandatory Metadata requirements for photos. \n  The Impact: The system acts as a Guardrail, rejecting incorrect data at the point of entry. This significantly increased the First-Time Pass Rate for documents, drastically reducing the review workload for both POs and DMCR officers." },

          ]}
        />
      </div>

      <SectionHeader
        headline="Visualizing the Ecosystem"
        body={`The final execution: Bringing the optimized ecosystem to life. I designed a cohesive suite of digital tools—tailored for both harsh field environments and analytical office settings—to ensure that every step of the carbon credit lifecycle is traceable, verifiable, and efficient.`}
      />

      <SectionImageShowcase 
        src="/carbonwealth/carbonwealth-image2.png" 
        alt="Mockup"
        caption=""
      />      

      <SectionHeader
        headline="Iterative Insights (Usability Testing)"
        body={`Through rigorous internal testing and stakeholder reviews, the product evolved from a functional tool into a strategic asset. I identified critical friction points and pivoted the design to ensure real-world viability:`}
      />    

      <div className="-mt-12">
        <SectionOutcome
          title=""
          blocks={[
            { label: "Financial Trust (The ROI Calculator Pivot)", body: "To mitigate risks from market volatility, I pivoted from a static price dashboard to a Self-Service ROI Calculator. This empowers investors to use their own contractual data, ensuring transparency and trust even without a real-time price API." },
            { label: "Regulatory Safety Net (Dual-Verification)", body: `"To prevent months of rework due to coordinate errors, I implemented a two-step "Lock & Confirm" system. This ensures every data point is verified by both field and office roles before it hits the government audit gate."` },
            { label: "Field-to-Office Optimization", body: "Observations in harsh field environments led to the integration of Metadata Auto-fills (from GPS and photos), reducing manual entry by 60% and drastically lowering cognitive load at the source." },
          ]}
        />
      </div>

      <SectionImageShowcase 
        src="/carbonwealth/carbonwealth-image3.png" 
        alt="Ending Mockup"
        caption=""
      />   

      <SectionHeader
        headline="Scalability & Strategic Future"
        body={`The platform’s architecture is engineered to go beyond government sites and serve as a blueprint for a nationwide carbon credit ecosystem:`}
      />    

      <div className="-mt-12 mb-20">
        <SectionOutcome
          title=""
          blocks={[
            { label: "Modular Expansion", body: "The system is designed to seamlessly scale into private landholdings, allowing for a broader, verifiable carbon credit market." },
            { label: "Estimated Efficiency", body: `"The optimized workflow is projected to accelerate the total certification lifecycle by over 60%, transforming carbon credits from a slow administrative process into a high-speed financial asset."` },
            { label: "Future Vision (Satellite AI)", body: "The roadmap includes integrating High-Resolution Satellite Imagery to automate reforestation monitoring, further enhancing the transparency and market credibility of every credit issued." },
          ]}
        />
      </div>
    
      <section id="contact" className="w-full border-t border-[#303030]">
        <ContactSection compact />
      </section>

    </Container>
  );
}
