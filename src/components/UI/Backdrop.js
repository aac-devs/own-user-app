import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  const closeErrorHandler = () => {
    props.onCloseError();
  };
  return (
    <div onClick={closeErrorHandler} className={styles["backdrop"]}>
      {props.children}
    </div>
  );
};

export default Backdrop;
