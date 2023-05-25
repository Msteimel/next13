import { Section } from '@/components/organism/Section';
import { pageData } from '../../../data/notes/23-05-25-Site-Building-pt-One';
import Link from 'next/link';

const reference = [
  {
    link: 'https://nextjs.org/',
    text: 'Next.js',
    description: `React framework that's all the rage`,
  },
  {
    link: 'https://www.typescriptlang.org/',
    text: 'Typescript',
    description: `Javascript with types, because it's advanced and forcing me to up my game`,
  },
  {
    link: 'https://tailwindcss.com/',
    text: 'Tailwind CSS',
    description: `CSS Utility Class library that I believe can be used in atomic design, and I want to use it to prove it `,
  },
];

export default function Demo() {
  return (
    <main
      className={`flex flex-col max-w-6xl mx-auto w-full flex-1 px-20  pt-8`}>
      <Section sectionTitle={pageData.title} intro={true}>
        <p>{pageData.date}</p>
        {pageData.description}
      </Section>

      {pageData.content.map((item, index) => (
        <Section
          key={index}
          sectionTitle={item[0].sectionTitle}
          cols={item[0].cols?.toString() as 'oneCol' | 'twoCol'}
          content={item}
        />
      ))}

      <p>Resources</p>
      <ul className="flex flex-col gap-3">
        {reference.map((item, i) => (
          <li key={i}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              {item.text}
            </a>
            <p className="text-sm text-gray-500">{item.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
