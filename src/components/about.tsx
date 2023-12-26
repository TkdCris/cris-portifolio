"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
      }}
      className="flex flex-col mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    >
      <SectionHeading>About me</SectionHeading>
      <p>
        I&apos;m a full-stack developer with 2.5 years of experience. I&apos;m
        passionate about creating innovative and user-friendly solutions.
      </p>
      <p>
        I&apos;m currently focusing on improving my skills both on the front-end
        with nextjs and on the back-end with java using microservices
        architecture. I&apos;m excited to improve my portfolio and get back into
        the job market as part of a team that is passionate about what they do.
        Thank you for visiting my portfolio!{" "}
      </p>
    </motion.section>
  );
}
