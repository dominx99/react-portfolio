import { FC } from "react";
import SkillBadge from "./SkillBadge";

interface Props {
  items: string[],
}

const SkillBadges: FC<Props> = ({ items }) => (
  <ul className="flex flex-wrap text-md leading-relaxed mr-2 mb-">
    {items.map(item => (
      <SkillBadge item={item} />
    ))}
  </ul>
)

export default SkillBadges;
