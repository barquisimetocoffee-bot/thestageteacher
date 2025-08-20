import { CheckCircle } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

const cardDataCard = ({ index, cardData }) => {
  return (
    <motion.div
      key={index}
      initial={{ y: 80, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
      className={`group rounded-2xl p-6 flex justify-between items-center gap-3 ${
        index % 2 !== 0 ? "flex-row-reverse" : "flex-row"
      }`}
    >
      <div className="w-full md:w-1/2">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="p-3 icon-bg rounded-tr rounded-bl-sm  group-hover:scale-105 transition-transform duration-300 mb-4">
            <cardData.icon className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-lg/6 font-bold">{cardData.title}</h2>
        </div>

        <p className="text-gray-800 text-base/6 pt-1">{cardData.description}</p>

        {
          // cardData List
          cardData.feature && (
            <ul className="mt-4 space-y-2 *:text-gray-600 *:text-sm">
              {cardData.feature.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-600 text-base/6 flex gap-2"
                >
                  <span>
                    <CheckCircle
                      className="inline-block mt-1 text-green-600"
                      size={16}
                    />
                  </span>
                  <p> {item}</p>
                </li>
              ))}
            </ul>
          )
        }
      </div>
      <div>img</div>
    </motion.div>
  );
};

export default cardDataCard;
