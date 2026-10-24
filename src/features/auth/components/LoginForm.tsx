import Container from "../../../components/layout/Container";
import banner from "../../../assets/images/login/8679_uhd.jpg";
import x from "../../../assets/images/icons/icons8-x-50.png";
import google from "../../../assets/images/icons/icons8-google-48.png";
import github from "../../../assets/images/icons/icons8-github-64.png";
import { useAuthContext } from "../context/AuthContext";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const { handleLogin } = useAuthContext();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setError("");

    const message = await handleLogin(user.username, user.password);

    if (message) {
      setError(message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container>
      <section className="shadow sm:shadow-2xl lg:w-300 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 rounded-l-3xl mt-10">
        <div className="lg:col-span-7 mx-auto justify-center items-center">
          <h1 className="font-bold text-center mt-10 md:mt-30 md:text-4xl sm:text-3xl text-2xl">
            welcome to Ecommerce
          </h1>
          <form
            onSubmit={handleSubmit}
            className="p-20 md:w-100 lg:w-120 border-gray-700"
            action="#"
          >
            <h6 className="mb-5 text-center">
              لطفا اطلاعات خود را بصورت صحیح وارد کنید
            </h6>
            <label className="my-2" htmlFor="email">
              ایمیل:‌{" "}
            </label>
            <input
              onChange={handleChange}
              value={user.username}
              className="w-full my-3 rounded shadow p-2 border-b border-gray-700"
              name="username"
              type="email"
              id="email"
              placeholder="Enter your email"
            />

            <br />

            <label htmlFor="password">پسورد: </label>
            <input
              onChange={handleChange}
              value={user.password}
              className="w-full my-3 rounded shadow p-2 border-b border-gray-700"
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
            />

            <br />

            {error && <p className="mb-4 text-sm text-red-500">{error}</p>}

            <br />
            <button
              type="submit"
              className="my-3 w-full rounded bg-gray-700 text-white py-2"
            >
              ورود
            </button>

            <div className="flex justify-center">
              <a href="https://accounts.google.com/v3/signin/identifier?dsh=S1812573153:1655944654029516&flowEntry=ServiceLogin&flowName=WebLiteSignIn&ifkv=AX3vH39E0iYVTmn-NoMNM_C35EPrno8LWsRx2Qhr0HApkVLZ-Zc_Vql8ouaSQOiXzEmthrpOPAV5">
                <img
                  className="w-8 h-8 mx-1 mt-5 lg:mt-10"
                  src={google}
                  alt=""
                />
              </a>
              <a href="https://github.com/login">
                <img
                  className="w-8 h-8 mx-1 mt-5 lg:mt-10"
                  src={github}
                  alt=""
                />
              </a>
              <a href="https://x.com/twitt_login?lang=en">
                <img className="w-8 h-8 mx-1 mt-5 lg:mt-10" src={x} alt="" />
              </a>
            </div>
          </form>
        </div>
        <div className="lg:col-span-5 hidden md:block mr-auto">
          <img className="h-190 rounded-l-3xl" src={banner} alt="" />
        </div>
      </section>
    </Container>
  );
};

export default LoginForm;
