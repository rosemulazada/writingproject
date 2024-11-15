import { useState } from 'react';

const LoginRegisterPage = () => {
  console.log('What do u want from me?');

  const [isLoginState, setIsLoginState] = useState(true);

  return (
    <>
      {isLoginState ? (
        <div className="bg-[#e3b2b5] w-[400px] h-[400px] absolute top-1/2 left-1/2 -translate-1/2 p-8">
          <h2>Login</h2>
          <form className="flex flex-col">
            <label className="flex flex-col pt-4">
              Username or email
              <input type="text" />
            </label>
            <label className="flex flex-col pt-4">
              Password
              <input type="password" />
            </label>

            <input type="submit" className="bg-white m-4 max-w-content" />
          </form>
        </div>
      ) : (
        <div className="w-[40vw] bg-white color-black">
          <h2>Register</h2>
          <form>
            <label>
              <input type="text" />
              Username or email
            </label>
            <label>
              <input type="password" />
              Password
            </label>

            <input type="submit" />
          </form>
        </div>
      )}
    </>
  );
};

export default LoginRegisterPage;
