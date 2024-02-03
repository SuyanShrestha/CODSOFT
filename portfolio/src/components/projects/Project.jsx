import { useRef } from "react";
import "./project.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const items = [
  {
    id: 1,
    title: "E-commerce app",
    img: "/ecommerce.png",
    desc: "Welcome to ComfyHouse – your one-stop destination for all things cozy and stylish for your home! Elevate your living space with our curated collection of goods and furniture designed to bring comfort, functionality, and aesthetic appeal to every corner of your house.",
    demo: 'https://suyanshrestha.github.io/My-Web-Projects/Snake-Game/',
    github: 'https://github.com/SuyanShrestha/My-Web-Projects/tree/main/Snake-Game'
  },
  {
    id: 2,
    title: "ChitraYatri Image Search",
    img: "/chitrayatri.png",
    desc: "Introducing Chitrayatri, your gateway to an immersive image search experience! Unleash the power of visual exploration with our cutting-edge image search website. Whether you're a photography enthusiast, a design professional, or simply seeking visual inspiration, Chitrayatri is designed to elevate your search journey.",
    demo: 'https://suyanshrestha.github.io/My-Web-Projects/Chitrayatri-Image-Search/',
    github: 'https://github.com/SuyanShrestha/My-Web-Projects/tree/main/Chitrayatri-Image-Search'
  },
  {
    id: 3,
    title: "Currency Converter",
    img: "/currency.png",
    desc: "Introducing our Currency Converter website – the ultimate online tool to streamline your currency conversions effortlessly. Whether you're a seasoned traveler, an international business professional, or someone managing finances across borders, our website provides a user-friendly and reliable platform for all your currency conversion needs.",
    demo: 'https://suyanshrestha.github.io/My-Web-Projects/Currency_Converter/',
    github: 'https://github.com/SuyanShrestha/My-Web-Projects/tree/main/Currency_Converter'
  },
  {
    id: 4,
    title: "Weather App",
    img: "/weather.png",
    desc: "Welcome to WeatherNoah – your window to the world's weather, providing you with accurate and up-to-date forecasts to help you plan your day with confidence. Whether you're a globetrotter, a weekend adventurer, or simply planning your daily routine, WeatherNoah is here to make sure you're prepared for whatever Mother Nature has in store.",
    demo: 'https://suyanshrestha.github.io/My-Web-Projects/Weather/',
    github: 'https://github.com/SuyanShrestha/My-Web-Projects/tree/main/Weather'
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({target: ref});

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttons">
              <button> <a href={item.demo} target="_blank">See Demo</a></button>
              <button>
              <a href={item.github} target="_blank">
              <FontAwesomeIcon icon={faGithub}/>         
              Github</a>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Project = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({target: ref, offset: ["end end", "start start"]});

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="project" ref={ref}>
      <div className="progress">
        <h1>Recent Works</h1>
        <motion.div style={{ scaleX: scaleX}} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Project;