import { FC } from "react";
import StandardSection, { StandardSectionType } from "../standard/StandardSection";

interface Props {
  about: StandardSectionType,
}

const AboutSection: FC<Props> = ({ about }) => (
  <StandardSection section={about} />
)

export default AboutSection;
