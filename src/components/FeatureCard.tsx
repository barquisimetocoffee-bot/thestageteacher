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
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% is visible
      className={`group rounded-2xl p-6 flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-12 ${
        index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-1/2">
        <div className="flex items-center space-x-3">
          <div className="p-3 icon-bg rounded-tr rounded-bl-sm  group-hover:scale-105 transition-transform duration-300">
            <cardData.icon className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">{cardData.title}</h2>
        </div>

        <p className="text-gray-800 text-base pt-2">{cardData.description}</p>

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
      <div className="w-full md:w-1/2">
        <img
          src={cardData.image}
          alt={cardData.title}
          className="rounded-2xl"
        />
      </div>
    </motion.div>
  );
};

export default cardDataCard;
