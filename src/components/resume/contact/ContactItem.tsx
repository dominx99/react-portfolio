import { FC } from "react";

export type ContactItemType = {
  title: string,
  link?: string,
}

interface Props {
  item: ContactItemType,
}

const ContactItem: FC<Props> = ({ item }) => (
  <li className="mt-2 leading-normal dark:text-gray-300 text-gray-700 text-md">
    {item.link ? (
      <a href={item.link} target="_blank">
        {item.title}&nbsp;
        <span className="text-gray-700 dark:text-gray-300 fas fa-location-arrow"></span>
      </a>
    ) : (
      <>
        {item.title}
      </>
    )}
  </li>
)

export default ContactItem;
