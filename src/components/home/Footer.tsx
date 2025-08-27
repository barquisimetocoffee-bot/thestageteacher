import { Link } from "react-router-dom";
import {
  Wrench,
  Github,
  Twitter,
  Mail,
  Facebook,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2901b3] border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="">
              <img
                src="/logos/brand-light.svg"
                alt="Footer Logo"
                className="h-12"
              />
            </div>

            {/* Social Media Links */}
            <div>
              <h1 className="text-lg font-semibold text-white mb-2">
                Follow Us
              </h1>
              <div className="flex space-x-3">
                <a
                  target="_blank"
                  href="https://www.facebook.com/share/196DREtSkM/?mibextid=wwXIfr"
                  className="text-gray-200 hover:scale-105 hover:text-white transition-all duration-200"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/company/vicerta/"
                  className="text-gray-200 hover:scale-105 hover:text-white transition-all duration-200"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/getvicerta?igsh=MTAydTBlMzU4cjFxcw=="
                  className="text-gray-200 hover:scale-105 hover:text-white transition-all duration-200"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  target="_blank"
                  href="https://youtube.com/@vicerta?si=2ZgigIb4rlfOd_IN"
                  className="text-gray-200 hover:scale-105 hover:text-white transition-all duration-200"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold text-white mb-4">Platform</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Pencil", link: "/pencil" },
                { name: "Advanced AI LMS", link: "//advanced-lms" },
                {
                  name: "School Administration",
                  link: "/school-administration",
                },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-gray-200 hover:scale-105 hover:text-white transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-white mb-4">Solutions</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Primary Schools", link: "/solutions/primary-schools" },
                {
                  name: "Secondary Schools",
                  link: "/solutions/secondary-schools",
                },
                {
                  name: "Independent Schools",
                  link: "/solutions/independent-schools",
                },
                { name: "Universities", link: "/solutions/universities" },
                { name: "Admissions", link: "/solutions/admissions" },
                { name: "General Report", link: "/solutions/general-reports" },
                { name: "HR & Payroll", link: "/solutions/hr-payroll" },
                { name: "Finance", link: "/solutions/finance" },
                { name: "Communication", link: "/solutions/communication" },
              ].map((tool) => (
                <li key={tool.name}>
                  <Link
                    to={tool.link}
                    className="text-gray-200 text-sm hover:text-white transition-colors duration-200"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About us */}
          <div>
            <h3 className="font-semibold text-white mb-4">About Us</h3>
            <ul className="space-y-2 text-sm">
              {[
                {
                  name: "Partner & Integrations",
                  link: "/partners-integrations",
                },
                { name: "Data Protection & GDPR", link: "/" },
                { name: "Contact", link: "/contact-us" },
              ].map((tool) => (
                <li key={tool.name}>
                  <Link
                    to={tool.link}
                    className="text-gray-200 text-sm hover:text-white transition-colors duration-200"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Blog", link: "/blog" },
                { name: "Knowledge Base", link: "/knowledge-base" },
                { name: "Case Studies", link: "/case-studies" },
              ].map((tool) => (
                <li key={tool.name}>
                  <Link
                    to={tool.link}
                    className="text-gray-200 text-sm hover:text-white transition-colors duration-200"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-gray-100">
            © {currentYear} Vicerta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
