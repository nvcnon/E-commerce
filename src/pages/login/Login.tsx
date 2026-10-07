import React, { useState } from "react";
import { useAuthenticateContext } from "../../context/authenticateContext";

const Login = () => {
  const { handleLogin } = useAuthenticateContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleLogin(user.username, user.password);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };




  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div
            style={{ boxShadow: "1px 1px 1px #343A40" }}
            className="w-full bg-white rounded-br-2xl shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-right text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                وارد حساب کاربری خود شوید
              </h1>
              <form onSubmit={handleSubmit} className="text-right space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    ایمیل
                  </label>
                  <input
                    onChange={handleChange}
                    name="username"
                    value={user.username}
                    type="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    رمز عیور
                  </label>
                  <input
                    onChange={handleChange}
                    name="password"
                    value={user.password}
                    type="password"                                                                                                                                                         
                    id="password"
                    placeholder="Password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                         به خاطر بسپار
                      </label>
                    </div>                                                                                                                                    
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    رمز عبور را فراموش کرده‌اید؟
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  ورود
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
