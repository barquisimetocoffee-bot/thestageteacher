import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import ScrollInFromBothSides from "../animation/ScrollInFromBothSides";

const faqs = [
  {
    question: "How is your platform different from other EdTech tools?",
    answer:
      "Unlike standalone solutions, our platform offers an integrated ecosystem — combining an AI Teacher Tool, Advanced LMS, and School Management System. Everything is seamlessly connected, reducing tool fragmentation, improving efficiency, and lowering costs for institutions.",
  },
  {
    question: "Does your AI replace teachers?",
    answer:
      "Absolutely not. Our AI is designed to assist, not replace educators. It automates time-consuming tasks like lesson planning, grading, and data analysis so teachers can focus on what matters most — engaging with their students.",
  },
  {
    question: "Can your system integrate with tools we already use?",
    answer:
      "Yes. We built the platform with open API architecture, allowing smooth integration with existing LMSs, HR systems, and reporting tools — so you can adopt it without disrupting your current workflow.",
  },
  {
    question: "How much does it cost?",
    answer:
      "We offer flexible pricing based on your institution’s size, needs, and chosen modules. Individual teachers can start with a free version of the AI Teacher Tool, while schools benefit from affordable, scalable licensing packages.",
  },
  {
    question: "Is student data safe with your platform?",
    answer:
      "Yes. We are GDPR-compliant and follow strict international data privacy and security standards, ensuring all student, teacher, and institutional data is encrypted and protected at every stage.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-t from-[#F5F5FF] to-blue-50">
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollInFromBothSides key={index}>
              <div
                key={index}
                className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex justify-between items-center p-4 text-left focus:outline-none hover:bg-gray-50"
                >
                  <span className="text-lg font-medium text-gray-800">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaChevronDown className="text-gray-500" />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 text-gray-600">{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollInFromBothSides>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FAQ;
