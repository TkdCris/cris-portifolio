"use client";

import Image from "next/image";
import React from "react";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/cris.jpg"
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
              alt="Cristiano portrait"
              width={192}
              height={192}
              quality={95}
              priority={true}
            />
          </motion.div>
          <motion.span
            className="absolute text-2xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.1,
              type: "spring",
              stiffness: 125,
              duration: 0.5,
            }}
          >
            <p>{"\u{1F44B}"}</p>
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
      >
        <span className="font-bold">Hello, I&apos;m Cristiano. </span>
        I&apos;m a <span className="font-bold">
          full-stack developer
        </span> with <span className="font-bold">2.5 years </span>
        of experience.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all"
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-active:rotate-180 group-active:scale-x-125 group-active:text-white transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10"
          href="/CV.pdf" // I need to create CV.pdf file
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-active:translate-y-1 transition" />
        </a>

        <a
          className="bg-white text-gray-700 px-4 py-3 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
          href="https://www.linkedin.com/in/cristiano-lopes-duarte-0994821b7/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white text-gray-700 px-4 py-3 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-110 hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10"
          href="https://github.com/TkdCris"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
