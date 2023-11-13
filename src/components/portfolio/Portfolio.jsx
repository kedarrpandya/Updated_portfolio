import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Shareme App",
    img: "/images/1.png",
    desc: "Using React & sanity I've Created this Wonderful Web-App called ShareME which is basically a Social Media App in which a user can share pictures and save them.",
    visit: "https://shareme-kedar.netlify.app/",
  },
  {
    id: 2,
    title: "E-Commerce",
    img: "/images/2.png",
    desc: "This is my very First Web-App using Django-Python. This is Basically an e-shop from where you can buy stuff also it has an admin panel too so you can add or remove stuff and their categories also make changes in the added stuff.",
    visit: "http://kedarpandya.pythonanywhere.com/store",
  },
  {
    id: 3,
    title: "Netflix-Clone",
    img: "/images/3.png",
    desc: "Using ReactJs & Postman API I've created this beautiful Netflix-Clone. In this you cannot watch the whole serirs but you can surely watch the respective trailer or the BTS of the particular series.",
    visit: "https://netflix-clone-ad3bc.web.app",

  },
  {
    id: 4,
    title: "Spotify refreshed version",
    img: "/images/5.png",
    desc: "This is a unique version of spotify or we can say any music platform. This has been made by using ReactJS & Rapid API with also use of Tailwind CSS framework.",
    visit: "https://refreshed-spotify.netlify.app/",

  },
  {
    id: 5,
    title: "Analysis of Data using tableau",
    img: "/images/4.png",
    desc: "My very Data analysis Project in which I basically did the data cleaning/Filteration/ETL of the given data using MySQL & Tableau. After that I also Visualised the data and created an attractive, Responsive & Interactive Dashboard.",
    visit:
      "https://public.tableau.com/app/profile/kedar.pandya/viz/Sample_Company_Sales_Insights/Final_Dashboard",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.visit}><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
