import cx from 'classnames';

export default function Nav() {
  const componentClassName = cx('c-nav', 'flex');

  return (
    <nav className={componentClassName}>
      <ul className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center bg-white">
        <li className="text-6xl font-bold text-blue-800">nav</li>
      </ul>
    </nav>
  );
}
