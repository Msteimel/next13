import { PaddleAPI as data } from 'data/notes/2023-05-01-Paddle-API.jsx';

export default function PaddleAPI() {
  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">{data.metadata.title}</h1>
      <div>
        {data.content.contentBlocks.map((block, i) => (
          <div key={i} className="section-block mt-6">
            <h2>{block.sectionHeading}</h2>
            {block.subHeading && <h3 key={i}>{block.subHeading}</h3>}
            {block.content.map((content, i) => content.contentSection)}
          </div>
        ))}
      </div>
    </main>
  );
}
