import styles from "./Modal.module.css";
import Image from "../Image/Image";

function Modal({ name, click }) {
  return (
    <div className={styles.containerModal}>
      <Image click={click} pic={name} />
    </div>
  );
}

export default Modal;
