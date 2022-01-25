import { FC } from "react";
import StandardSection, { StandardSectionType } from "../standard/StandardSection";

interface Props {
  experience: StandardSectionType,
}

const ExperienceList: FC<Props> = ({ experience }) => (
  <StandardSection section={experience} />
)

export default ExperienceList;
