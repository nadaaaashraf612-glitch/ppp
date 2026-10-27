"use client";

import { LanguageProvider } from "../i18n/LanguageContext";
import { Chrome } from "./Chrome";
import { Cover } from "../sections/Cover";
import { About } from "../sections/About";
import { Numbers } from "../sections/Numbers";
import { Vision } from "../sections/Vision";
import { Beliefs } from "../sections/Beliefs";
import { Values } from "../sections/Values";
import { Services } from "../sections/Services";
import { Process } from "../sections/Process";
import { Approach } from "../sections/Approach";
import { Expertise } from "../sections/Expertise";
import { Industries } from "../sections/Industries";
import { Projects } from "../sections/Projects";
import { Stories } from "../sections/Stories";
import { Why } from "../sections/Why";
import { Partner } from "../sections/Partner";
import { Future } from "../sections/Future";
import { Closing } from "../sections/Closing";
import { Contact } from "../sections/Contact";
import { FinalClosing } from "../sections/FinalClosing";
import type { Project as ProjectRow } from "@/data/projects";

function ProfileBody({ projects }: { projects: ProjectRow[] }) {
  return (
    <div className="relative min-h-screen bg-[#fafaf8] font-sans text-black antialiased">
      <Chrome />
      <main>
        <Cover />
        <About />
        <Numbers />
        <Vision />
        <Beliefs />
        <Values />
        <Services />
        <Process />
        <Approach />
        <Expertise />
        <Industries />
        <Projects projects={projects} />
        <Stories />
        <Why />
        <Partner />
        <Future />
        <Closing />
        <Contact />
        <FinalClosing />
      </main>
    </div>
  );
}

export default function Profile({ projects }: { projects: ProjectRow[] }) {
  return (
    <LanguageProvider>
      <ProfileBody projects={projects} />
    </LanguageProvider>
  );
}
