"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
//import { useSectionInView } from "@/lib/hooks";

export default function About() {
  //const { ref } = useSectionInView("About");

  return (
    <motion.section
     // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
  As a dedicated student of Software Engineering, I`m on an exciting journey to explore the world of web development. My passion lies in crafting beautiful and functional websites using technologies like{" "}
  <span className="font-medium">Next.js, React, Tailwind CSS, and TypeScript</span>.{" "}
  <span className="italic">I`m particularly drawn to the creative problem-solving aspects of programming</span>, and the satisfaction of finding elegant solutions to coding challenges is what drives me forward. My tech stack foundation includes these technologies, and I`m always eager to expand my knowledge by embracing new technologies and techniques. Currently, I`m actively seeking opportunities for a{" "}
  <span className="font-medium">part-time/project-based software developer position</span> where I can continue to grow and contribute to innovative projects.
</p>

<p>
  <span className="italic">When I`m not immersed in code</span>, you`ll often find me on the football field, either playing or watching games with great enthusiasm. My aspirations include pursuing opportunities at tech giants like <span className="font-medium">Microsoft, Google, Facebook, etc.</span> to further hone my skills and make a meaningful impact in the tech world. Additionally, I have a profound interest in delving into the rich history and philosophy of the Muslim world, continuously expanding my understanding and appreciation of our cultural heritage.
</p>


    </motion.section>
  );
}