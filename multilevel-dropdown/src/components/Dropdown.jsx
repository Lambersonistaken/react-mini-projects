import styles from "./style.module.css";

function Dropdown() {
  const menu = ["Home", "About", "Menu", "Drop"];

  return (
    <div className={styles.dropdown}>
      <ul>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Dropdown;
