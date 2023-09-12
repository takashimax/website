import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";

const DownScroll = ({ children }) => {
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 1000,
        opacity: 0,
        distance: "60px",
      });
    }
  }, []);

  return <section ref={sectionRef}>{children}</section>;
};

export { DownScroll };

const UpperScroll = ({ children }) => {
  const sectionRef = useRef();
  useEffect(() => {
    if (sectionRef.current) {
      ScrollReveal().reveal(sectionRef.current, {
        reset: true,
        delay: 1000,
        opacity: 0,
        distance: "-60px",
      });
    }
  }, []);

  return <section ref={sectionRef}>{children}</section>;
};

export { UpperScroll };

function Home() {
  return (
    <>
      <div id="home" className="relative w-full py-20">
        <div className="flex flex-col justify-center items-center mt-20">
          <div>
            <UpperScroll>
              <img src="../src/img/hand01.jpg" />
            </UpperScroll>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="font-lilita md:text-6xl text-4xl text-center absolute z-10 ">
            <h1 className="text-line">Takashi Taguchi</h1>
            <h1 className="py-5">Portfolio</h1>
          </motion.div>
          <div>
            <DownScroll>
              <img src="../src/img/hand02.jpg" />
            </DownScroll>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
