"use client";

import { motion } from "framer-motion";
import GhostHeading from "@/components/GhostHeading";
import ContactSection from "@/components/ContactSection";
import Container from "@/components/Container";

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
    <main>
    <section className="md:h-screen overflow-hidden flex flex-col justify-center py-32 md:py-0">
      <Container>
      
      <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <GhostHeading ghost="WHO I AM" front="ABOUT ME" className="text-[clamp(2rem,7vw,5rem)]" />

        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >

          <p className="text-body py-4">
            I'm a UX/UI designer, based in Bangkok, Thailand. 
            Passion in bridging business strategy, engineering, and commercial teams to deliver logic-driven product design
          </p>

          <p className="text-body py-4">
           Currently, I'm working in PropTech industry, designing digital experiences for property marketplace platform and aligning stakeholder expectations.
          </p>

          <p className="text-body py-4">
          My inspiration of drawing and design led me to pursue a bachelor's degree in architecture, and I discovered my interest in Product design, drawn by the idea of creating intuitive and user-centered digital experiences
          </p>

          <p className="text-body py-4">
            Whenever I have some free time, 
            I usually checking out music podcasts , stories, or biographies. 
            Sometimes I'll doodle or mess around with my guitar & bass. Even though it might seem like I'm always indoors, 
            I actually love photography and hanging out with friends, especially for some badminton and a beer.
          </p>

        </motion.div>
      </div>
      </Container>
    </section>
    <ContactSection compact />
    </main>
  );
}
