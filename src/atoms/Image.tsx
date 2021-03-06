import "./Image.css";

interface ImageProps {
  src: string;
  portrait?: boolean;
  bleed?: boolean;
  right?: boolean;
  left?: boolean;
  start?: boolean;
}

const Image = (props: ImageProps) => {
  let classes = "generic-image";
  if (props.portrait) classes += " portrait";
  if (props.bleed) classes += " bleed";
  if (props.right) classes += " right";
  if (props.left) classes += " left";
  if (props.start) classes += " start";

  return (
    <div className={classes} style={{ backgroundImage: `url(${props.src})` }} />
  );
};

export default Image;
