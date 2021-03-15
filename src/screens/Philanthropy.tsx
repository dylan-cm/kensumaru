import Image from "../atoms/Image";
import Section from "../molecules/Section";
import Layout from "../organisms/Layout";
import gold from "../assets/0gold.png";

const Philanthropy = () => {
  return (
    <Layout>
      <Section head="Gold for Good">
        <p>
          When the Kensu Maru expedition successfully confirms the location of
          the scuttled hospital ship it means Dr. McDougald’s research is
          correct and should eventually lead to the locations of eleven other
          scuttled ships, all potentially laden with treasure. It could be a
          record-setting shipwreck discovery of historic proportions. What will
          become of those riches? The Philippine government will receive 50%
          leaving 50% to be divided among the investors, the salvors, and
          filmmakers.
          <br />
          <br />
          The filmmakers plan for a large portion of that money to be used to
          fund projects to benefit humanity and our planet. In fact The Kensu
          Maru expedition is in actuality an environmental and humanitarian
          philanthropic initiative disguised as a treasure hunt adventure. A
          partial list of the projects that will be funded by the recovery of
          the treasure is located on the “Treasure Philanthropy List “ page in
          this proposal.
          <br />
          <br />
          Dr. McDougald has chosen to keep his intentions for his share of the
          bounty a secret and will only reveal them when the treasure is found.
          He has spent thirty three years preparing for this windfall and has a
          well thought-out and very specific plan in mind. The audience will
          only learn his plan in the final act of the film.
        </p>
        <Image src={gold} bleed left />
      </Section>
    </Layout>
  );
};

export default Philanthropy;
