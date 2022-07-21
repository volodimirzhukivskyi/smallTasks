import styles from "./App.module.css";
import Image from "../../components/Image/Image";
import { useState } from "react";
import Header from "../Header/Header";
import Modal from "../../components/Modal/Modal";
import cn from "classnames";
import globalStyles from "../../global.module.css";
import Button from "../../components/Button/Button";

const NUMBER_IMGS = 12;
const App = () => {
  const [images, setImages] = useState(getNameImages(NUMBER_IMGS));
  const [isOpen, setIsOpen] = useState({ open: false, name: null });

  function getNameImages(number) {
    const images = [];
    const localData = localStorage.getItem("imagesName");
    for (let i = 1; i <= number; i++) {
      if (localData === "" || !localData) {
        images.push(i);
      } else if (JSON.parse(localData).includes(i)) {
        images.push(i);
      }
    }
    return images;
  }
  const deleteHandler = (e, name) => {
    setImages((prev) => {
      const newImages = prev.filter((pic) => pic !== name);
      if (newImages.length !== 0) {
        localStorage.setItem("imagesName", JSON.stringify(newImages));
      }
      return newImages;
    });

    e.stopPropagation();
  };
  return (
    <div>
      <Header data={images.length} />
      <div className={cn(styles.content, globalStyles.container)}>
        {images.map((name) => (
          <Image
            key={name}
            pic={name}
            delImg={(e) => deleteHandler(e, name)}
            click={() => setIsOpen({ open: true, name: name })}
          />
        ))}
      </div>
      <div className={styles.wrapperButton}>
        <Button
          onClick={() => {
            localStorage.setItem("imagesName", "");
            setImages(getNameImages(NUMBER_IMGS));
          }}
        >
          Restore images
        </Button>
      </div>
      {isOpen.name !== null && (
        <Modal
          name={isOpen.name}
          click={() => setIsOpen({ open: false, name: null })}
        />
      )}
    </div>
  );
};
export default App;
