import styles from "./style.module.css";

function OurTeam() {
  const menu = ["Joe Smith", "Jane Doe", "John Doe", "Jane Smith"];

  return (
    <div className={styles.ourteamservices}>
      <ul>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item}</h3>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OurTeam;
