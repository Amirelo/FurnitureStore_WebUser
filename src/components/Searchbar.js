import styles from "../styles/searchbar.module.css";
import * as icons from "../assets/icons";

export default function Searchbar() {
  return (
    <div className={styles.container}>
      <input className={styles.input} placeholder="Search here" />
      <img
        className={styles.startIcon}
        src={icons.ic_search}
        alt="search"
      />
    </div>
  );
}
