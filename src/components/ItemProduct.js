import { ic_heart } from "../assets/icons";
import styles from "../styles/productItem.module.css";

export default function ItemProduct({ product }) {
  return (
    <div className={styles.container}>
      <img
        className={styles.imgProd}
        width={"100%"}
        height={"70%"}
        src="https://images.pexels.com/photos/2495555/pexels-photo-2495555.jpeg"
        alt="product"
      />
      <div className={styles.containerVer}>
        <p className={styles.textPrice}>$60.00</p>
        <img className={styles.iconFavorite} width={24} height={24} src={ic_heart} alt="product" />
      </div>
      <p className={styles.textDescription}>Beautiful chairs from Fair De Clair Ponivous</p>
    </div>
  );
}
