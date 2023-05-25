import Image from 'next/image';

export interface contentRenderProps {
  text?: React.ReactNode | string;
  src?: string;
  altText?: string;
  caption?: string | undefined;
}

export const ContentRender: React.FC<contentRenderProps> = ({
  text,
  src,
  altText,
  caption,
}) => {
  return (
    <>
      {text && (typeof text === 'string' ? <p>{text}</p> : <>{text}</>)}
      {src && (
        <figure className="mx-auto">
          <Image src={src} alt={`${altText}`} width={900} height={400} />
          {caption && (
            <figcaption className="text-sm text-center">{caption}</figcaption>
          )}
        </figure>
      )}
    </>
  );
};
