import styles from "./style.module.css";

function AboutDropdown() {
  const menu = ["About Us", "Our Team", "Careers", "Investors", "Partners"];
  return (
    <div className={styles.aboutservices}>
      <ul>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <h3>{item}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
          );
        })}
        <li style={{ background: "rgb(221, 223, 223)" }}>
          <div className={styles.special}>
            <div>
              <h4>Watch Demo</h4>
            </div>

            <div>
              <h4>Contact Sales</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default AboutDropdown;
