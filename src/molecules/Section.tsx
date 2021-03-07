import "./Section.css";

interface SectionProps {
  head?: string;
  subhead?: string;
  children?: React.ReactNode;
  noInline?: boolean;
}

const Section = (props: SectionProps) => {
  let classes = "section-container";
  if (props.noInline) classes += " no-inline";

  return (
    <div className={classes}>
      {props.head ? <h1>{props.head}</h1> : <></>}
      {props.subhead ? <h2>{props.subhead}</h2> : <></>}
      {props.children}
    </div>
  );
};

export default Section;
