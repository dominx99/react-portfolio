import { FC } from "react";

interface Props {
  title: string,
}

const SectionTitle: FC<Props> = ({ title }) => (
  <h2 className="mb-4 font-bold tracking-widest text-sm text-gray-500 print:font-normal uppercase">
    { title }
  </h2>
)

export default SectionTitle;
