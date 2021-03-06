import React from "react";
import poster from "../assets/KensuMaru-V2D.jpg";
import "./Home.css";
import Layout from "../organisms/Layout";

const Home = () => {
  return (
    <Layout>
      <img src={poster} className="poster" alt="poster" />
      <p className="paragraph">
        During World War II the Japanese Imperial Army systematically looted
        China and the other occupied Asian nations amassing a vast fortune of
        gold and treasure that was shipped to the Philippines en route to Japan.
        In anticipation of a US invasion to retake the Philippines, the
        Japanese, led by General Tomoyuki Yamashita, were forced to hide their
        treasure in booby-trapped underground tunnels and scuttled ships for
        retrieval after the war. Today many tons of plundered gold lies at the
        bottom of the ocean in one of those ships, the hospital ship code-named
        “Kensu Maru.” Only one man still alive knows its location.
      </p>

      <p className="paragraph">
        KENSU MARU is the story of octogenarian former Green Beret Captain,
        author, and academic, Dr. Chuck McDougald PhD. McDougald helped bring
        down dictator Ferdinand Marcos when his exposé of Marcos’ corruption was
        published and read by millions of Filipinos in a popular magazine. Due
        to his contacts with high ranking officials in the Aquino administration
        he was asked by the National Security Director to try and learn the
        truth about “Yamashita’s Treasure” and its possible connection to the
        billions of dollars stolen by former president Marcos and his
        partner-in-crime Imelda. In 1988 Dr. McDougald led a team of treasure
        hunters tunneling under Fort Santiago, in Manila. Within days of
        uncovering a huge cache of gold, two members of his team were killed in
        a cave-in caused by a booby trap and McDougald was forced to abandon his
        dig.{" "}
      </p>

      <p className="paragraph">
        In KENSU MARU, he returns thirty three years later to the Philippines
        with a team of filmmakers, explorers, and experts armed with cutting
        edge military sonar technology, access to mineral prospecting
        satellites, transcripts of hundreds of interviews, eye-witness accounts
        recalled under regression hypnosis, and newly deciphered original
        Japanese treasure maps. McDougald will finally be able prove his theory
        about this previously untold episode of World War II history. He’s on a
        final mission to recover the gold and use it to finance philanthropic
        endeavors in the nations from which the riches where stolen and for the
        benefit of the Filipino people.
      </p>

      <p className="paragraph">
        If Dr. McDougald is correct in his prediction of the Kensu Maru's
        location it will verify the authenticity of his information and will
        then lead to locating and recovering elevan other scuttled hospital
        ships also loaded with billions in gold. His mission will not only
        reveal the truth about Yamashita’s legendary treasure it will expose the
        dark secrets about the corruption and greed of the Marcos regime, secret
        CIA slush funds used to fight the Cold War, and the hidden workings of
        our gold-based monetary system.{" "}
      </p>
    </Layout>
  );
};

export default Home;

//! Below is the old log line text. Using synopsis text above.

/* <p className="paragraph">
<b>KENSU MARU</b> is a feature-length documentary that tells the story
of “real-life Indiana Jones,” Dr. Chuck McDougald PhD, former Green
Beret Captain, author, academic, and treasure hunter, as he journeys to
the Philippines with a dream team of experts and cutting-edge technology
in a quest to locate a sunken WW2 Japanese hospital ship laden with
billions in treasure.
</p>
<p className="paragraph">
In 1988 while studying for his doctorate in Manilla he was tasked by the
Aquino government to recover part of the vast fortune of looted gold
hidden by the Japanese known as{" "}
<a href="https://en.wikipedia.org/wiki/Yamashita%27s_gold">
  “Yamashita’s treasure,”
</a>{" "}
and to uncover the truth about its connection to the billions stolen by
the kleptocratic dictator, Ferdinand Marcos. When a Japanese booby-trap
killed two of his men McDougald was forced to cease the dig and flee the
country.
</p>
<p className="paragraph">
33 years later, at 80-years-old, and now possessing newly discovered
information gleaned from decades of research, eyewitness accounts and
recently deciphered maps, he returns to the Philippines for one last
chance to retrieve the sunken gold to use for philanthropic endeavors
and to seek justice for the Filipino people.
</p> */
