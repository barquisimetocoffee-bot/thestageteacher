import { useTranslation } from "react-i18next";
import { Instagram, Linkedin, Sparkles } from "lucide-react";

import { Facebook, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-[#2901b3] text-white flex flex-col md:flex-row justify-between gap-8 py-12 px-4 sm:px-6 lg:px-8">
      {/* Footer Content */}
      <div className="w-full md:w-1/3">
        <img
          src="/logos/brand-light.svg"
          alt="Footer Logo"
          className="w-32 mb-4"
        />
        <p className="text-gray-200 mb-4">
          Vicerta is revolutionizing the future of education with a powerful
          suite of AI-driven solutions, seamlessly transforming the way we
          teach, learn, and manage institutions. By integrating innovation with
          accessibility, we empower educators, students, and administrators to
          achieve more than ever before.
        </p>
        <h1 className="text-2xl font-semibold text-white block text-center md:text-start">
          Follow us
        </h1>

        <div className="flex items-center justify-center md:justify-start space-x-2 pt-2">
          {[
            { name: "twitter", href: "#" },
            {
              name: "linkden",
              href: "https://www.linkedin.com/company/vicerta/",
            },
            {
              name: "instagram",
              href: "https://www.instagram.com/getvicerta?igsh=MTAydTBlMzU4cjFxcw==",
            },
            {
              name: "youtube",
              href: "https://youtube.com/@vicerta?si=2ZgigIb4rlfOd_IN",
            },
            {
              name: "facebook",
              href: "https://www.facebook.com/share/196DREtSkM/?mibextid=wwXIfr",
            },
          ].map((a) => (
            <a
              href={a.href}
              className="border border-gray-200 rounded-full p-1 hover:bg-white hover:text-[#2901b3] transition-all duration-200"
            >
              {a.name.startsWith("twi") && <Twitter size={18} />}
              {a.name.startsWith("yout") && <Youtube size={18} />}
              {a.name.startsWith("fac") && <Facebook size={18} />}
              {a.name.startsWith("inst") && <Instagram size={18} />}
              {a.name.startsWith("link") && <Linkedin size={18} />}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-12 md:px-0 w-1/2">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white block text-center">
            Content
          </h3>
          <div className="flex flex-col items-center space-y-2">
            {[
              { name: "Home", href: "#" },
              { name: "About", href: "#" },
              { name: "Contact", href: "#" },
            ].map((a) => (
              <a href={a.href} className="text-gray-200 hover:text-blue-300">
                {a.name}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white block text-center">
            Content
          </h3>
          <div className="flex flex-col items-center space-y-2">
            {[
              { name: "Home", href: "#" },
              { name: "About", href: "#" },
              { name: "Contact", href: "#" },
            ].map((a) => (
              <a href={a.href} className="text-gray-200 hover:text-blue-300">
                {a.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
