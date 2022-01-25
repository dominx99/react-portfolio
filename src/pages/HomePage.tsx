import { FC, useState } from "react";
import AboutSection from "../components/resume/about/AboutSection";
import ContactSection, { ContactSectionType } from "../components/resume/contact/ContactSection";
import ExperienceList from "../components/resume/experience/ExperienceList";
import Header from "../components/resume/Header";
import LanguagesList from "../components/resume/languages/LanguagesList";
import SkillList, { SkillsSectionType } from "../components/resume/skills/SkillList";
import { StandardSectionType } from "../components/resume/standard/StandardSection";
import { baseResume } from "../resources/resume";

interface Props {};

export type ResumeType = {
  about: StandardSectionType,
  experience: StandardSectionType,
  languages: StandardSectionType,
  skills: SkillsSectionType,
  contact: ContactSectionType,
}

const HomePage: FC<Props> = () => {
  const [resume] = useState<ResumeType>(baseResume);

  return (
    <div className="bg-white dark:bg-slate-800 text-gray-800 min-h-screen print:bg-white">
      <main className="print:py-6 p-6 mx-auto max-w-2xl print:max-w-5xl md:max-w-5xl xsm:p-8 sm:p-9 md:p-16">
        <Header />
        <article className="md:columns-2 print:columns-2 gap-8">
          <AboutSection about={resume.about} />
          <ExperienceList experience={resume.experience} />
          <SkillList skills={resume.skills} />
          <LanguagesList section={resume.languages} />
          <ContactSection contact={resume.contact} />
        </article>
      </main>
    </div>
  )
}

export default HomePage;
