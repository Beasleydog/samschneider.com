"use client"

import { useEffect, useState } from "react";
import homeStyles from "./homeStyles.module.css";
import BouncyText from "@/components/bouncyText/bouncyText";
import { motion } from "framer-motion";
import { NoMouseEffect } from "@/components/mouseEffect/mouseEffect";
import MouseEffect from "@/components/mouseEffect/mouseEffect";
import clsx from "clsx";
import useOnMobile from "@/components/onMobile/onMobile";

//Skills icons
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { SiTypescript, SiMongodb } from "react-icons/si";
import { FaHtml5, FaPython, FaJava, FaNodeJs, FaReact } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";


//Social Icons
import { FaGithub } from "react-icons/fa";

export default function Home() {
  const [linkAnimation, setLinkAnimation] = useState(false);
  const [littleAnimations, setLittleAnimations] = useState(false);
  const onMobile = useOnMobile();

  useEffect(() => {
    const value = !(window.document.referrer && (new URL(window.document.referrer).origin === location.origin));
    console.log(value);
    setLittleAnimations(value);
  }, []);

  function handleLinkClickAnimation() {
    return new Promise((resolve) => {
      setLinkAnimation(true);
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
  console.log(homeStyles.email);
  return (
    <MouseEffect>
      <motion.div
        key={littleAnimations}
        initial={!littleAnimations && { opacity: 0 }}
        animate={!littleAnimations && { opacity: 1 }}
        transition={{ duration: .5 }}
      >
        <div id={homeStyles.mainWrapper}>
          {littleAnimations}
          <motion.span
            initial={littleAnimations && { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.4, duration: .5 }}
          >
            <NoMouseEffect>
              <div id={homeStyles.skillsText}>
                <div id={homeStyles.skillIcons}>
                  <FaNodeJs title="Node JS" className={homeStyles.skillIcon} />
                  <FaHtml5 title="HTML" className={homeStyles.skillIcon} />
                  <FaCss3Alt title="CSS" className={homeStyles.skillIcon} />
                  <FaJava title="Java" className={homeStyles.skillIcon} />
                  <FaPython title="Python" className={homeStyles.skillIcon} />
                  <FaReact title="React" className={homeStyles.skillIcon} />
                  <SiMongodb title="MongoDB" className={homeStyles.skillIcon} />
                  <IoLogoFirebase title="Firebase" className={homeStyles.skillIcon} />
                </div>
              </div>
            </NoMouseEffect>
          </motion.span>
          <div id={homeStyles.mainText}>
            <div id={homeStyles.welcomeText}>
              <motion.span
                key={littleAnimations}
                style={{ display: "inline-block" }}
                initial={littleAnimations && { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: .5 }}
              >
                Hi,
                {onMobile &&
                  <motion.span
                    key={littleAnimations}
                    style={{ display: "inline-block", marginLeft: "2rem" }}
                    initial={littleAnimations && { opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: .5, delay: .8 }}
                  >
                    I'm
                  </motion.span>
                }
              </motion.span>
              <motion.div
                style={{ display: "block" }}
                initial={littleAnimations && { opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: .5 }}
              >
                <NoMouseEffect>
                  {!onMobile && " I'm"}
                  <span id={homeStyles.samName}>
                    <BouncyText>
                      Sam Schneider
                    </BouncyText>

                  </span>
                </NoMouseEffect>
              </motion.div>
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
            <motion.div
              initial={littleAnimations && { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: .5 }}
            >
              <NoMouseEffect>
                <div id={homeStyles.contactText}>
                  <a id={homeStyles.socialButtons} href="https://github.com/beasleydog" target="_blank">
                    <FaGithub id={homeStyles.githubButton} className={homeStyles.socialButton} />
                  </a>
                  <span id={homeStyles.emailText}>
                    Currently looking for freelance work.
                    <br />
                    <a id={homeStyles.emailButton} href="mailto:samschneider8306@gmail.com">
                      Reach out at
                      <span id={homeStyles.email}>
                        samschneider8306@gmail.com
                      </span>
                    </a>
                  </span>
                </div>
              </NoMouseEffect>
            </motion.div>
          </div>
          <div id={homeStyles.thing} className={clsx(linkAnimation && homeStyles.thingCover)}>
          </div>
        </div >
      </motion.div >
    </MouseEffect >
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