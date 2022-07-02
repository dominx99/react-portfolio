import { FC, useEffect } from 'react';

interface Props {}

const Header: FC<Props> = () => {
  const handleDarkModeChanged = () => {
    let rootElement = document.querySelector('#root');

    rootElement?.classList.toggle('dark');
  };

  return (
    <header className="flex items-center dark:text-gray-100 mb-8 md:mb-11">
      <h1 className="text-2xl font-semibold text-gray-750 pb-px">
        Dominik Chylo
      </h1>
      <label className="ml-auto flex print:hidden items-center cursor-pointer relative">
        <input
          type="checkbox"
          id="dark-mode-checkbox"
          className="sr-only"
          onChange={handleDarkModeChanged}
          defaultChecked={true}
        />
        <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
      </label>
    </header>
  );
};

export default Header;
