import React from "react";
import { motion } from "framer-motion";
import me from "../../assets/skj.jpg";
const Founder = () => {
  const options = {
    initial: {
      x: "-100%",
      opacity: 0,
    },
    whileInView: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <section className="founder">
      <motion.div {...options}>
        <img src={me} alt="Founder" height={200} width={200} />
        <h3>Ferasat</h3>

        <p>
          Hey, Everyone I am Ferasat, the founder of Burger Shop.
          <br />
          Our burgers are made with fresh, high-quality ingredients, and we're committed to giving our customers the best possible experience.
        </p>
      </motion.div>
    </section>
  );
};

export default Founder;
