

import { useTranslation } from "react-i18next";
import { Sparkles } from "lucide-react";

import { Facebook, Twitter, Youtube } from "lucide-react";


const Footer = () => {
  const { t } = useTranslation();
  return (

    <footer className="bg-[#2901b3] text-white grid grid-cols-1 md:grid-cols-3 gap-8 py-12 px-4 sm:px-6 lg:px-8">
      {/* Footer Content */}
      <div>
        <img
          src="/logos/brand-light.svg"
          alt="Footer Logo"
          className="w-32 mb-4"
        />
        <p className="text-gray-200 mb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
          recusandae asperiores beatae aut delectus commodi sint deleniti magni
          enim reiciendis sunt, vero provident labore facere tenetur nam iste
          cum, inventore repellendus assumenda temporibus consequatur quia
          cupiditate! Iusto quasi porro itaque?
        </p>
        <h1 className="text-2xl font-semibold text-white block text-center md:text-start">
          Follow us
        </h1>

        <div className="flex items-center justify-center md:justify-start space-x-4 pt-2">
          {[
            { name: "twitter", href: "#" },
            {
              name: "youtube",
              href: "#",
            },
            { name: "facebook", href: "#" },
          ].map((a) => (
            <a
              href={a.href}
              className="border border-gray-200 rounded-full p-2 hover:bg-white hover:text-[#2901b3] transition-all duration-200"
            >
              {a.name.startsWith("twi") && <Twitter />}
              {a.name.startsWith("yout") && <Youtube />}
              {a.name.startsWith("fac") && <Facebook />}
            </a>
          ))}
        </div>
      </div>
      <div className="flex justify-between px-12 md:px-0 border border-emerald-300">
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
