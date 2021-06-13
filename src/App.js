import { useState } from "react";
import NewUser from "./components/NewUser/NewUser";
import styles from "./App.module.css";
import UserList from "./components/Users/UserList";
import ErrorModal from "./components/UI/ErrorModal";
import Backdrop from "./components/UI/Backdrop";

function App() {
  const [users, setUsers] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("mensaje");

  const addUserHandler = (user) => {
    setUsers((prevState) => {
      return [...prevState, user];
    });
  };

  const showErrorHandler = (message) => {
    setErrorMessage(message);
    setIsError(true);
  };

  const hideErrorHandler = () => {
    setIsError(false);
  };

  return (
    <div className={styles["container"]}>
      <NewUser onShowError={showErrorHandler} onAddUser={addUserHandler} />
      {users.length > 0 && <UserList items={users} />}
      {isError && (
        <Backdrop onCloseError={hideErrorHandler}>
          <ErrorModal message={errorMessage} onCloseError={hideErrorHandler} />
        </Backdrop>
      )}
    </div>
  );
}

export default App;
