import ServicesDropdown from "./ServicesDropdown";
import ContentDropdown from "./ContentDropdown";
import styles from "./style.module.css";
import AboutDropdown from "./AboutDropdown";
import { useState } from "react";

function Header() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);

  function handleOpen1() {
    setOpen1(!open1);
  }

  function handleOpen2() {
    setOpen2(!open2);
  }

  function handleOpen3() {
    setOpen3(!open3);
  }

  return (
    <div>
      <header>
        <nav className={styles.nav}>
          <ul>
            <li>
              <h4 onClick={handleOpen1}>Services</h4>
              {open1 && <ServicesDropdown />}
            </li>
            <li>
              <h4 onClick={handleOpen2}>Content</h4>
              {open2 && <ContentDropdown />}
            </li>
            <li>
              <h4 onClick={handleOpen3}>About</h4>
              {open3 && <AboutDropdown />}
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
