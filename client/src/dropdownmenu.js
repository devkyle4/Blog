import { react, useState } from "react";
import portrait from "./assets/img/mypic.jpg";
import { Icons } from "./icons/icons";

export default function DropDownMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="menu-container">
      <div className="menu-trigger" onClick={() => setOpen(!open)}>
              <img src={portrait} alt="" />
              <span className="arrow-down">{<Icons.arrowdown />}</span>
      </div>

      <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
        <h3>Evans Kyle</h3>
        <span></span>
        <ul>
          <DropdownItem icon={<Icons.user />} text={"My Profile"} />
          <DropdownItem icon={<Icons.edit />} text={"Edit Profile"} />{" "}
          <DropdownItem icon={<Icons.envelope />} text={"Inbox"} />{" "}
          <DropdownItem icon={<Icons.question />} text={"Help"} />{" "}
          <DropdownItem icon={<Icons.settings />} text={"Settings"} />{" "}
          <DropdownItem icon={<Icons.logout />} text={"Logout"} />
        </ul>
      </div>
    </div>
  );
}

function DropdownItem(props) {
  const { icon, text } = props;
  return (
    <li className="dropdownItem">
      <span className="icon">{icon}</span>
      <a>{text}</a>
    </li>
  );
}
