import { Link } from "react-router-dom";
import Container from "../container/Container";
import enamad from "../../assets/enamad.png";

import telegram from "../../assets/icons8-telegram-app-48.png";
import instagram from "../../assets/icons8-instagram-48.png";
import x from "../../assets/x.png";
import facebook from "../../assets/icons8-facebook-48.png";

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: "#212529" }}
      className="mt-10 p-6 text-white"
    >
      <Container>
        <div
          dir="rtl"
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          <div>
            <h2 className="font-bold text-lg">خدمات مشتریان</h2>

            <ul className="mt-2">
              <li className="pt-3">
                <Link to="/">ثبت نام</Link>
              </li>

              <li className="pt-3">
                <Link to="/">حساب کاربری من</Link>
              </li>

              <li className="pt-3">
                <Link to="/">سوالات متداول</Link>
              </li>

              <li className="pt-3">
                <Link to="/">شرایط و قوانین</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg">ارتباط با ما</h2>

            <ul className="mt-2">
              <li className="pt-3">
                <Link to="/">درباره ما</Link>
              </li>

              <li className="pt-3">
                <Link to="/">شرایط بازگرداندن کالا</Link>
              </li>

              <li className="pt-3">
                <Link to="/">شرایط استخدام</Link>
              </li>

              <li className="pt-3">
                <Link to="/">تماس با ما</Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg">اطلاعات تماس</h2>

            <h5 className="mt-4">آدرس انبار مرکزی:</h5>

            <p className="mt-2 leading-7 text-gray-300">
              تهران، ولیعصر، کوی نور
            </p>

            <h5 className="mt-6">تلفن‌های پشتیبانی:</h5>

            <div className="mt-2 space-y-2">
              <p>****۰۹۳۰۹۸۱</p>
              <p>****۰۹۳۵۷۸۱</p>
            </div>
          </div>

          <div>
            <a href="https://enamad.ir/">
              <img
                className="h-32 w-32 rounded-xl object-cover"
                src={enamad}
                alt="نماد اعتماد"
              />
            </a>

            <div className="mt-5 flex items-center gap-3">
              <a href="/">
                <img className="h-10 w-10" src={instagram} alt="Instagram" />
              </a>

              <a href="/">
                <img className="h-10 w-10" src={telegram} alt="Telegram" />
              </a>

              <a href="/">
                <img className="h-10 w-10" src={x} alt="X" />
              </a>

              <a href="/">
                <img className="h-10 w-10" src={facebook} alt="Facebook" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
