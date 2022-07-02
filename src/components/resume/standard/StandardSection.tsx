import { FC } from 'react';
import SkillBadges from '../skills/SkillBadges';
import SectionTitle from './SectionTitle';
import StandardSectionItem, {
  StandardSectionItemType,
} from './StandardSectionItem';

export type StandardSectionType = {
  title: string;
  items: StandardSectionItemType[] | null;
};

interface Props {
  section: StandardSectionType;
}

const StandardSection: FC<Props> = ({ section }) => (
  <section className="mt-8 first:mt-0">
    <SectionTitle title={section.title} />

    {(section.items || []).map((item) => (
      <StandardSectionItem
        item={item}
        endOfSection={<SkillBadges items={item.skills} />}
      />
    ))}
  </section>
);

export default StandardSection;
