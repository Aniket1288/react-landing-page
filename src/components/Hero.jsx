import { motion } from "framer-motion";
import "../styles/hero.css";

function Hero() {
    const handleClick = () => {
  alert("Thanks for checking my project!");
};

  return (
    <section id="home" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Frontend Developer Internship Project
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Hi, I’m Aniket. This landing page is built using React to demonstrate
component-based structure, animations, and clean UI design.
      </motion.p>

     <motion.button onClick={handleClick}>
  Get Started
</motion.button>

    </section>
  );
}

export default Hero;
