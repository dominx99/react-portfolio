import { FC } from 'react';
import SectionTitle from '../standard/SectionTitle';
import ContactItem, { ContactItemType } from './ContactItem';

export type ContactSectionType = {
  title: string;
  items: ContactItemType[];
};

interface Props {
  contact: ContactSectionType;
}

const Contact: FC<Props> = ({ contact }) => (
  <section className="mt-8 first:mt-0">
    <SectionTitle title={contact.title} />
    <ul className="list-inside pr-7">
      {contact.items.map((item) => (
        <ContactItem item={item} />
      ))}
    </ul>
  </section>
);

export default Contact;
