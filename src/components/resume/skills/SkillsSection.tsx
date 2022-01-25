import { FC } from "react";
import SectionTitle from "../standard/SectionTitle";
import StandardSectionItem from "../standard/StandardSectionItem";
import SkillBadges from "./SkillBadges";
import { SkillsSectionType } from "./SkillList";

interface Props {
  section: SkillsSectionType,
}

const SkillSection: FC<Props> = ({ section }) => (
  <section className="mt-8 first:mt-0">
    <SectionTitle title={section.title} />

    {(section.items || []).map(item => (
      <>
        <StandardSectionItem
          item={item}
          endOfSection={<SkillBadges items={item.items} />}
        />
      </>
    ))}
  </section>
)

export default SkillSection;
