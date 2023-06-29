import styles from "./style.module.css";
import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div>
      <header>
        <nav className={styles.nav}>
          <ul>
            <li>
              <h4 onClick={handleOpen}>Services</h4>
            </li>
            <li>
              <h4 onClick={handleOpen}>Content</h4>
            </li>
            <li>
              <h4 onClick={handleOpen}>About</h4>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
