import Card from "./Card";
import styles from "./ErrorModal.module.css";
import StyledButton from "./StyledButton";

const ErrorModal = (props) => {
  const closeErrorHandler = () => {
    props.onCloseError();
  };
  return (
    <Card className={styles["backcolor"]}>
      <div className={styles.title}>Invalid input</div>
      <div className={styles.message}>{props.message}</div>
      <div className={styles.actions}>
        <StyledButton type="button" onClick={closeErrorHandler}>
          Okay
        </StyledButton>
      </div>
    </Card>
  );
};

export default ErrorModal;
