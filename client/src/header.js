/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./userContext";
import DropDownMenu from './dropdownmenu'

export default function Header() {
  const { setUserInfo,userInfo } = useContext(UserContext);

  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username =userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        Termite
      </Link>
      <nav>
        {username && (
          <div className="write_signout">
            <Link to="/create">Write</Link>
            <a onClick={logout}>Sign Out</a>
            <DropDownMenu/>
          </div>
        )}
        {!username && (
          <>
            <Link to="/login">Sign In</Link>
            <Link to="/signup">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
