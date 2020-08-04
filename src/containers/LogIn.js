import React from "react";
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom";

function LogIn(props) {
  const history = useHistory();

  return (
    <span>
      <div>
        <button
          onClick={() => {
            const token = "1234";
            Cookies.set("userToken", token, { expires: 2000 });
            props.setUser({
              token: token,
            });
            history.push("/");
          }}
        >
          Se connecter
        </button>
      </div>
    </span>
  );
}

export default LogIn;
