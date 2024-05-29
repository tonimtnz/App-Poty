import { useContext, useState } from "react";
import { UserLogo } from "./UserLogo";
import { HeaderUserData } from "./HeaderUserData";
import { useGetUserData } from "../useGetUserData";
import { UserContext } from "../../context/userContext";

export function UserSettings({}) {
  const [state, setState] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { username, userData, error, loading, GetUserData } = useGetUserData();

  const { user, setUser } = useContext(UserContext);

  function handleShowSettigns() {
    setToggle(!toggle);
    if (state === false) {
      GetUserData();
    }
    setState(true);
  }

  return (
    <div>
      <button onClick={handleShowSettigns} id="user-button">
        <UserLogo />
      </button>
      <section className={toggle ? "header-mc-shown" : "header-mc-hidden"}>
        <div className="header-mc-user-menu">
          <button
            onClick={handleShowSettigns}
            id="header-mc-user-settings-close"
          >
            X
          </button>
          <HeaderUserData userName={user.name} userImg={user.image_url} />
        </div>
      </section>
    </div>
  );
}
