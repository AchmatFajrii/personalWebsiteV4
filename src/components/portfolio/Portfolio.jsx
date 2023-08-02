import List from "./List";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import Items from "./Items";
import shapeOne from "../../assets/shape-1.png";
import { projects } from "../../Data";
import "./portfolio.css";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
// import FaGithub  from "react-icons";

const allNavList = [
  "all",
  ...new Set(projects.map((project) => project.category)),
];

const Portfolio = () => {
  const [projectItems, setMenuItems] = useState(projects);
  const [navList, setCategories] = useState(allNavList);
  const [showAll, setShowAll] = useState(false); // Tambahkan state untuk menandai apakah harus menampilkan semua proyek
  const [displayCount, setDisplayCount] = useState(3); // Tambahkan state untuk menyimpan jumlah proyek yang akan ditampilkan
  // const [max, setMax] = useState(3)

  const handleShowMore = () => {
    setShowAll(true);
    setDisplayCount(projectItems.length); // Set jumlah proyek yang akan ditampilkan menjadi jumlah keseluruhan proyek
  };

  const handleShowLess = () => {
    setShowAll(false);
    setDisplayCount(3); // Set jumlah proyek yang akan ditampilkan menjadi jumlah keseluruhan proyek
  };

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(projects);
      return;
    }
    const newProjectItems = projects.filter(
      (item) => item.category === category
    );

    setMenuItems(newProjectItems);
  };

  return (
    <>
      <section className="portfolio section" id="work">
        <h2 className="section__title text-cs">Portfolio</h2>
        <p className="section__subtitle">
          My <span>Cases</span>
        </p>

        <List list={navList} filterItems={filterItems} />

        <div className="portfolio__container container grid">
          <AnimatePresence initial={false}>
            <Items projectItems={projectItems.slice(0, displayCount)} />
          </AnimatePresence>
        </div>

        {projectItems.length > 3 &&
          !showAll && ( // Tampilkan tombol "Show more" jika ada lebih dari 3 proyek dan belum menampilkan semua proyek
            <div className="btn-show">
              <button className="btn" onClick={handleShowMore}>
                Show more
              </button>
            </div>
          )}

        {projectItems.length > 3 &&
          showAll && ( // Tampilkan tombol "Show more" jika ada lebih dari 3 proyek dan belum menampilkan semua proyek
            <div className="btn-show">
              <button className="btn" onClick={handleShowLess}>
                Show less
              </button>
            </div>
          )}

        {projectItems.length > 3 && showAll && (
          <div className="github">
            <span className="or">OR</span>
            <a className="link__github" target="__blank" href="https://github.com/AchmatFajrii">
              <FaGithub /> See more on Github
            </a>
          </div>
        )}

        <div className="section__deco deco__right">
          <img src={shapeOne} alt="" className="shape" />
        </div>

        <div className="section__bg-wrapper">
          <span className="bg__title">Portfolio</span>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
