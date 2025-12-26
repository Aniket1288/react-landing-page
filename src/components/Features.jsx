import { motion } from "framer-motion";
import "../styles/features.css";

function Features() {
  const items = [
  "Component-based structure",
  "Clean folder organization",
  "Reusable UI blocks"
];


  return (
    <section id="features" className="features">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Features
      </motion.h2>

      <div className="feature-box">
        {items.map((item, index) => (
          <motion.div
            key={item}
            className="card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3>{item}</h3>
            <p>Clean UI with reusable components.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Features;
