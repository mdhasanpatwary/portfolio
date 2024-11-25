import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Engineer"
            company="6amTech"
            time="2021 - 2024"
            address="House 1005, 1007, (Level: 02), Avenue: 11, 1216 Road no: 09, Dhaka 1216"
            companyLink="https://6amtech.com/"
            work="* Codecanyon Profile: Contributed to all products on the company's Codecanyon profile, significantly enhancing the company's market presence and product offerings. * Major Projects: Played a pivotal role in the development of high-impact projects such as \"6valley,\" \"Demandium,\" \"Hexaride,\" and \"6amMart\". * End-to-End Development: Developed \"Demandium\" and \“Hexaride\" from scratch, showcasing expertise in project management and technical execution. * UI Updates: Led comprehensive UI updates across multiple projects, improving user experience and modernizing designs. * Codebase Structuring: Structured and organized codebases to ensure long-term maintainability and scalability, facilitating easier updates and enhancements. * During my tenure at 6amtech, I consistently delivered high-quality work, contributing to the success and growth of the company's product portfolio."
          />

          <Details
            position="Front-End Developer"
            company="Themelooks"
            time="2019 - 2022"
            address="965 Begum Rokeya Avenue, Dhaka 1216"
            companyLink="https://themelooks.com/"
            work="* Contributed to over 10 items available on ThemeForest under the Themelooks profile. * Developed and contributed to several plugins featured on Codecanyon, enhancing the functionality and usability of various web projects. * Managed multiple projects simultaneously, ensuring timely delivery and high-quality standards. * During my tenure, I played a key role in the success of numerous projects, significantly enhancing the overall quality and performance of Themelooks' web products."
          />
        </ul>
      </div>
      <div className="mt-40 flex items-center justify-between gap-3 grid-cols-2">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Articles
        </Link>
      </div>
    </div>
  );
};

export default Experience;
