import { useEffect } from "react";
import { useParams } from "react-router";
import UsersContext from "../../context/usercontext";

function User() {
  const { name } = useParams();
  const { username, SetUsersName } = UsersContext();

  useEffect(() => {
    SetUsersName();
  }, []);

  return (
    <div>
      This name is From Dynamic Route :{name}
      <h1>This name is From Context-Api :{username}</h1>
    </div>
  );
}

export default User;
