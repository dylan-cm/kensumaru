import React from "react";
import poster from "../assets/poster.jpg";
import chuckGold from "../assets/chuck_gold.jpeg";
import "./Home.css";
import Layout from "../organisms/Layout";
import Section from "../molecules/Section";

const growImage = (event: any) => {
  let id = event.target.id + "-big";
  if (window && window.document && window.document.getElementById(id)) {
    let element = window.document.getElementById(id);
    if (element) {
      element.style.display = "block";
    }
  }
};

const shrinkImage = (event: any) => {
  let id = event.target.id;
  if (window && window.document && window.document.getElementById(id)) {
    let element = window.document.getElementById(id);
    if (element) {
      element.style.display = "none";
    }
  }
};

const Home = () => {
  return (
    <Layout>
      <img
        src={poster}
        className="grow-image"
        alt="poster"
        id="poster-big"
        onClick={(event) => shrinkImage(event)}
      />
      <div className="home-page">
        <div className="side">
          <img
            src={poster}
            className="poster"
            alt="poster"
            id="poster"
            onClick={(event) => growImage(event)}
          />
        </div>
        <Section noInline>
          <p>
            <b>KENSU MARU</b> is a feature-length documentary that tells the
            story of “real-life Indiana Jones” Dr. Chuck McDougald PhD, former
            Green Beret Captain, author, academic, and treasure hunter, as he
            journeys to the Philippines with a dream team of experts and
            cutting-edge technology in a quest to locate a sunken WWII Japanese
            hospital ship laden with billions of dollars in treasure.
            <br />
            <br />
            While studying for his doctorate in Manilla in 1988, he was tasked
            by the Aquino government to recover part of the vast fortune of
            looted gold hidden by the Japanese known as{" "}
            <a href="https://en.wikipedia.org/wiki/Yamashita%27s_gold">
              “Yamashita’s treasure,”
            </a>{" "}
            and to uncover the truth about its connection to the billions stolen
            by the kleptocratic dictator, Ferdinand Marcos. When a Japanese
            booby-trap killed two of his men McDougald was ultimately forced to
            stop the dig.
            <br />
            <br />
            McDougald returns to the Philippines thirty three years later, now
            eighty-years-old, and possessing newly discovered information
            gleaned from decades of research, eyewitness accounts and recently
            deciphered maps, for one last chance to retrieve the sunken gold to
            use for philanthropic endeavors and to seek justice for the Filipino
            people.
          </p>

          <img
            src={chuckGold}
            className="poster chuck"
            id="web-chuck"
            alt="chuck holding gold"
            onClick={(event) => growImage(event)}
          />
          <img
            src={chuckGold}
            className="poster chuck"
            id="mobile-chuck"
            alt="chuck holding gold"
          />
        </Section>
      </div>
    </Layout>
  );
};

export default Home;
