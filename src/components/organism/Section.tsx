import cx from 'classnames';
import { ContentRender, contentRenderProps } from '../utils/ContentRender';

export interface ContentData extends contentRenderProps {}

interface SectionProps {
  intro?: boolean;
  sectionTitle?: string;
  cols?: 'oneCol' | 'twoCol';
  content?: ContentData[];
  children?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({
  intro = false,
  sectionTitle,
  cols = 'oneCol',
  content,
  children,
}) => {
  const componentClassName = cx('c-section flex flex-col gap-y-3', [
    { 'text-2xl mb-12': intro, 'text-xl mb-8 last:mb-0': intro === false },
  ]);

  const sectionTitleClassName = cx([
    { 'text-6xl': intro, 'text-2xl': intro === false },
  ]);

  const colsClassName = cx('grid gap-3', [
    { 'grid-cols-1': cols === 'oneCol', 'grid-cols-2': cols === 'twoCol' },
  ]);

  return (
    <section className={componentClassName}>
      {sectionTitle && (
        <>
          {intro === true ? (
            <h1 className={sectionTitleClassName}>{sectionTitle}</h1>
          ) : (
            <h2 className={sectionTitleClassName}>{sectionTitle}</h2>

        </>
      )}
      <div className={colsClassName}>
        {children && children}
        {content &&
          content.map((item, index) => (
            <ContentRender
              key={index}
              text={item.text}
              src={item.src}
              altText={item.altText}
              caption={item.caption}
            />
          ))}
      </div>
    </section>
  );
};
