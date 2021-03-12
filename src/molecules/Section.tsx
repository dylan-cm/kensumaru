import "./Section.css";

interface SectionProps {
  head?: string;
  subhead?: string;
  children?: React.ReactNode;
  noInline?: boolean;
  id?: string;
}

const Section = (props: SectionProps) => {
  let classes = "section-container";
  if (props.noInline) classes += " no-inline";

  return (
    <div className={classes}>
      <div className="hash-locator" id={props.id} />
      {props.head ? <h1>{props.head}</h1> : <></>}
      {props.subhead ? <h2>{props.subhead}</h2> : <></>}
      {props.children}
    </div>
  );
};

export default Section;
