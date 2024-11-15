import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { c } from '@/utils/class';

import Login from './Login';
import Register from './Register';

const LoginRegisterPage = () => {
  const [isLoginState, setIsLoginState] = useState(true);

  const updateView = () => {
    setIsLoginState(!isLoginState);
  };

  return (
    <>
      <label>
        <input type="checkbox" onChange={updateView} />
      </label>
      <div
        className={c(
          'w-[400px] h-[400px] border- rounded-lg p-8 absolute top-1/2 left-1/2 translate-1/2',
          isLoginState ? 'bg-[red]' : 'bg-[blue]'
        )}
      >
        <AnimatePresence>
          {isLoginState ? <Login /> : <Register />}
        </AnimatePresence>
      </div>
    </>
  );
};

export default LoginRegisterPage;
