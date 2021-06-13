import styles from "./Card.module.css";

const Card = (props) => {
  const classes = `${styles["container"]} ${props.className}`;
  const cardClickHandler = (event) => {
    event.stopPropagation();
  };
  return (
    <div onClick={cardClickHandler} className={classes}>
      {props.children}
    </div>
  );
};

export default Card;
