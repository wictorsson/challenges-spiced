import "../styles.css";

import avatar from "../img/avatar.jpg";
import logo from "../img/logo.jpg";

export default function Header({ children }) {
  return <header className="header">{children}</header>;
}
