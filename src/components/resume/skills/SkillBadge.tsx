import { FC } from "react";

interface Props {
  item: string,
}

const SkillBadge: FC<Props> = ({ item }) => (
  <li className="
    px-2 mr-2 mb-3 print:px-0 print:mr-4
    text-base text-gray-200 dark:text-gray-300 leading-relaxed print:text-gray-600
    bg-gray-600 print:bg-white
    rounded
  ">
    { item }
  </li>
)

export default SkillBadge;
