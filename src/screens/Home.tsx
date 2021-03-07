import React from "react";
import poster from "../assets/poster.jpg";
import chuckGold from "../assets/chuck_gold.jpeg";
import "./Home.css";
import Layout from "../organisms/Layout";
import Section from "../molecules/Section";
import Image from "../atoms/Image";

const Home = () => {
  return (
    <Layout>
      <img src={poster} className="poster" alt="poster" />
      <Section noInline>
        <p>
          <b>KENSU MARU</b> is a feature-length documentary that tells the story
          of “real-life Indiana Jones,” Dr. Chuck McDougald PhD, former Green
          Beret Captain, author, academic, and treasure hunter, as he journeys
          to the Philippines with a dream team of experts and cutting-edge
          technology in a quest to locate a sunken WW2 Japanese hospital ship
          laden with billions in treasure.
          <br />
          <br />
          In 1988 while studying for his doctorate in Manilla he was tasked by
          the Aquino government to recover part of the vast fortune of looted
          gold hidden by the Japanese known as{" "}
          <a href="https://en.wikipedia.org/wiki/Yamashita%27s_gold">
            “Yamashita’s treasure,”
          </a>{" "}
          and to uncover the truth about its connection to the billions stolen
          by the kleptocratic dictator, Ferdinand Marcos. When a Japanese
          booby-trap killed two of his men McDougald was forced to cease the dig
          and flee the country.
          <br />
          <br />
          33 years later, at 80-years-old, and now possessing newly discovered
          information gleaned from decades of research, eyewitness accounts and
          recently deciphered maps, he returns to the Philippines for one last
          chance to retrieve the sunken gold to use for philanthropic endeavors
          and to seek justice for the Filipino people.
        </p>
        <Image src={chuckGold} end/>
      </Section>
    </Layout>
  );
};

export default Home;
