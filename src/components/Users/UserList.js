import Card from "../UI/Card";
import UserItem from "./UserItem";
import styles from "./UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={styles["container-new"]}>
      <ul className={styles["list"]}>
        {props.items.map((user) => (
          <UserItem key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
