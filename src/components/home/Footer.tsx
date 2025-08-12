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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="">
              <img
                src="/logos/brand-light.svg"
                alt="Footer Logo"
                className="h-12"
              />
            </div>
            <p className="text-sm text-gray-100">
              Vicerta is revolutionizing the future of education with a powerful
              suite of AI-driven solutions, seamlessly transforming the way we
              teach, learn, and manage institutions. By integrating innovation
              with accessibility, we empower educators, students, and
              administrators to achieve more than ever before.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", link: "/" },
                { name: "Primary School", link: "/solutions/primary-schools" },
                {
                  name: "Secondary School",
                  link: "/solutions/secondary-schools",
                },
                { name: "University", link: "/solutions/universities" },
                { name: "About", link: "#" },
                { name: "Contact", link: "/contact" },
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

          {/* Popular */}
          <div>
            <h3 className="font-semibold text-white mb-4">Popular Tools</h3>
            <ul className="space-y-2 text-sm">
              {[
                "Quiz Creator",
                "AI Text Detector",
                "Lesson Plan Generator",
                "Presentation Generator",
                "Student Grouping Tool",
              ].map((tool) => (
                <li key={tool}>
                  <p className="text-gray-200 text-sm hover:text-white transition-colors duration-200">
                    {tool}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/share/196DREtSkM/?mibextid=wwXIfr"
                className="text-gray-200 hover:scale-105 hover:text-white transition-all duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/vicerta/"
                className="text-gray-200 hover:scale-105 hover:text-white transition-all duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/getvicerta?igsh=MTAydTBlMzU4cjFxcw=="
                className="text-gray-200 hover:scale-105 hover:text-white transition-all duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com/@vicerta?si=2ZgigIb4rlfOd_IN"
                className="text-gray-200 hover:scale-105 hover:text-white transition-all duration-200"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
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
