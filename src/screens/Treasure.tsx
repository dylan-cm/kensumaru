import Section from "../molecules/Section";
import Layout from "../organisms/Layout";
import Image from "../atoms/Image";
import map from "../assets/0map.jpg";

const Treasure = () => {
  return (
    <Layout>
      <Section head="The Treasure">
        <p>
          When the Kensu Maru is located, what is the expedition expecting to
          find? What is the treasure she was carrying? To get an idea of the
          possible scale of the bounty to be salvaged from the Kensu Maru, the
          expedition researched the sinking of a similar WWII Japanese Hospital
          ship, The Awa Maru. During WWII the Japanese used the Philippines as a
          collection and transshipment point for all the treasure looted from
          Southeast Asia during the war to be transferred back to Japan. To
          evade the US Navy the Japanese used passenger liners and cargo ships
          disguised as hospital ships under the protection of The International
          Red Cross, in violation of the Geneva convention, to smuggle troops,
          treasure and war material.
          <br />
          <br />
          In April of 1945 an American submarine, The USS Queenfish, torpedoed
          and sank the Awa Maru in 1,300ft of water as it passed through the
          straits of Formosa. Although the ship was displaying illuminated Red
          Cross symbols the captain of the submarine maintained that heavy fog
          prevented him from confirming the identity of the ship. The subsequent
          investigation of the incident revealed the ship had been carrying a
          huge fortune.
          <br />
          <br />
          After the sinking of the Awa Maru, the hospital ship deception was
          exposed and as the Allies closed in the Japanese deemed a sea route to
          Japan too risky and instead were forced to hide the treasure in The
          Philippines for retrieval after the war. One method was to scuttle
          their own ships off the coast of the Philippines in relatively shallow
          water in marked locations indicated on coded maps for later salvage.
          <br />
          <br />
          Dr. McDougald’s research has indicated there are twelve of these
          scuttled hospital ships, each containing over half-a-billion dollars
          in gold at 1944 prices ($44/oz) Today an ounce of gold is valued at
          around $1,800 an ounce making the treasure worth over 20 billion
          dollars. Our expedition is planning to locate the one that’s easiest
          to recover, the ship code-named Kensu Maru.
        </p>
        <Image src={map} bleed left />
      </Section>
    </Layout>
  );
};

export default Treasure;
