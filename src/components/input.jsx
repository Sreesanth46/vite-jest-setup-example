import { useState } from 'react';

const AppInput = () => {
  const [value, setValue] = useState('');

  const handleInput = e => {
    setValue(e.target.value)
  };

  return (
    <>
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white;">
        Name
      </label>
      <input
        type="text"
        value={value}
        onChange={handleInput}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </>
  );
};

export default AppInput;
