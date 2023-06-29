import Dropdown from "./Dropdown";
import styles from "./style.module.css";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div>
      <div className={styles.header}>
        <ul className={styles.list}>
          <li>
            <a onClick={handleOpen} href="#">
              Home
            </a>
            {open && <Dropdown />}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
