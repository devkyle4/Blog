import portrait from "./assets/img/mypic.jpg";
import { Icons } from "./icons/icons";

export default function DropDownMenu() {
  return (
    <div className="menu-container">
      <div className="menu-trigger">
        <img src={portrait} alt="" />
      </div>

      <div className="dropdown-menu">
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
