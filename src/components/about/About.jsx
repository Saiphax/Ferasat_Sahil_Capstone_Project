// Write all the code here
import React from "react";
import { Link } from "react-router-dom";
import { RiFindReplaceLine } from "react-icons/ri";
import me from "../../assets/skj.jpg";

const About = () => {
  return (
    <section className="about">
      <main>
        <h1>About Us</h1>
        <article>
          <h4>Burger Shop</h4>
          <p>
             At Burger Shop, we believe in simplicity and quality. That's why we only offer three types of burgers: cheese burgers, veg cheese burgers, and cheese burgers with fries. All our burgers are made with fresh ingredients, such as 100% grass-fed beef, organic cheese, and homemade buns. Our fries are crispy and golden, and our sauces are rich and flavorful. Whether you are a meat lover, a vegetarian, or a fan of both, we have the perfect burger for you. You can order online, take out, or dine in at our cozy and friendly shop. Come and taste the difference at Burger Shop, where less is more.
          </p>
          <p>
            Indulge in our mouth-watering food and burgers. Click below to see the menu.
          </p>
          <Link to="/">
            <RiFindReplaceLine />
          </Link>
        </article>
        <div>
          <h2>Founder</h2>
          <article>
            <div>
              <img src={me} alt="Founder" />
              <h3>Ferasat</h3>
            </div>
            <p>
              I am Ferasat, the founder of Burger Shop. Affiliated to Good Taste...
            </p>
          </article>
        </div>
      </main>
    </section>
  );
};

export default About;
