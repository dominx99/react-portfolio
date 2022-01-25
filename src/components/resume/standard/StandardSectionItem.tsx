import { cloneElement, FC, ReactElement } from "react";

interface Props {
  item: StandardSectionItemType
  endOfSection?: ReactElement,
}

export type StandardSectionItemType = {
  title: string
  subtitle?: string,
  description?: string,
}

const StandardSectionItem: FC<Props> = ({ item, endOfSection = null }) => (
  <section className="mb-4 break-inside-avoid">
    <header>
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 leading-snug">
        { item.title }
      </h3>
      <p className="leading-normal text-md text-gray-500 dark:text-gray-400">
        { item.subtitle }
      </p>
    </header>
    <p
      className={"mt-2 text-md text-gray-700 dark:text-gray-300 leading-normal" + (endOfSection ? ' mb-3' : '')}
    >
      { item.description }
    </p>
    {endOfSection ? cloneElement(endOfSection) : <></>}
  </section>
);

export default StandardSectionItem;
