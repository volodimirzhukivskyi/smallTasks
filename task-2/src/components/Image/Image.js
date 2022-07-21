import styles from "./Image.module.css";
import Button from "../Button/Button";
import stylesButton from "../Button/Button.module.css";

const Image = ({ pic, click, delImg }) => {
  return (
    <div className={styles.wrapper} onClick={click}>
      <img
        className={styles.img}
        src={`${process.env.PUBLIC_URL}/image/task-2/${pic}.jpg`}
        alt={`${pic}`}
      />
      <Button
        onClick={delImg ? delImg : click}
        className={stylesButton.CloseButton}
      >
        X
      </Button>
    </div>
  );
};
export default Image;
