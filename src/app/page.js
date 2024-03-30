"use client"

import { useEffect, useState } from "react";
import homeStyles from "./homeStyles.module.css";
import BouncyText from "@/components/bouncyText/bouncyText";
import { motion } from "framer-motion";
import { NoMouseEffect } from "@/components/mouseEffect/mouseEffect";
import MouseEffect from "@/components/mouseEffect/mouseEffect";
import clsx from "clsx";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const [linkAnimation, setLinkAnimation] = useState(false);
  const [littleAnimations, setLittleAnimations] = useState(false);

  useEffect(() => {
    const value = !(window.document.referrer && (new URL(window.document.referrer).origin === location.origin));
    console.log(value);
    setLittleAnimations(value);
  }, []);
  // const littleAnimations = !(window.document.referrer && (new URL(window.document.referrer).origin === location.origin));
  // const littleAnimations = !location.hash;
  function handleLinkClickAnimation() {
    return new Promise((resolve) => {
      setLinkAnimation(true);
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }

  return (
    <MouseEffect>
      <motion.div
        key={littleAnimations}
        initial={!littleAnimations && { opacity: 0 }}
        animate={!littleAnimations && { opacity: 1 }}
        transition={{ duration: .5 }}
      >
        <div id="mainWrapper">
          {littleAnimations}
          <div id={homeStyles.mainText}>
            <div id={homeStyles.welcomeText}>
              <div>
                <motion.span
                  key={littleAnimations}
                  style={{ display: "inline-block" }}
                  initial={littleAnimations && { opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: .5 }}
                >
                  Hi,
                </motion.span>
                <br />
                <motion.span
                  style={{ display: "inline-block" }}
                  initial={littleAnimations && { opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: .5 }}
                >
                  I`m
                  <NoMouseEffect>
                    <span id={homeStyles.samName}>
                      <BouncyText>
                        Sam Schneider
                      </BouncyText>

                    </span>
                  </NoMouseEffect>
                </motion.span>
              </div>
            </div>
            <NoMouseEffect style={{ width: "fit-content" }}>
              <span id={homeStyles.subText}>
                <motion.div
                  style={{ width: "fit-content" }}
                  initial={littleAnimations && { opacity: 0, x: -10 }}
                  animate={littleAnimations && { opacity: 1, x: 0 }}
                  transition={littleAnimations && { delay: 1.8, duration: .5 }}
                >
                  <SubLink href="/sites" onClick={handleLinkClickAnimation}>Website Developer</SubLink>
                </motion.div>
                <motion.div
                  style={{ width: "fit-content" }}
                  initial={littleAnimations && { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2, duration: .5 }}
                >
                  <SubLink href="/games" onClick={handleLinkClickAnimation}>Game Designer</SubLink>
                </motion.div>
                <motion.div
                  style={{ width: "fit-content" }}
                  initial={littleAnimations && { opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 2.2, duration: .5 }}
                >
                  <SubLink href="/projects" onClick={handleLinkClickAnimation}>Software Engineer</SubLink>
                </motion.div>
              </span>
            </NoMouseEffect>

            <motion.span
              initial={littleAnimations && { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4, duration: .5 }}
            >
              <NoMouseEffect>
                <div id={homeStyles.contactText}>
                  <a id={homeStyles.socialButtons} href="https://github.com/beasleydog" target="_blank">
                    <FaGithub id={homeStyles.githubButton} className={homeStyles.socialButton} />
                  </a>
                  <a id={homeStyles.emailButton} href="mailto:samschneider8306@gmail.com">
                    samschneider8306@gmail.com
                  </a>
                </div>
              </NoMouseEffect>
            </motion.span>
          </div>
          <div id={homeStyles.thing} className={clsx(linkAnimation && homeStyles.thingCover)}>
          </div>
        </div >
      </motion.div >
    </MouseEffect>
  );
}
function SubLink({ children, href, onClick }) {
  async function click() {
    if (onClick) await onClick();
    location.replace(href);
  }
  return (
    <a
      onClick={click}
      className="fancyLink"
    >
      {children}
    </a>
  );
}