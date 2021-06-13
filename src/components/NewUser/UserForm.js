import { useState } from "react";
import StyledButton from "../UI/StyledButton";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      props.onError("Please, enter a valid name and age (non-empty values).");
      return;
    }
    if (isNaN(enteredAge)) {
      props.onError("Please, enter a valid age (only number values).");
      return;
    }
    if (parseInt(enteredAge.trim()) <= 0) {
      props.onError("Please, enter a valid age (> 0).");
      return;
    }
    const userData = {
      name: enteredName,
      age: enteredAge,
    };
    props.onSaveNewUser(userData);
    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles["new-user__controls"]}>
        <div className={styles["new-user__control"]}>
          <label>Username</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className={styles["new-user__control"]}>
          <label>Age (Years)</label>
          <input type="text" value={enteredAge} onChange={ageChangeHandler} />
        </div>
      </div>
      <div>
        <StyledButton type="submit">Add User</StyledButton>
      </div>
    </form>
  );
};

export default UserForm;
