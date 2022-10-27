import React from "react";
import { Link } from "react-router-dom";
import { FaBeer, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-base-300 text-primary-content">
        <div>
          <p className="font-bold">
            Finding Knowledge Place <br />
            sabikonnahar.sr@gmail.com
          </p>
          <p>Copyright © 2022 - All right reserved</p>
        </div>
        <div>
          <Link class="fs-2 mx-3 flex justify-center  gap-5 items-center">
            <p className="text-2xl">
              {" "}
              <a href="https://twitter.com/mahima30333398?t=dgiXUV1V4Ksf0qs53MU1cQ&s=07& fbclid=IwAR3LhhG2EvEPK8Xoe_NC0MFxhRu3zpCF01ZpqjTLPqmf5q5HAC-naPh5Z9g">
                <FaFacebook></FaFacebook>
              </a>
            </p>
            <p className="text-3xl">
              <a href="https://youtu.be/Zv1c1ldMy6g?list=RDZv1c1ldMy6g">
                <FaYoutube></FaYoutube>
              </a>
            </p>

            <p className="text-2xl">
              <a href="https://www.linkedin.com/signup/cold-join?session_redirect=https%3A%2F%2Fwww%2Elinkedin%2Ecom%2Fpublic-profile%2Fsettings%3Ffbclid%3DIwAR0VfLffViXsqfcrMohp0dxrU38xmk3V7tFaEUohnc7-f-ZpXxSURrhNEkM&trk=login_reg_redirect">
                <FaLinkedin ></FaLinkedin>
              </a>
            </p>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
