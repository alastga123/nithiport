import Container from "@/components/Container";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import SectionOnboarding from "@/components/sections/SectionOnboarding";
import SectionHeader from "@/components/sections/SectionHeader";
import SectionParagraph from "@/components/sections/SectionParagraph";
import SectionImageShowcase from "@/components/sections/SectionImageShowcase";
import SectionOutcome from "@/components/sections/SectionOutcome";
import BannerImage from "next/image";
import SectionDisplaytext from "@/components/sections/SectionDisplaytext";
import ContactSection from "@/components/ContactSection";
import ProjectsSectionCompact from "@/components/ProjectsSectionCompact";

export default function ProjectDetailPage() {
 
  return (
    <Container>
      <SectionOnboarding
        title="Livinginsider - Public Profile"
        subtitle="LivingInsider's agent profiles lacked the credibility signals buyers needed to feel confident reaching out. This project redesigned the existing agent profile into a verified, trust-building presence Public Profile on the platform and extended that credibility system into new touchpoints including an Agent Recommend feature and a redesigned listing card."
        stats={[
          { label: "Role", value: "UX/UI Designer" },
          { label: "Timeline", value: "3 months" },
          { label: "Tools", value: ["Figma", "Figjam", "Jira"] },
        ]}
        subtitleBottom="I owned the end-to-end design process from scoping the core profile redesign with the CEO and PO through collaborating with the dev team, and shipped an MVP covering the Public Profile redesign, the Agent Recommend feature, and an updated listing card."
      />

      <ContainerScroll>
        <BannerImage
          src="/banner/public-profile-banner.png"
          alt="Public Profile redesign"
          fill
          quality={100}
          className="object-cover rounded-2xl"
        />
      </ContainerScroll>

      <SectionHeader
        headline="Agents were invisible to buyers who needed to trust them"
        body={`Over the past year, real estate agents on LivingInsider reported a consistent decline in listing views and buyer contact, though specific figures are withheld per NDA. From the buyer side, users searching for properties found that many listings lacked sufficient agent information to feel confident reaching out, making agents appear unreliable or unverifiable.

              The root cause traced back to the existing agent profile: originally built as an internal directory rather than a buyer-facing trust tool, it lacked the signals buyers needed at the point of decision, including verified credentials, track record, and agency affiliation. This gap created a vicious cycle where low-trust profiles led to hesitant buyers, fewer deals, and ultimately disengaged agents, threatening the health of the entire platform ecosystem.`}
      />    

      <SectionDisplaytext
        display="low-trust profiles  →  hesitant buyers  →  fewer deals  →  disengaged agents"
      />

      <SectionParagraph
        lead=""
        body="The goal was to increase buyer confidence at the point of agent discovery, with success measured by improved contact rate and agent profile engagement, though specific targets are withheld per NDA."
      />

      <SectionHeader
        headline="A profile redesign as the foundation for platform trust"
        body={`The core opportunity was to redesign the existing agent profile into a Public Profile, adding verified information, credibility signals, and a structure that supports both individual agents and corporate agency hierarchies.

              Beyond the profile itself, I extended the redesign into two additional workstreams: Agent Recommend, a listing page feature surfacing agent cards to buyers at the right moment, and a redesigned listing card that integrates Public Profile data to reinforce credibility at the point of property browsing.

              The goal was to increase buyer confidence at the point of agent discovery, with success measured by improved contact rate and agent profile engagement, though specific targets are withheld per NDA.`}
      />

      <SectionHeader
        headline="One credibility system, three touchpoints"
        body={`I structured the solution around a single credibility system with three touchpoints: a redesigned Public Profile as the foundation, extended into Agent Recommend and an updated listing card.`}
      />

      <div className="max-w-2xl mx-auto">
        <SectionImageShowcase src="/public-profile/public-profile-diagram1.svg" alt="One credibility system, three touchpoints diagram" />
      </div>

      <SectionParagraph
        lead="Design Constraints"
        body="I proposed a shared template rather than two separate systems, keeping credibility signals consistent across both user types while reducing long-term maintenance cost. Both profile types require admin verification before going live, completed within one business day."
      />

      <SectionImageShowcase src="/public-profile/public-profile-table.svg" alt="One credibility system, three touchpoints diagram" />

      <SectionParagraph
        lead="Trust Signals Added"
        body={`The existing profile carried only four elements. The redesign introduced a full credibility layer for both individual agents and corporate agencies, visible to buyers at the point of decision.`}
      />   
   
      <SectionImageShowcase src="/public-profile/public-profile-image1.png" alt="Original Element vs. Redesigned Element" />

      <SectionParagraph
        lead="Explore Alternatives: Profile"
        body={`An earlier draft used visually distinct layouts for individual agents and corporate agencies, which made the difference between the two types immediately clear. In practice, this created real cost: it was harder for development to optimize and maintain two separate systems, and harder for profile owners, especially smaller agencies, to prepare and populate content for a more complex layout. The final design moved to a single shared template, trading some visual differentiation for consistency, faster development, and an easier setup experience for agents.`}
      />   

      <div className="max-w-4xl mx-auto flex flex-col gap-[-4]">
        <SectionImageShowcase
        src="/public-profile/public-profile-image2.png"
        alt="old profile"
        caption="Alternative Draft"
        className="mx-0"
        />
        <SectionImageShowcase
        src="/public-profile/public-profile-image3.png"
        alt="new profile"
        caption="Final: Shared template apply to both agents and corporate agencies"
        className="mx-0"
        />
      </div>

      <SectionParagraph
        lead="Explore Alternatives: Agent Card"
        body={`An early version of the agent card surfaced nearly all profile information at once, including ratings, specializations, service areas, and certifications. This made each card feel dense and harder to scan quickly, especially in a grid alongside other agents. The final card was reduced to the highest-signal elements only: verified badge, rating, specialization, and social links, prioritizing scannability over completeness.`}
      />
   
      <div className="max-w-xl mx-auto flex flex-row items-center">
        <div className="max-w-[16rem] mx-auto">
        <SectionImageShowcase
        src="/public-profile/public-profile-image4.png"
        alt="old profile"
        caption="Alternative Draft"
        className="mx-0"
        />
        </div>

        <div className="max-w-[12rem] mx-auto">
        <SectionImageShowcase
        src="/public-profile/public-profile-image5.png"
        alt="new profile"
        caption="Final"
        className="mx-0"
        />
        </div>

      </div>

      <SectionHeader
        headline="Building trust signals buyers could actually see"
        body={`Credibility only works if buyers encounter it at the right moment. These screens trace the journey from first impression to contact decision, showing how Public Profile data surfaces across the platform to reduce hesitation at every step.`}
      />       

      <SectionImageShowcase
        src="/public-profile/public-profile-image6.png"
        alt="profile banner"
        caption="I redesigned the individual agent profile to surface verified credentials and activity signals that buyers need before initiating contact."
      />    

      <SectionImageShowcase
        src="/public-profile/public-profile-image7.png"
        alt="team company"
        caption="The corporate profile shares the same trust foundation as individual agents, with one structural addition: 
                  a Team section that makes the agency's roster visible and browsable."
      />       

      <SectionImageShowcase
        src="/public-profile/public-profile-image8.png"
        alt="agent recommend"
        caption="I designed Agent Recommend to surface relevant agents to buyers at the moment they are already browsing listings
 reducing the gap between property interest and agent contact."
      />    

      <SectionImageShowcase
        src="/public-profile/public-profile-image9.png"
        alt="card compared"
        caption="I updated the listing card to carry agent credibility signals into every property result, so buyers see who they're dealing with before they ever visit a profile."
      />    

      <div className="mb-20">
      <SectionOutcome
        title="What changed after launch"
        blocks={[
          { label: "Outcome", body: "Specific conversion or engagement metrics are still being collected, but one early signal stood out: within the first month of rollout, over 400 accounts took on agent status, including both new users joining as agents and existing users converting from buyer to agent. The mix suggests the credibility system didn't just attract new agents but made the agent role itself feel more worth claiming." },
          { label: "Behavioral signal", body: "A more informal but telling signal: after the redesign surfaced profile images more prominently, agents began updating their photos to more formal, professional headshots, self-correcting toward the credibility standard the design was built to encourage." },
          { label: "What's next", body: "The next phase explores monetization on top of the credibility system: a premium tier that lets agents prioritize their card placement, and a paid 'local guru' placement at the bottom of property detail pages, where a relevant agent's profile and related listings surface directly in context." },
        ]}
      />
      </div>

      <section className="w-full border-t border-[#303030]">
        <ProjectsSectionCompact exclude="public-profile" />
      </section>
      <section id="contact" className="w-full border-t border-[#303030]">
        <ContactSection compact />
      </section>

    </Container>
  );
}
