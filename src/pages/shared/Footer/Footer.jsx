/** @format */
import { FaFacebook, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <p className="text-xl ">Meet The Developer</p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4 text-2xl">
          <a
            href="https://www.facebook.com/shajib.hossain.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>

          <a
            href="http://wa.me/+8801786072025"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>

          <a
            href="https://github.com/Shajib-Dv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/sojeebhossain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Chuadanga Govt. College</p>
      </div>
    </footer>
  );
};

export default Footer;
