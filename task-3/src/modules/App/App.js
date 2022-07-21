import { useState } from "react";
import Form from "../../components/Form/Form";
import styles from "./App.module.css";
import Table from "../../components/Table/Table";
const App = () => {
  const [university, setUniversity] = useState([]);

  return (
    <div className={styles.content}>
      <Form setUniversity={setUniversity} />
      <h1>Search results</h1>
        {university.length > 0
        ? <div><Table universities={university}/></div>
        : "No results !!!"}
    </div>
  );
};
export default App;
