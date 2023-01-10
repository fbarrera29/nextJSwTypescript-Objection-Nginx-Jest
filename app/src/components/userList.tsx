import SingleUser from "./singleUser";
import { useEffect, useState } from "react";
import { _getUsers } from "../api";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    // Your code here
    const getUsers = async () => {
      const response = await _getUsers(0, 2);
      if (response.data.success === true) {
        setUsers(response.data.data);
      }
    };
    getUsers();
  }, []);

  return (
    <div>{users.length !== 0 && users.map((u) => <SingleUser user={u} />)}</div>
  );
};

export default UserList;
