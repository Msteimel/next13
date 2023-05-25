import cx from 'classnames';

const reference = [
  {
    link: 'https://developer.paddle.com/api-reference/1384a288aca7a-api-reference',
    text: 'Paddle API',
    description: 'Paddle API official documentation',
  },
];

export default function WhenDoesReactRerender() {
  return (
    <main>
      <h1>How does React Rerender</h1>
      <ul>
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
