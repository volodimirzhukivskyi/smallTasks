import styles from "./Header.module.css";
import globalStyles from "../../global.module.css";
import { formatData } from "../../helpers/data";

import cn from "classnames";
const Header = ({ data }) => {
  return (
    <header className={styles.header}>
      <div className={cn(globalStyles.container, styles.content)}>
        <h2 className={styles.h2}>{data}</h2>
        <h3 className={styles.h3}>{formatData(new Date())}</h3>
      </div>
    </header>
  );
};
export default Header;
