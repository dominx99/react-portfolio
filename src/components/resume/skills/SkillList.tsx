import { FC } from "react";
import { StandardSectionItemType } from "../standard/StandardSectionItem";
import SkillSection from "./SkillsSection";

export type SkillsSectionItemType = StandardSectionItemType & {
  items: string[],
}

export type SkillsSectionType = {
  title: string,
  items: SkillsSectionItemType[],
}

interface Props {
  skills: SkillsSectionType,
}

const SkillList: FC<Props> = ({ skills }) => (
  <>
    <SkillSection section={skills} />
  </>
)

export default SkillList;
