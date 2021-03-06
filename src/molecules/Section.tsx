import "./Section.css";

interface SectionProps {
  head?: string;
  subhead?: string;
  children?: React.ReactNode;
}

const Section = (props: SectionProps) => {
  return (
    <div className="section-container">
      {props.head ? <h1>{props.head}</h1> : <></>}
      {props.subhead ? <h2>{props.subhead}</h2> : <></>}
      {props.children}
    </div>
  );
};

export default Section;
