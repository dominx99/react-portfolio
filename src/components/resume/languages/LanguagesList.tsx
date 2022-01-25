import { FC } from "react";
import SectionTitle from "../standard/SectionTitle";
import { StandardSectionType } from "../standard/StandardSection";
import StandardSectionItem from "../standard/StandardSectionItem";

interface Props {
  section: StandardSectionType,
}

const LanguagesList: FC<Props> = ({ section }) => (
  <section className="mt-8 first:mt-0">
    <SectionTitle title={section.title} />

    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 print:grid-cols-4">
      {(section.items || []).map(item => (
        <section className="mb-4">
          <header>
            <h3 className="text-lg font-semibold dark:text-gray-300 leading-snug">
              { item.title }
            </h3>
            <p className="leading-normal text-md dark:text-gray-400">
              { item.subtitle }
            </p>
          </header>
        </section>
      ))}
    </div>
  </section>
)

export default LanguagesList;
