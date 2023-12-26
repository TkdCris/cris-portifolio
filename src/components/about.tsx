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
        I&apos;m currently working on a project that aims to revolutionize the
        way people work and learn. I&apos;m excited to contribute to this
        project and make it a reality. Thank you for visiting my portfolio!{" "}
      </p>
    </motion.section>
  );
}
