import styles from "./NewUser.module.css";
import Card from "../UI/Card";
import UserForm from "./UserForm";

const NewUser = (props) => {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
  };
  const errorMessageHandler = (message) => {
    props.onShowError(message);
  };
  return (
    <Card className={styles["container-new"]}>
      <UserForm
        onSaveNewUser={saveUserDataHandler}
        onError={errorMessageHandler}
      />
    </Card>
  );
};

export default NewUser;
